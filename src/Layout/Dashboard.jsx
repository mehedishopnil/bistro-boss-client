import { NavLink, Outlet } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import {
  FaCalendarAlt,
  FaEnvelope,
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open f">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-4 w-80 min-h-full font-[Cinzel] text-[#151515] bg-[#D1A054]">
          <div className="mb-10 p-5 uppercase">
            <h1 className="text-4xl font-black tracking-[1px]">BISTRO BOSS</h1>
            <h1 className="text-2xl font-bold tracking-[8px]">Restaurant</h1>
          </div>
          {/* Sidebar content here */}

          <div className="text-lg font-bold uppercase">
            <li>
              <NavLink to="userHome" activeClassName="text-white">
                <FaHome />
                User Home
              </NavLink>
            </li>

            <li>
              <NavLink to="reservation" activeClassName="text-white">
                <FaCalendarAlt />
                Reservation
              </NavLink>
            </li>

            <li>
              <NavLink to="paymentHistory" activeClassName="text-white">
                <FaWallet />
                Payment History
              </NavLink>
            </li>

            <li>
              <NavLink to="myCart" activeClassName="text-white">
                <FaShoppingCart />
                My Cart
              </NavLink>
            </li>
          </div>

          <div className="border-t-2 border-white my-2"></div>

          <div className="text-lg font-bold uppercase">
            <li>
              <NavLink to="/" activeClassName="text-white">
                <FaHome />
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="menu" activeClassName="text-white">
                <TiThMenu />
                Menu
              </NavLink>
            </li>

            <li>
              <NavLink to="shop" activeClassName="text-white">
                <FaShoppingBag />
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink to="contact" activeClassName="text-white">
                <FaEnvelope />
                Contact
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
