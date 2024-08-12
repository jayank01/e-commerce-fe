import { useState } from "react";
import toast from "react-hot-toast";
import { LoginData } from "../models/data.model";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const userLogin = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e: { target: { name: string; value: string } }) => {
    let { name, value } = e.target;

    setLoginData((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_LOGIN_USER}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );

      const data = await response.json();
      // console.log(data)

      sessionStorage.setItem("role", data.role);
      localStorage.setItem("userId", `${data.id}`);
      Cookies.set("jwt", `${data.jwtToken}`);

      if (!response.ok) {
        throw new Error(`${data.message}`);
      }
      setLoginData({
        username: "",
        password: "",
      });
      if (data.role === "ADMIN") {
        toast.success("Admin Logged in Successfully");
        navigate("/admin");
      } else if (data.role === "VENDOR") {
        toast.success("Vendor Logged in Successfully");
        navigate("/vendor");
      } else {
        navigate("/home", { state: data });
        toast.success("User Logged in Successfully");
      }
    } catch (err: any) {
      toast.error(`${err.message}`);
    }
  };
  return { loginData, handleChange, handleSubmit };
};
