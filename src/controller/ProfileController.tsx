import { useState } from "react";
import toast from "react-hot-toast";
import { UserData } from "../models/Interfaces";


const ProfileController = () => {
    const [showModal, setShowModal] = useState(false);

  const [userData, setUserData] = useState<UserData>();
  const [updateData, setUpdateData] = useState<any>();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);


  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0];
    setSelectedFile(file);
  };

  const handleChange = (e: any) => {
    let { name, value } = e.target;
    setUpdateData({ ...updateData, [name]: value });
  };

  const fetchUserData = async () => {
    try {
      const res = await fetch(
        `http://localhost:8080/users/${localStorage.getItem("userId")}`,
        {
          method: "GET",
        }
      );

      const data = await res.json();
      if (!res.ok) {
        throw new Error("Response not ok");
      }
      setUserData(data);
      setUpdateData(data);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleUpdate = async () => {

    let formData = new FormData();

    formData.append("firstName", updateData.firstName);
    formData.append("lastName", updateData.lastName);
    formData.append("gender", updateData.gender);
    formData.append("dob", updateData.dob);
    formData.append("phoneNumber", updateData.phoneNumber);
    formData.append("username", updateData.username);
    formData.append("password", updateData.password);
    formData.append("role", "USER");

    if (selectedFile) {
      formData.append("photo", selectedFile);
    }

    // formData.append("phoneNumber",updateData.phoneNumber);

    handleClose();

    try {
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
      const res = await fetch(
        `http://localhost:8080/users/${localStorage.getItem("userId")}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        throw new Error("Failed to update details");
      }
      toast.success(data.message);
    } catch (error: any) {
      toast.error(error.message);
    }
    await fetchUserData();
  };


  return {  
    updateData,
    showModal,
    userData,
    handleUpdate,
    handleChange,
    handleShow,
    handleFileChange,
    fetchUserData,
    handleClose
  }
}

export default ProfileController