import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();
const auth= getAuth(app)

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);

    const createUser = async(name, email, password) => {
      setLoading(true);
      try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        // Update user's display name
        await updateProfile(userCredential.user, { displayName: name });
    
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
    }

    const login = (email, password) => 
    {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    }


    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        console.log("Current User:", currentUser);
        setLoading(false);
       })

       return () => {
        return unsubscribe();
       }
    },[])

    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=> res.json())
        .then(data => setReviews(data))
    },[])

  const authInfo = {
    user,
    loading,
    reviews,
    createUser,
    login,
    logOut

  };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;
