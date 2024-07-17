import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const VerifyEmail = () => {
    const navigate = useNavigate();
    const handleClick =()=>{
        toast.success("Otp Send to Mail")
        navigate("/forgotPassword/verifyOtp")
    }
  return (
    <>
        <Form.Group
            controlId="formBasicEmail"
            className="mt-3 d-flex justify-content-between align-items-center group gap-3"
          >
            <Form.Label className="my-auto font-weight-bold">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@email.com"
              //   onChange={}
              name="username"
              //   value={}
              className="p-2"
            />
          </Form.Group>
          <Button
            variant="success"
            className="mt-4 mx-auto d-block"
            onClick={handleClick}>
            Send OTP
          </Button>
    </>
  )
}

export default VerifyEmail