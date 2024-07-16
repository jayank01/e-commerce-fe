import { useState } from "react";
import { Form,Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

const UpdatePassword = () => {
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleChange = (e: any) => {
    setNewPassword(e.target.value);
  };

  const handleUpdatePassword=()=>{
    toast.success("Password updated Successfully")
    navigate("/")
  }
  return (
    <>
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
                  name="username"
                  className="p-2"
                  onChange={handleChange}
                  value={newPassword}
                />
              </Form.Group>
              <Form.Group
                controlId="formBasicConfirmPassword"
                className="mt-3 d-flex  justify-content-between align-items-center group gap-3"
              >
                <Form.Label className="my-auto font-weight-bold">
                  Confirm Password  
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="********"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  name="username"
                  value={confirmPassword}
                  className="p-2"
                />
              </Form.Group>
              <Button
                variant="success"
                className="mt-5 mx-auto d-block"
                onClick={handleUpdatePassword}
              >
                Update Password
              </Button>
    </>
  )
}

export default UpdatePassword