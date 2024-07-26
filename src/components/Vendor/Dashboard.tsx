import { useState } from "react";
import { Dropdown, Form, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Dashboard = () => {
  const [showCat, setShowCat] = useState(false);

  const handleCloseCat = () => setShowCat(false);
  const handleShowCategory = () => setShowCat(true);
  const [showProd, setShowProd] = useState(false);

  const handleCloseProd = () => setShowProd(false);
  const handleShowProd = () => setShowProd(true);
  return (
    <section
      className="vendorDashboard mt-4  d-flex flex-column flex-wrap justify-content-center align-items-center"
      style={{ width: "100%" }}
    >
      <div
        className="w-50 d-flex justify-content-around align-items-center mt-5 p-2"
        style={{ minWidth: "300px" }}
      >
        <Button variant="success" className="p-3" onClick={handleShowCategory}>
          Add Category
        </Button>
        <Modal show={showCat} onHide={handleCloseCat}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Product Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Product Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Product category"
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseCat}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloseCat}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Button variant="success" className="p-3" onClick={handleShowProd}>
          Add Product
        </Button>

        <Modal show={showProd} onHide={handleCloseProd}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Product </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Product Name"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Product description"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Product Price</Form.Label>
                <Form.Control
                  type="number"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  placeholder="Enter Product price"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Product Quantity</Form.Label>
                <Form.Control
                  type="number"
                  inputMode="numeric"
                  pattern="[0-9]"
                  placeholder="Enter Product Quantity"
                  autoFocus
                />
              </Form.Group>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Select Category
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseProd}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloseProd}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="w-100 mt-5 d-flex justify-content-evenly align-items-center border  flex-wrap p-5">
        <div className="categories text-center " style={{ width: "400px" }}>
          <h2 className="mt-2 bg-dark text-light p-2">All Categories</h2>
          <div className="border mt-3">
            <p>Electicals</p>
            <p>Electronics</p>
            <p>Grocery</p>
            <p>Clothing</p>
            <p>Smartphones</p>
            <p>Television</p>
            <p>Laptops</p>
            <p>Watches</p>
            <p>Bagpacks</p>
          </div>
        </div>
        <div className="products text-center " style={{ width: "400px" }}>
          <h2 className="mt-2 bg-dark text-light p-2">All Products</h2>
          <div className="mt-2 border">
            <p>Electicals</p>
            <p>Electronics</p>
            <p>Grocery</p>
            <p>Clothing</p>
            <p>Smartphones</p>
            <p>Television</p>
            <p>Laptops</p>
            <p>Watches</p>
            <p>Bagpacks</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
