import React from "react";
import { Button, Modal,Form } from "react-bootstrap";


type Props = {
    showCat: boolean;               
    handleCloseCat: () => void;     
    handleChangeCategory: (e: React.ChangeEvent<HTMLInputElement>) => void; 
    addCategory: string;            
    handleClickCategory: () => void; 
  };

const CreateCategory: React.FC<Props> = ({ showCat, handleCloseCat, handleChangeCategory, addCategory, handleClickCategory }) => {
  return (
    <Modal show={showCat} onHide={handleCloseCat}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Product Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product category"
              autoFocus
              onChange={handleChangeCategory}
              value={addCategory}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseCat}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClickCategory}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateCategory;
