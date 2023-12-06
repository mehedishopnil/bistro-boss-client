import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import useCart from "../../../hooks/useCart";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  return (
    <div className="text-white w-full fixed z-30 px-8 py-5 bg-[#15151580]">
      <div className="container mx-auto md:mx-auto grid grid-cols-2 ">
        <div className="">
          <a className="text-2xl font-bold" href="/">
            BISTRO BOSS
          </a>
          <br></br>
          <a className="text-center ps-5" href="/">
            RESTAURANT
          </a>
        </div>

        <div className="flex items-center justify-center text-sm gap-4">
          <Link className="font-semibold" to="/">
            HOME
          </Link>

          <Link className="font-semibold" to="/menu">
            OUR MENU
          </Link>
          <Link className="font-semibold uppercase" to="/order/salad">
            Order food
          </Link>
          <Link className="font-semibold" to="/contactUs">
            CONTACT US
          </Link>
          <Link className="font-semibold" to="/secret">
            SECRET
          </Link>

          <Link to={'/dashboard/myCart'}>
            <button className="btn">
              <FaShoppingCart></FaShoppingCart>
              <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </button>
          </Link>
          <div className="text-sm flex gap-5">
            {user ? (
              <>
                <div>
                  {user.photoURL ? (
                    <div className="flex gap-3">
                      <Link>
                        <img
                          className="w-10 rounded-full"
                          src={user.photoURL}
                          alt=""
                        />
                      </Link>
                      <button onClick={logOut} className="font-semibold">
                        LogOut
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-3">
                      <Link>
                        <FaUser></FaUser>
                      </Link>
                      <button onClick={logOut} className="font-semibold">
                        LogOut
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link to={"/login"}>
                  <button className="font-semibold">Log In</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
