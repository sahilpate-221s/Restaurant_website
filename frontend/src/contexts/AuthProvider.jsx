import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create an account
  const createUser = async (email, password, displayName) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const updatedUser = { ...result.user, displayName };
      await updateProfile(result.user, { displayName });
      setUser(updatedUser); // Use updatedUser to keep the latest state
      return result;
    } catch (error) {
      throw error; // Propagate the error for higher level handling
    } finally {
      setLoading(false);
    }
  };

  // Signup with Gmail
  const signUpWithGmail = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      let updatedUser = result.user;
      if (updatedUser && !updatedUser.displayName) {
        const defaultName = updatedUser.email.split("@")[0]; // Extract default name
        await updateProfile(updatedUser, { displayName: defaultName });
        updatedUser = { ...updatedUser, displayName: defaultName };
      }
      setUser(updatedUser); // Update with the user including displayName
      return result;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Login using email & password
  const login = async (email, password) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user); // Update the user state after successful login
      return result;
    } catch (error) {
      throw error; // Allow upper-level components to handle errors
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null); // Clear user state on logout
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Update profile
  const updateUserProfile = async (name, photoURL) => {
    if (!auth.currentUser) return;
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, { displayName: name, photoURL });
      // Fetch the most up-to-date user profile after the update
      const updatedUser = {
        ...auth.currentUser, // Ensure you fetch the latest user data
        displayName: name,
        photoURL: photoURL,
      };
      setUser(updatedUser); // Update local user state
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Check signed-in user on component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null); // Set user state based on auth state
      setLoading(false); // Stop loading after the auth state has been checked
    });

    return () => unsubscribe(); // Clean up listener on unmount
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
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
