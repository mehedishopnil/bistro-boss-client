import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";

const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('registration');
    
    return (
        <div>
            {!noHeaderFooter && <Header></Header>}
            <Outlet></Outlet>
            {!noHeaderFooter && <Footer></Footer>}
        </div>
    );
};

export default Main;
