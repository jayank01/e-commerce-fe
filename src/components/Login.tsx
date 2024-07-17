import { Link } from "react-router-dom";
import { Form, Button, FormGroup } from "react-bootstrap";
import { userLogin } from "../controller/userLogin";
import { LOGIN_HEADING } from "../utils/constants";

const Login = () => {
 const {loginData,handleChange,handleSubmit} = userLogin();
  return (
    <div className="main  d-flex justify-content-center align-items-center ">
      <div className="formContainer login d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center mt-1">{LOGIN_HEADING}</h1>
        <Form className="mt-3 ">
          <Form.Group
            controlId="formBasicEmail"
            className="mt-3 d-flex justify-content-between align-items-center group"
          >
            <Form.Label className="my-auto">Email </Form.Label>
            <Form.Control
              type="email"
              placeholder="example@email.com"
              onChange={handleChange}
              name="username"
              value={loginData.username}
            />
          </Form.Group>
          <Form.Group
            controlId="formBasicPassword"
            className="mt-4 d-flex justify-content-between align-items-center group"
          >
            <Form.Label className="my-auto">Password</Form.Label>

            <Form.Control
              type="password"
              placeholder="Password"
              style={{ zIndex: "1" }}
              className="rounded"
              onChange={handleChange}
              name="password"
              value={loginData.password}
            />
          </Form.Group>
            <Link to={"/forgotPassword"} className="mt-4 my-2 d-block" style={{ textDecoration: "none" }}> Forgot Password ?</Link>
          <FormGroup className="mt-3 d-flex align-items-center group ">
            <p className="text-center my-auto">
              Don't have account ?{" "}
              <Link to="/register" style={{ textDecoration: "none" }}>
                Register
              </Link>
            </p>
            <Button
              variant="primary"
              className=""
              onClick={handleSubmit}
            >
              Login
            </Button>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default Login;
