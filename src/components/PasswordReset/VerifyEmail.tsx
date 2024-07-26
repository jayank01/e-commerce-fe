import { Button, Form, Spinner } from "react-bootstrap";
import { emailVerify } from "../../controller/passwordReset";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
const VerifyEmail = () => {
  const { mail, handleChange, handleClick, loading } = emailVerify();
  // console.log(loading);
  return (
    <>
      <h1 className="w-100 text-center">Verify Email</h1>
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
        {/* <Button
          variant="success"
          className="mt-4 mx-auto d-block"
          type="submit"
        >
          Send OTP
        </Button> */}
        <Button
          type="submit"
          disabled={loading}
          variant="success"
          className="mt-4 mx-auto d-block"
        >
          {loading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="mr-2"
              />
              Sending OTP...
            </>
          ) : (
            "Send OTP"
          )}
        </Button>
      </Form>
      <div className="w-100 d-flex  align-items-center justify-content-start">
        <Link
          to={"/"}
          className="d-block  text-dark  d-flex  align-items-center justify-content-center"
          style={{ textDecoration: "none" }}
        >
          <IoMdArrowRoundBack className="mx-1 "/>
          Login
        </Link>
      </div>
    </>
  );
};
export default VerifyEmail;
