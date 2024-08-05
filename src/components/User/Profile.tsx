import { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import { base64ToUrl } from "../../utils/base64ToUrl";
// import { UserData } from "../../models/Interfaces";
import ProfileController from "../../controller/ProfileController";

const Profile = () => {
  const {
    updateData,
    showModal,
    userData,
    handleUpdate,
    handleChange,
    handleShow,
    handleFileChange,
    fetchUserData,
    handleClose,
  } = ProfileController();

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        {/* <h1 className="mt-2">Profile</h1> */}
        <div className="w-50 mt-5  d-flex  justify-content-center align-items-center">
          <div
            className="image  rounded"
            style={{ width: "100px", height: "100px" }}
          >
            <img
              src={
                userData?.profileImage !== null
                  ? base64ToUrl(userData?.profileImage)
                  : "https://th.bing.com/th?id=OIP.TctatNGs7RN-Dfc3NZf91AAAAA&w=212&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              }
              alt="Profile Picture"
              className="rounded-circle"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <div
          className=" mt-4 flex-column border d-flex  justify-content-center align-items-center rounded p-4  "
          style={{ minWidth: "350px" }}
        >
          <div className="d-flex flex-column justify-content-center align-items-center ">
            {/* <div >
              <h5 className="mt-2">First Name : {userData?.firstName}</h5>
            </div>
            <div>
              <h5 className="mt-2">Last Name : {userData?.lastName}</h5>
            </div>
            <div>
              <h5 className="mt-2">Gender : {userData?.gender}</h5>
            </div>
            <div>
              <h5 className="mt-2">Username : {userData?.username}</h5>
            </div>
            <div>
              <h5 className="mt-2">Phone Numer : {userData?.phoneNumber}</h5>
            </div>
            <div>
              <h5 className="mt-2">DOB : {userData?.dob}</h5>
            </div> */}
            <h5 className="mt-2 ">First Name : {userData?.firstName}</h5>
            <h5 className="mt-2">Last Name : {userData?.lastName}</h5>
            <h5 className="mt-2">Gender : {userData?.gender}</h5>
            <h5 className="mt-2">Username : {userData?.username}</h5>
            <h5 className="mt-2">Phone Numer : {userData?.phoneNumber}</h5>
            <h5 className="mt-2">DOB : {userData?.dob}</h5>
          </div>
          <Button variant="success" className="mt-4 my-2" onClick={handleShow}>
            Update Profile
          </Button>
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                value={updateData?.firstName}
                name="firstName"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                value={updateData?.lastName}
                name="lastName"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                disabled
                value={updateData?.username}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                value={updateData?.phoneNumber}
                onChange={handleChange}
                name="phoneNumber"
              />
            </Form.Group>
            <Form.Group controlId="formBasicDOb">
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter new Dob"
                value={updateData?.dob ?? ""}
                name="dob"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                value={updateData?.gender ?? ""}
                name="gender"
                onChange={handleChange}
              >
                <option disabled>{"Select Gender"}</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicProfile">
              <Form.Label>Profile Pic</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleUpdate}>
            Update Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Profile;
