import { Link } from "react-router-dom";
import cartIcon from "../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className="text-white bg-[#15151580]">
      <div className="container mx-auto md:mx-auto grid grid-cols-2 ">
        <div>
          <h1 className="text-2xl font-bold">BISTRO BOSS</h1>
          <h3>RESTAURANT</h3>
        </div>

        <div className="flex items-center justify-center text-sm gap-4">
          <Link className="font-semibold" to="/">
            HOME
          </Link>
          <Link className="font-semibold" to="/contactUs">
            CONTACT US
          </Link>
          <Link className="font-semibold" to="/">
            DASHBOARD
          </Link>
          <Link className="font-semibold" to="/">
            OUR MENU
          </Link>
          <Link className="font-semibold" to="/">
            OUR SHOP
          </Link>
          <Link>
            <img className="w-8" src={cartIcon} alt="" />
          </Link>

          <div className="text-sm flex gap-5">
            <button className="font-semibold">SIGN IN</button>
            <Link><FaUser></FaUser></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
