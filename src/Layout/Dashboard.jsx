import { NavLink, Outlet } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import {
  FaBook,
  FaUsers,
  FaCalendarAlt,
  FaEnvelope,
  FaHome,
  FaListUl,
  FaShoppingBag,
  FaShoppingCart,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  //TODO: load data from the server to have dynamic isAdmin based on Data
  // const isAdmin = true;
  const [isAdmin] = useAdmin();

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
          {isAdmin ?
          // For Admin Access Only::
            <>
            <div className="text-lg font-bold uppercase">
                <li>
                  <NavLink to="adminHome" activeclassname="text-white">
                    <FaHome />
                    Admin Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to="addItems" activeclassname="text-white">
                    <FaUtensils></FaUtensils>
                    Add Items
                  </NavLink>
                </li>

                <li>
                  <NavLink to="manageItems" activeclassname="text-white">
                    <FaListUl></FaListUl>
                    Manage Items
                  </NavLink>
                </li>

                <li>
                  <NavLink to="paymentHistory" activeclassname="text-white">
                    <FaBook></FaBook>
                    Manage Bookings
                  </NavLink>
                </li>

                <li>
                  <NavLink to="allUsers" activeclassname="text-white">
                    <FaUsers></FaUsers>
                    All Users
                  </NavLink>
                </li>

                
              </div>
            </>
           : 
          //  for Normal User Access::
            <>
              <div className="text-lg font-bold uppercase">
                <li>
                  <NavLink to="userHome" activeclassname="text-white">
                    <FaHome />
                    User Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to="reservation" activeclassname="text-white">
                    <FaCalendarAlt />
                    Reservation
                  </NavLink>
                </li>

                <li>
                  <NavLink to="paymentHistory" activeclassname="text-white">
                    <FaWallet />
                    Payment History
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="myCart"
                    activeclassname="text-white"
                    className={"flex items-center"}
                  >
                    <div className="flex gap-2 items-center">
                      <FaShoppingCart />
                      <h1>My Cart</h1>
                    </div>
                    <div>
                      <h1 className="badge text-lg text-[#D1A054]">
                        + {cart?.length || 0}
                      </h1>
                    </div>
                  </NavLink>
                </li>
              </div>
            </>
          }

          <div className="border-t-2 border-white my-2"></div>

          <div className="text-lg font-bold uppercase">
            <li>
              <NavLink to="/" activeclassname="text-white">
                <FaHome />
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/menu" activeclassname="text-white">
                <TiThMenu />
                Menu
              </NavLink>
            </li>

            <li>
              <NavLink to="/order/salad" activeclassname="text-white">
                <FaShoppingBag />
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink to="/contactUs" activeclassname="text-white">
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
