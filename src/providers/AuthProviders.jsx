import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();
const auth= getAuth(app)

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState([]);

    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => 
    {
      setLoading(true);
      return signInWithEmailAndPassword( email, password)
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
