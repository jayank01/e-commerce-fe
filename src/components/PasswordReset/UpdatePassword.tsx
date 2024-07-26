import { Form, Button } from "react-bootstrap";
import { changePassword } from "../../controller/passwordReset";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
const UpdatePassword = () => {
    const {newPassword,confirmPassword,handleChangeNew,handleChangeConfirm,handleUpdatePassword} = changePassword()
  return (
    <>
      <h1 className="w-100 text-center">Reset Password</h1>
      <Form className="p-4 mt-2">
        <Form.Group
          controlId="formBasicPassword"
          className="mt-2 d-flex  justify-content-between align-items-center group gap-3"
        >
          <Form.Label className="my-auto font-weight-bold">
            New Password
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="********"
            name="password"
            className="p-2"
            onChange={handleChangeNew}
            value={newPassword}
            style={{width: "75%"}}
          />
        </Form.Group>
        <Form.Group
          controlId="formBasicConfirmPassword"
          className="mt-3 d-flex  justify-content-between align-items-center group gap-3"
        >
          <Form.Label className="my-auto font-weight-bold ">
            Confirm Password
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="********"
            name="password"
            value={confirmPassword}
            className="p-2"
            onChange={handleChangeConfirm}
            style={{width: "90%"}}
          />
        </Form.Group>
        <Button
          variant="success"
          className="mt-4 mx-auto d-block"
          onClick={handleUpdatePassword}
        >
          Update Password
        </Button>
      </Form>
      <div className="w-100 d-flex  align-items-center justify-content-start">
        <Link
          to={"/"}
          className="d-block  text-dark  d-flex  align-items-center justify-content-center"
          style={{ textDecoration: "none" }}
        >
          <IoMdArrowRoundBack className="mx-1 border rounded"/>
          Login
        </Link>
      </div>
    </>
  );
};
export default UpdatePassword;
