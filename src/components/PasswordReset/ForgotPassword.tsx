// import { useState } from "react";
import { Form } from "react-bootstrap";
import { Outlet } from "react-router-dom";
// import toast from "react-hot-toast";


const ForgotPassword = () => {
  // const [email, setEmail] = useState('');
  
  
  // const [otpSent, setOtpSent] = useState(false);
  
  

  return (
    <div className="w-100 vendor d-flex justify-content-center align-items-center bg-dark text-light">
      <div className="forgot  bg-light text-black d-flex flex-column justify-content-center align-items-center p-3 rounded">
        <h1 className="w-100 text-center">Reset Password</h1>
        <Form className="p-4 mt-2">
              <Outlet/>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
