import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Form, Button, FormGroup } from "react-bootstrap";
import toast from "react-hot-toast";
import loginData from "../models/logindata.model";

const Login = () => {
  const [loginData, setLoginData] = useState<loginData>({
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
    // console.log(loginData);

    try {
      const response = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
            // 'Authorization': `Bearer ${token}`,
            "content-type": "application/json",
          },
        body: JSON.stringify(loginData),
      });
    //   console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
    //   console.log(data);
    //   console.log(response);
    //   localStorage.setItem("token",response.token)
      toast.success(`${data.message}`);

      data.role === "USER" ? navigate("/home") : navigate("/vendor");
    
      
    } catch (err) {
      console.log(err);
      toast.error("Failed to login");
    }
  };
  return (
    <div className="main  d-flex justify-content-center align-items-center ">
      <div className="formContainer login d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center mt-1">LOGIN</h1>
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
              // type={showPassword ? "text" : "password"}
              type="password"
              placeholder="Password"
              // aria-describedby="passwordToggle"
              style={{ zIndex: "1" }}
              className="rounded"
              onChange={handleChange}
              name="password"
              value={loginData.password}
            />
          </Form.Group>

          {/* <p className="mt-3">Forgot Password?</p> */}

          <FormGroup className="mt-5 d-flex align-items-center group ">
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
