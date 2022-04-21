import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import "./index.css"
import {
  Navbar,
  Container,
  Offcanvas,
  Nav, 
  NavDropdown,
  Form,
  FormControl,
  Button} from "react-bootstrap"


const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="container">
     <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#">Crop Planner</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Crop Planner</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>

      
      {/* <div classNameName="row"> */}
      

        {/* <nav classNameName="text-center col">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div> */}
    </header>
  );
};

export default Header;
