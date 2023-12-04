import { Link } from "react-router-dom";
import cartIcon from "../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import { FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  return (
    <div className="text-white w-full fixed z-30 px-8 py-5 bg-[#15151580]">
      <div className="container mx-auto md:mx-auto grid grid-cols-2 ">
        <div className="">
          <a className="text-2xl font-bold" href="/">BISTRO BOSS</a><br></br>
          <a className="text-center ps-5" href="/">RESTAURANT</a>
        </div>

        <div className="flex items-center justify-center text-sm gap-4">
          <Link className="font-semibold" to="/">
            HOME
          </Link>
          
          <Link className="font-semibold" to="/menu">
            OUR MENU
          </Link>
          <Link className="font-semibold uppercase" to="/order/salads">
            Order food
          </Link>
          <Link className="font-semibold" to="/contactUs">
            CONTACT US
          </Link>
          <Link className="font-semibold" to="/">
            DASHBOARD
          </Link>

          <Link>
            <img className="w-8" src={cartIcon} alt="" />
          </Link>
          <div className="text-sm flex gap-5">
            
            
            {
              user ? <>
              <Link><FaUser></FaUser></Link>
              <button onClick={logOut} className="font-semibold">LogOut</button>
              </> : 
              <>
              <Link to={'/login'}><button className="font-semibold">Log In</button></Link>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
