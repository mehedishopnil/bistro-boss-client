import {
  FaCalendarAlt,
  FaEnvelope,
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

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
            <li className={location.pathname === "/" ? "" : "text-white"}>
              <Link to="userHome">
                <FaHome />
                User Home
              </Link>
            </li>

            <li
              className={
                location.pathname === "/reservation" ? "" : "text-white"
              }
            >
              <Link to="reservation">
                <FaCalendarAlt />
                Reservation
              </Link>
            </li>

            <li
              className={
                location.pathname === "/paymentHistory" ? "" : "text-white"
              }
            >
              <Link to="paymentHistory">
                <FaWallet />
                Payment History
              </Link>
            </li>

            <li className={location.pathname === "myCart" ? "" : "text-white"}>
              <Link to="myCart">
                <FaShoppingCart />
                My Cart
              </Link>
            </li>
          </div>

          <div className="border-t-2 border-white my-2 "></div>

          <div className="text-lg font-bold uppercase">
          <li className={location.pathname === "/" ? "" : "text-white"}>
              <Link to="/">
                <FaHome />
                Home
              </Link>
            </li>


            <li className={location.pathname === "myCart" ? "" : "text-white"}>
              <Link to="myCart">
              <TiThMenu />
                Menu
              </Link>
            </li>


            <li className={location.pathname === "myCart" ? "" : "text-white"}>
              <Link to="myCart">
                <FaShoppingBag />
                Shop
              </Link>
            </li>

            <li className={location.pathname === "myCart" ? "" : "text-white"}>
              <Link to="myCart">
                <FaEnvelope />
                Contact
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
