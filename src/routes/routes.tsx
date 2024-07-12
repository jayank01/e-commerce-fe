import { createBrowserRouter } from "react-router-dom";
import Register from "../components/Register";
import Login from "../components/Login";
import Home from "../components/Home";
import Vendor from "../components/Vendor";

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
        element: <Home/>
    },{
        path: "/vendor",
        element: <Vendor/>
    }
])

export default routes;