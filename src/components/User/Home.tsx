import { Outlet, useNavigate} from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Cookies from "js-cookie";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { SearchContext } from "./SearchContext";

const Home = () => {
  const navigate = useNavigate();
  const cooki = Cookies.get("jwt");
  // const stateData = useLocation();
  // console.log(stateData)
  // console.log(sessionStorage.getItem('role'));
 

  useEffect(() => {
    if (cooki === undefined ) {
      navigate("/");
      toast.error("Log in to access the home page");
    }
   
  }),
    [cooki, navigate];

  return (
    <>
      <SearchContext>
        <NavigationBar />
        <Outlet />
      </SearchContext>
    </>
  );
};
export default Home;
