import Cookies from "js-cookie"
import NavigationBar from "./NavigationBar"
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
const Vendor = () => {

  const cookies = Cookies.get('jwt');
  const navigate = useNavigate();
  useEffect(()=>{
    if(cookies === undefined){
        toast.error("Only Vendors are allowed")
        navigate('/')
    }
  },[]);
  return (
    <>
      <NavigationBar/>
      <Dashboard/>
    </>
  )
}
export default Vendor