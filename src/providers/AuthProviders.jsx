import { createContext, useEffect, useState } from "react";
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
import Swal from "sweetalert2";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const googleProvider = new GoogleAuthProvider();

  
  //User Part::
  const createUser = async (name, photoUrl, email, password) => {
    setLoading(true);
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update user's display name
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photoUrl,
      });

      // Users for backend server:
      const saveUser = { name: name, email: email };
      const response = await fetch("http://localhost:5000/users", {
        method: "POST", // Use POST instead of PUT if that's the method in your server
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const userCreatedData = await response.json();

      if (userCreatedData.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      // Set the user in the state
      setUser(userCredential.user);

      return userCredential;
    } catch (error) {
      // Handle error
      console.error("Error creating user:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };



//Login Part
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };



  //Google Login
  const googleSignIn = ()=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  //LogOut Part
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };



  // const updateUserProfile = () =>{
  //   updateProfile(auth.currentUser, {
  //     displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
  //   }).then(() => {
  //     // Profile updated!
  //     // ...
  //   }).catch((error) => {
  //     // An error occurred
  //     // ...
  //   });
  // }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Current User:", currentUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const authInfo = {
    user,
    loading,
    reviews,
    createUser,
    login,
    logOut,
    googleSignIn
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
