import { Form, Button } from "react-bootstrap";
import { otpVerify } from "../../controller/passwordReset";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
const VerifyOtp = () => {
    const {otp,handleChange,handleVerifyOtp} = otpVerify();
  return (
    <>
      <h1 className="w-100 text-center">Verify OTP</h1>
      <Form className="p-4 mt-2" onSubmit={handleVerifyOtp}>
        <Form.Group
          controlId="formBasicOtp"
          className=" w-100 mx-auto d-flex justify-content-center align-items-center group gap-3 p-2"
        >
          <Form.Label className="  my-auto font-weight-bold"> OTP</Form.Label>
          <Form.Control
            type="password"
            placeholder="****"
            name="username"
            value={otp}
            className="p-2 w-50 text-center"
            onChange={handleChange}
            required
          />
          
        </Form.Group>
        {otp.length > 4 && <Form.Text id="otpHelpBlock" className="mx-auto d-block text-center text-danger">
        Otp should be of 4 digit
      </Form.Text>}
        <Button
          disabled={otp.length > 4}
          variant="success"
          className="mt-4 mx-auto d-block"
          type="submit"
        >
          Verify OTP
        </Button>
      </Form>
      <div className="w-100 d-flex  align-items-center justify-content-start">
        <Link
          to={"/"}
          className="d-block  text-dark  d-flex  align-items-center justify-content-center"
          style={{ textDecoration: "none" }}
        >
          <IoMdArrowRoundBack className="mx-1"/>
          Login
        </Link>
      </div>
    </>
  );
};
export default VerifyOtp;
