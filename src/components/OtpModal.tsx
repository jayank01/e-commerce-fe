import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";

interface OtpModalProps {
  show: boolean;
  onHide: () => void;
  handleOtpSubmit: (otp:string) => void;
}

const OtpModal:React.FC<OtpModalProps> = ({ show, onHide, handleOtpSubmit }) => {
  const [otpInput, setOtpInput] = useState("");

  const handleChange = (e: any) => {
    setOtpInput(e.target.value);
  };
//   console.log(otpInput)
  const handleSubmit = () => {
    handleOtpSubmit(otpInput);
    setOtpInput("")
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered // Center the modal vertically
      size="lg" // Adjust the size as needed
    >
      <Modal.Header closeButton>
        <Modal.Title>Verify the OTP</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="otp">
            <Form.Label>Enter the OTP</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter OTP"
              value={otpInput}
              onChange={handleChange}
              autoFocus
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Verify
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OtpModal;
