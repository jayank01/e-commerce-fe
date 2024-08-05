import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSearch } from "./SearchContext";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";

const NavigationBar = () => {
  const { setSearchTerm } = useSearch();
  const [search, setSearch] = useState("");
  const navigator = useNavigate();

  const handleLogout = () => {
    Cookies.remove("jwt");
    toast.success("Logout Successfull");
    navigator("/");
  };

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(search);
  };
  return (
    <Navbar
      sticky="top"
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary navbar"
    >
      <Container
        fluid
        className=" d-flex justify-content-around align-items-center  bg-dark text-center"
        style={{ minHeight: "10vh" }}
      >
        <Navbar.Brand href="/home" className="mx-5">
          Local Goods
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-3 my-lg-0 p-2 "
            style={{ maxHeight: "auto", marginTop: "2%" }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#action1">About</Nav.Link>
            <Nav.Link href="/home/myOrder">My Orders</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
            <Nav.Link href="/home/myCart">Cart</Nav.Link>
          </Nav>
          <Form className="d-flex " style={{ marginRight: "15%" }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
              value={search}
            />
            <Button variant="outline-success" onClick={handleSearch}>
              Search
            </Button>
          </Form>
          {/* <p className='text-light my-auto mx-3 '>Welcome </p> */}

          <Dropdown align={{ lg: "end" }}>
            <Dropdown.Toggle as="div" id="dropdown-custom-components" className="cursor-pointer">
              <img
                src="https://via.placeholder.com/150"
                alt="Dropdown"
                className="cursor-pointer"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
            </Dropdown.Toggle>

            <Dropdown.Menu className="mt-3">
              <Dropdown.Item href="/home/profile">My Profile</Dropdown.Item>
              <Dropdown.Item href="/home/myOrder">My Orders</Dropdown.Item>
              <Dropdown.Divider />
              <Button
                variant="outline-danger"
                className="mx-2 mt-2"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
