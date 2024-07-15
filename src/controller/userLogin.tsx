import { useState } from "react";
import toast from "react-hot-toast";
import { LoginData } from "../models/data.model";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

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
      Cookies.set('jwt',`${data.jwtToken}`)
      if (!response.ok) {
        throw new Error("Failed to Login");
      }
      data.role === "USER" ? navigate("/home") : navigate("/vendor");
    } catch (err) {
      toast.error(`${err}`);
    }
  };
  return {loginData,handleChange,handleSubmit}
};
