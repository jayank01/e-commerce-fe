
import { useState } from "react";
import { Form,Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const VerifyOtp = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const handleVerifyOtp = async () => {
        // Call your backend API to verify the OTP
        // If successful, show a toast and set otpVerified to true
        
        toast.success("OTP verified");
        navigate("/forgotPassword/updatePassword")
      };
  return (
    <>
      <Form.Group
        controlId="formBasicOtp"
        className=" w-50 mx-auto d-flex justify-content-center align-items-center group gap-3  p-2"
      >
        <Form.Label className="  my-auto font-weight-bold"> OTP</Form.Label>
        <Form.Control
          type="number"
          placeholder="1234"
          //   onChange={}
          name="username"
          value={otp}
          className="p-2"
          onChange={(e) => setOtp(e.target.value)}
        />
      </Form.Group>
      <Button
        variant="success"
        className="mt-4 mx-auto d-block"
        onClick={handleVerifyOtp}
      >
        Verify OTP
      </Button>
    </>
  );
};

export default VerifyOtp;
