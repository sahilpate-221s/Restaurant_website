import React, { createContext } from 'react'
import app from '../firebase/firebase.config'
import {
    getAuth,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    onAuthStateChanged,
    
}from "firebase/auth"



export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // Create an account
  const createUser = async (email, password, displayName) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      // Update user profile after account creation
      await updateProfile(result.user, { displayName });
      // Set user state to include display name
      setUser({ ...result.user, displayName });
      setLoading(false);
      return result; // Return result to the component
    } catch (error) {
      setLoading(false);
      throw error; // Allow calling component to catch and handle the error
    }
  };

  // Signup with Gmail
  const signUpWithGmail = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      // Update user profile with displayName if not set
      if (user && !user.displayName) {
        await updateProfile(user, { displayName: user.email.split('@')[0] }); // Use email as default display name
        setUser({ ...user, displayName: user.email.split('@')[0] });
      } else {
        setUser(user);
      }
      setLoading(false);
      return result; // Return result to the component
    } catch (error) {
      setLoading(false);
      throw error; // Allow calling component to catch and handle the error
    }
  };

  // Login using email & password
  const login = async (email, password) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user); // Update user state on login
      setLoading(false);
      return result; // Return result to the component
    } catch (error) {
      setLoading(false);
      throw error; // Allow calling component to catch and handle the error
    }
  };

  // Logout
  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null); // Clear user state on logout
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error; // Allow calling component to catch and handle the error
    }
  };

  // Update profile
  const updateUserProfile = async (name, photoURL) => {
    if (!auth.currentUser) return;
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
      // Update local user state
      setUser({ ...auth.currentUser, displayName: name, photoURL: photoURL });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error; // Allow calling component to catch and handle the error
    }
  };



  // Check signed-in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null); // Clear user state if not logged in
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    createUser,
    signUpWithGmail,
    login,
    logOut,
    updateUserProfile,
    loading,
  };




    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
  
}

export default AuthProvider
