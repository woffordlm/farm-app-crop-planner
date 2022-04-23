/* import SignUp from '../SignUp/signup';
import LogIn from '../Login/Login';
// import { useMutation } from '@apollo/client';
// import {ADD_USER} from "../../utils/mutations"
// import { Link } from 'react-router-dom';
// import Auth from '../../utils/auth';
import "./index.css"
import { QUERY_CROPREFERENCE } from '../../utils/queries';
import { useQuery } from '@apollo/client';

import {
  Navbar,
  Container,
  Offcanvas,
  Nav} from "react-bootstrap"


const Header = () => {
  const {data} = useQuery(QUERY_CROPREFERENCE);
  console.log('data:', data)


  return (
    <header className="col container">
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

 */