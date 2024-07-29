import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { Row } from "react-bootstrap";

const NavigationBar = () => {
  // console.log(data)
  const navigator = useNavigate();
  const handleLogout = () => {
    Cookies.remove("jwt");
    toast.success("Logout Successfull");
    navigator("/");
  };
  return (
    <>
      <Navbar
        sticky="top"
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        className="bg-body-tertiary navbar"
      >
        <Container
          fluid
          className=" d-flex justify-content-around align-items-center bg-dark"
          style={{minHeight: "10vh"}}
        >
          <Navbar.Brand href="/home" className="mx-5">
            Local Goods
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 p-2 "
              style={{ maxHeight: "auto" ,marginTop: "2%"}}
              navbarScroll
            >
              {/* <Nav.Link href="/vendor" >Welcome Vendor</Nav.Link> */}
            </Nav>
            {/* <Form className="d-flex mx-5" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
            <Button
              variant="outline-danger"
              className="d-block  my-2"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    </>
  );
};

export default NavigationBar;
