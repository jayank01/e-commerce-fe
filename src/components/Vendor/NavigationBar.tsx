import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
// import { Row } from "react-bootstrap";

const NavigationBar = () => {
  // console.log(data)

  const [userdata,setUserData] = useState<any>();
  const navigator = useNavigate();
  const handleLogout = () => {
    Cookies.remove("jwt");
    localStorage.removeItem('userId')
    toast.success("Logout Successfull");
    navigator("/");
  };
  const fetchUserData = async()=>{
    try{
      const res = await fetch(`http://localhost:8080/users/${localStorage.getItem('userId')}`)

      const data = await res.json();
      if(!res.ok){
        throw new Error(data.message)
      }
      setUserData(data)
    }catch(error:any){
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    fetchUserData()
  },[])
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

            </Nav>
            <h4 className="text-light mx-4  my-auto">Welcome {userdata?.firstName}</h4>
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
