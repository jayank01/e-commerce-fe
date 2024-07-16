import { Form, Button, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userRegistration } from "../controller/userRegistration";
import { REGISTER_HEADING } from "../utils/constants";

const Register = () => {
  const {formData,handleChange,handleSubmit} = userRegistration();
  return (
    <>
      <div className="main  d-flex justify-content-center align-items-center ">
        <div className="formContainer  d-flex flex-column justify-content-center align-items-center">
          <h1 >{REGISTER_HEADING}</h1>

          <Form className="mt-3 " onSubmit={handleSubmit}>
            <Form.Group
              className="mt-3 d-flex justify-content-between align-items-center group"
              controlId="formBasicFirstName"
            >
              <Form.Label className="my-auto">First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                autoComplete="false"
              />
            </Form.Group>
            <Form.Group
              className="mt-4 d-flex justify-content-between align-items-center group"
              controlId="formBasicLastName"
            >
              <Form.Label className="my-auto">Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                autoComplete="false"
              />
            </Form.Group>
            <Form.Group
              className="mt-4 d-flex justify-content-between align-items-center group"
              controlId="formBasicPhone"
            >
              <Form.Label className="my-auto">Phone no</Form.Label>
              <Form.Control
                type="number"
                pattern="[0-9]*"
                maxLength={10}
                placeholder="Enter phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                autoComplete="false"
              />
            </Form.Group>
            <Form.Group
              className="mt-4 d-flex justify-content-between align-items-center group"
              controlId="formBasicEmail"
            >
              <Form.Label className="my-auto">Email </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group
              className="mt-4 d-flex justify-content-between align-items-center group"
              controlId="formBasicPassword"
            >
              <Form.Label className="my-auto">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete="false"
              />
            </Form.Group>

            <Form.Group
              className="mt-4 d-flex align-items-center mx-2 "
            >
              <Form.Check id="checkBox" name="role" value={"VENDOR"} onChange={handleChange} />
              <p className="mx-3 my-auto">Regsiter as Vendor</p>
             
            </Form.Group>

            <FormGroup className="mt-4 d-flex align-items-center group ">
              <p className="text-center my-auto">
                Don't Have an account{" "}
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  Login
                </Link>
              </p>
              <Button variant="primary" type="submit" className="">
                Register
              </Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
