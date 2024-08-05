import { createBrowserRouter } from "react-router-dom";
import Register from "../components/Register";
import Login from "../components/Login";
import Home from "../components/User/Home";
import Vendor from "../components/Vendor/Vendor";
import Admin from "../components/Admin/Admin";
import ForgotPassword from "../components/PasswordReset/ForgotPassword";
import VerifyEmail from "../components/PasswordReset/VerifyEmail";
import VerifyOtp from "../components/PasswordReset/VerifyOtp";
import UpdatePassword from "../components/PasswordReset/UpdatePassword";
import AllProducts from "../components/User/AllProducts";
import Orders from "../components/User/Orders";
import AllOrders from "../components/User/AllOrders";
import Profile from "../components/User/Profile";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },{
        path: "/home",
        element: <Home/>,
        children:[{
            path: "",
            element: <AllProducts/>
        },{
            path: "/home/myCart",
            element: <Orders/>
        },{
            path: "/home/myOrder",
            element: <AllOrders/>
        },{
            path: "/home/profile",
            element: <Profile/>
        }
        ]
    },{
        path: "/vendor",
        element: <Vendor/>
    },{
        path: "/admin",
        element: <Admin/>
    },
    {
        path: "/forgotPassword",
        element: <ForgotPassword/>,
        children:[{
            path: "",
            element: <VerifyEmail/>
        },
        {
            path: "/forgotPassword/verifyOtp",
            element: <VerifyOtp/>
        },
        {
            path: "/forgotPassword/updatePassword",
            element: <UpdatePassword/>
        }
    ]
    }
])

export default routes;