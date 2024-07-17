import { Button, Form } from "react-bootstrap";
import { emailVerify } from "../../controller/passwordReset";
const VerifyEmail = () => {
    const {mail,handleChange,handleClick} = emailVerify();
  return (
    <>
      <h1 className="w-100 text-center">Reset Password</h1>
      <Form className="p-4 mt-2" onSubmit={handleClick}>
        <Form.Group
          controlId="formBasicEmail"
          className="mt-3 d-flex justify-content-between align-items-center group gap-3"
        >
          <Form.Label className="my-auto font-weight-bold">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="example@email.com"
            onChange={handleChange}
            name="username"
            value={mail}
            className="p-2"
            required
          />
        </Form.Group>
        <Button
          variant="success"
          className="mt-4 mx-auto d-block"
          type="submit"
        >
          Send OTP
        </Button>
      </Form>
    </>
  );
};
export default VerifyEmail;
