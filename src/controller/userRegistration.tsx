import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { UserData } from "../models/data.model";

export const userRegistration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<UserData>({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    phoneNumber: "",
    role: "USER",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    let { name, value } = e.target;

    setFormData((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const dataToSend = formData;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_REGISTER_USER}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );
      const data = await response.json();
      // console.log(data);
      if (!response.ok) {
        throw new Error(`${data.message}`);
      }
      toast.success(`${formData.role} registered successfully`);
      navigate("/");
    } catch (err :any) {
      // console.error("Error sending data:", err);
      toast.error(`${err.message}`);
    }
  };
  return { formData, handleChange, handleSubmit };
};
