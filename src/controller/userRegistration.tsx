import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { UserData } from "../models/data.model";
import { validateFormData } from "../utils/registerValidation";

export const userRegistration = () => {
  const navigate = useNavigate();
  const [loading,setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<UserData>({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    phoneNumber: "",
    role: "USER",
  });
  // console.log(loading)
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    const validationErrors = validateFormData(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorMessage = Object.values(validationErrors)[0];
      toast.error(firstErrorMessage);
      setLoading(false)
      return;
    }
    
    try {
      const otpResponse = await fetch("http://localhost:8080/otp/verifyMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.username }),
      });

      const otpData = await otpResponse.json();

      if (!otpResponse.ok) {
        setLoading(false)
        throw new Error(`${otpData.message}`);
      }
      toast.success("Otp Send to Mail");
      

      setShowModal(true); // Show OTP modal
    } catch (err: any) {
      toast.error(`Error sending OTP: ${err.message}`);
      setLoading(false)
    }
  };

  const handleOtpSubmit = async (otp:string) => {
    // console.log(otp)
    let otpSend = {
      email: formData.username,
      otp: otp,
    };
  
    try {
      const otpVerificationResponse = await fetch(
        "http://localhost:8080/otp/verifyOTP",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(otpSend),
        }
      );

      const otpVerificationData = await otpVerificationResponse.json();

      if (!otpVerificationResponse.ok) {
        throw new Error(`${otpVerificationData.message}`);
      }
      
      const dataToSend = formData;
      console.log(dataToSend)
      // OTP verified, now register the user
      const registrationResponse = await fetch(
        `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_REGISTER_USER}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      const registrationData = await registrationResponse.json();
      console.log(registrationData);
      if (!registrationResponse.ok) {
        throw new Error(`${registrationData.message}`);
      }

      toast.success(`${formData.role} registered successfully`);
      navigate("/");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setShowModal(false); // Hide OTP modal
      
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    showModal,
    setShowModal,
    handleOtpSubmit,
    loading
  };
};
