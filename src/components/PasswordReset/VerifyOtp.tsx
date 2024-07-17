import { Form, Button } from "react-bootstrap";
import { otpVerify } from "../../controller/passwordReset";
const VerifyOtp = () => {
    const {otp,handleChange,handleVerifyOtp} = otpVerify();
  return (
    <>
      <h1 className="w-100 text-center">Reset Password</h1>
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
    </>
  );
};
export default VerifyOtp;
