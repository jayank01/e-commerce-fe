import React from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";

type Props = {
  showProdUp: boolean;
  handleCloseProdUp: () => void;
  createProduct: {
    productName: string;
    description: string;
    price: number;
    quantity: number;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedFile: File | null;
  selectedCategory: { categoryName: string } | null;
  setSelectedCategory: (category: { categoryName: string,id:number }) => void;
  allCategory: { id: number; categoryName: string }[];
  handleProductUp: () => void;
};

const UpdateProduct: React.FC<Props> = ({
  showProdUp,
  handleCloseProdUp,
  createProduct,
  handleChange,
  handleFileChange,
  selectedCategory,
  setSelectedCategory,
  allCategory,
  handleProductUp,
}) => {
  return (
    <Modal show={showProdUp} onHide={handleCloseProdUp}>
      <Modal.Header closeButton>
        <Modal.Title>Update Product </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Name"
              autoFocus
              name="productName"
              onChange={handleChange}
              value={createProduct.productName}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product description"
              autoFocus
              name="description"
              onChange={handleChange}
              value={createProduct.description}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
              pattern="[0-9]*"
              inputMode="numeric"
              placeholder="Enter Product price"
              autoFocus
              name="price"
              onChange={handleChange}
              value={createProduct.price}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Quantity</Form.Label>
            <Form.Control
              type="number"
              inputMode="numeric"
              pattern="[0-9]"
              placeholder="Enter Product Quantity"
              autoFocus
              name="quantity"
              onChange={handleChange}
              value={createProduct.quantity}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              type="file"
              name="image"
              onChange={handleFileChange}
            />
          </Form.Group>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {selectedCategory
                ? selectedCategory.categoryName
                : "Select Category"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {allCategory.map((ele: any) => (
                <Dropdown.Item
                  key={ele.id}
                  onClick={() => setSelectedCategory(ele)}
                >
                  {ele.categoryName}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseProdUp}>
          Close
        </Button>
        <Button variant="primary" onClick={handleProductUp}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateProduct;
