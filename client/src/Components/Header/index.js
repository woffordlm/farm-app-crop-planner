import SignUp from '../SignUp/signup';
import LogIn from '../Login/Login';
import "./index.css";

import {
  Navbar,
  Container,
  Offcanvas,
  Nav} from "react-bootstrap"

const Header = () => {
  return (
    <header className="col container">
     <Navbar expand={false}>
    <Container fluid>
    {/* <Navbar.Brand href="#">Crop Planner</Navbar.Brand> */}
    <Navbar.Toggle className= "position-absolute top-0 end-0" aria-controls="offcanvasNavbar" />
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
          <SignUp/>
          <LogIn/>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    </header>
  );
};

export default Header;

