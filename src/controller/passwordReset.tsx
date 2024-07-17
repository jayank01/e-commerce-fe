import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export const emailVerify = () => {
    const navigate = useNavigate();
    const [mail, setMail] = useState("");
  
    const handleChange = (e:any)=>{
      setMail(e.target.value);
    }
    const handleClick = async (e:any) => {
      e.preventDefault();
      try {
  
          const dataToSend = {
              email: mail
          }
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_EMAIL_VERIFY}`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(dataToSend),
          }
        );
        const data = await response.json();
  
        if (!response.ok) {
          throw new Error(`${data.message}`);
        }
        toast.success("Otp Send to Mail");
        navigate("/forgotPassword/verifyOtp",{ state: dataToSend });
      } catch (error) {
        toast.error(`${error}`);
      }
    };
    return {handleChange, handleClick, mail};
}

export const otpVerify =()=>{
    const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const dataToSend = {
    email: location.state.email,
    otp: otp
  }

  const handleChange = (e:any)=>{
    setOtp(e.target.value)
  }
  const handleVerifyOtp = async (e:any) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_OTP_VERIFY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(`${data.message.split(" ")[0]}`);
      }
      toast.success("OTP verified");
      navigate("/forgotPassword/updatePassword",{state:location.state.email});
    } catch (error) {
        toast.error(`${error}`);
    }
  };
  return {otp,handleChange,handleVerifyOtp}
}

export const changePassword=()=>{
    const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const location = useLocation();

  const handleChangeNew = (e: any) => {
    setNewPassword(e.target.value);
  };
  const handleChangeConfirm = (e: any) => {
    setConfirmPassword(e.target.value);
  };

  const handleUpdatePassword = async() => {
    const dataToSend = {
        email: location.state,
        password: newPassword,
        confirmPassword: confirmPassword
    }
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}${import.meta.env.VITE_CHANGE_PASSWORD}`, 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(dataToSend)
            }

        )
        const data = await response.json();
        if(!response.ok){
            throw new Error(`${data.message}`)
        }

        toast.success(`${data.message}`);
        navigate("/");
        
    } catch (error) {
        toast.error(`${error}`)
    }
    toast.success("Password updated Successfully");
    navigate("/");
  };
  return {newPassword,confirmPassword,handleChangeNew,handleChangeConfirm,handleUpdatePassword}
}

