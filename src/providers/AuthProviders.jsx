import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProviders = ({ children }) => {
    const [recommendedMenu, setRecommendedMenu] = useState([])
    const [popularMenu, setPopularMenu] = useState([]);

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

  const authInfo = {
    popularMenu,
    recommendedMenu

  };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;
