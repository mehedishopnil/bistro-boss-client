import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import PrivateRout from "./PrivateRout";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Reservation from "../pages/Dashboard/Reservation/Reservation";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/contactUs',
            element: <ContactUs></ContactUs>
        },
        {
          path: '/menu',
          element:<Menu></Menu>
        },
        {
          path: '/order/:category',
          element:<Order></Order>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/registration',
          element: <Registration></Registration>
        },
        {
          path: 'secret',
          element: <PrivateRout><Secret></Secret></PrivateRout>
        }
        
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRout><Dashboard></Dashboard></PrivateRout>,
      children: [
        {
          path: "myCart",
          element: <MyCart></MyCart>
        },
        {
          path: "userHome",
          element: <UserHome></UserHome>,
        },
        {
          path: "reservation",
          element: <Reservation></Reservation>
        },
        {
          path: "paymentHistory",
          element: <PaymentHistory></PaymentHistory>
        },
        
      ]
    }
  ]);
  
