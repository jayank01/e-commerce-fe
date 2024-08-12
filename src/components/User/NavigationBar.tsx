import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSearch } from "./SearchContext";
import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
// import ProfileController from "../../controller/ProfileController";
// import { base64ToUrl } from "../../utils/base64ToUrl";
import useFetchCart from "../../controller/useFetchCart";


const NavigationBar = () => {
  const { setSearchTerm } = useSearch();
  const [search, setSearch] = useState("");
  const navigator = useNavigate();
  const location = useLocation();
  // const { userData} = ProfileController();
  const {cartItems,fetchCart} = useFetchCart();
  // console.log(userData);

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
  const isActive = (path: string) => location.pathname === path;

  useEffect(()=>{
    fetchCart();
  },[cartItems])
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
            <Nav.Link
              href="/home"
              style={{ color: isActive("/home") ? "orange" : "white" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#action1"
              style={{ color: isActive("#action1") ? "orange" : "white" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="/home/myOrder"
              style={{ color: isActive("/home/myOrder") ? "orange" : "white" }}
            >
              My Orders
            </Nav.Link>
            <Nav.Link
              href="#action2"
              style={{ color: isActive("#action2") ? "orange" : "white" }}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="/home/myCart"
              style={{ color: isActive("/home/myCart") ? "orange" : "white" }}
            >
              {cartItems.length > 0 ? `Cart (${cartItems.length})` : `Cart`}
            </Nav.Link>
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
          {/* <h5 className='text-light my-auto mx-1 '>Welcome {userData?.firstName} </h5> */}

          <Dropdown align={{ lg: "end" }}>
            <Dropdown.Toggle
              as="div"
              id="dropdown-custom-components"
              className="cursor-pointer"
            >
              <img
                src={"https://th.bing.com/th?id=OIP.TctatNGs7RN-Dfc3NZf91AAAAA&w=212&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                }
                // src={
                //   userData?.profileImage
                //     ? base64ToUrl(userData?.profileImage)
                //     : "https://th.bing.com/th?id=OIP.TctatNGs7RN-Dfc3NZf91AAAAA&w=212&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                // }
                alt="Dropdown"
                style={{ width: "40px", height: "40px", borderRadius: "50%",cursor: "pointer" }}
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
