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
import { getFirestore, doc, setDoc, getDoc, updateDoc, collection, addDoc } from "firebase/firestore";
import app from "../firebase/firebase.config"; // <-- This is the correct import

export const AuthContext = createContext();
const db = getFirestore(app); // Using the imported `app` object to initialize Firestore
const auth = getAuth(app); // Using the imported `app` object to initialize Firebase Auth
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create an account
  const createUser = async (email, password, displayName, phoneNumber, address, gender) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;

      await updateProfile(user, { displayName });

      // Storing the user's additional information in Firestore
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        email: user.email,
        displayName,
        phoneNumber,
        address,
        gender,
        receipt: [], // Placeholder for receipts data
        tableHistory: [], // Placeholder for table history
        upcomingTableBookings: [] // Placeholder for upcoming table bookings
      });

      setUser({
        ...user,
        displayName,
      });

      return result;
    } catch (error) {
      console.error("Error creating user:", error);
      throw new Error(error.message || "Error creating user");
    } finally {
      setLoading(false);
    }
  };

  // Signup with Google
  const signUpWithGmail = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      let updatedUser = result.user;

      if (updatedUser && !updatedUser.displayName) {
        const defaultName = updatedUser.email.split("@")[0];
        await updateProfile(updatedUser, { displayName: defaultName });
        updatedUser = { ...updatedUser, displayName: defaultName };
      }

      // Ensure photoURL is included
      setUser({
        ...updatedUser,
        photoURL: updatedUser.photoURL || '',
      });

      // Storing the user's additional information in Firestore
      const userRef = doc(db, "users", updatedUser.uid);
      await setDoc(userRef, {
        email: updatedUser.email,
        displayName: updatedUser.displayName,
        photoURL: updatedUser.photoURL || '',
        receipt: [],
        tableHistory: [],
        upcomingTableBookings: []
      });

      return result;
    } catch (error) {
      console.error("Error with Google sign-in:", error);
      throw new Error(error.message || "Error with Google sign-in");
    } finally {
      setLoading(false);
    }
  };

  // Login using email & password
  const login = async (email, password) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      return result;
    } catch (error) {
      console.error("Error logging in:", error);
      throw new Error(error.message || "Error logging in");
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
      throw new Error(error.message || "Error logging out");
    } finally {
      setLoading(false);
    }
  };

  // Update profile
  const updateUserProfile = async (name, photoURL, phoneNumber, address, gender) => {
    if (!auth.currentUser) return;
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, { displayName: name, photoURL });

      // Updating Firestore with the new profile data
      const userRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userRef, {
        displayName: name,
        photoURL,
        phoneNumber,
        address,
        gender
      });

      const updatedUser = {
        ...auth.currentUser,
        displayName: name,
        photoURL,
      };
      setUser(updatedUser);
    } catch (error) {
      console.error("Error updating profile:", error);
      throw new Error(error.message || "Error updating profile");
    } finally {
      setLoading(false);
    }
  };

  const fetchUserData = async (userId) => {
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        return userSnap.data();
      } else {
        throw new Error("User data not found");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw new Error(error.message || "Error fetching user data");
    }
  };

  const addReceipt = async (userId, receiptData) => {
    const userRef = doc(db, "users", userId);

    try {
      // Adding receipt to Firestore (could be an array or an object depending on your structure)
      await updateDoc(userRef, {
        receipt: [...receiptData], // Make sure receiptData is in the correct format (e.g., array of objects)
      });
    } catch (error) {
      console.error("Error adding receipt:", error);
      throw new Error(error.message || "Error adding receipt");
    }
  };

  // Check signed-in user on component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
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
    fetchUserData,
    addReceipt,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
