import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProviders = ({ children }) => {
    const [recommendedMenu, setRecommendedMenu] = useState([]);
    const [popularMenu, setPopularMenu] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const recommendedMenu = data.filter(items => items.category === 'salad');
            setRecommendedMenu(recommendedMenu);
            const popularItems = data.filter(items => items.category === 'popular');
            setPopularMenu(popularItems)
        })
    },[])

    useEffect(()=>{
        fetch('reviews.json')
        .then(res=> res.json())
        .then(data => setReviews(data))
    },[])

  const authInfo = {
    popularMenu,
    recommendedMenu,
    reviews

  };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;
