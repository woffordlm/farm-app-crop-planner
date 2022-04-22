import {useState} from 'react';
import { useMutation } from '@apollo/client';
import {ADD_USER} from "../../utils/mutations"
// import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import "./index.css"
import {
  Navbar,
  Container,
  Offcanvas,
  Button,
  Nav} from "react-bootstrap"


const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    console.log('formState:', formState)

  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('asl;dsdfgdsfgdsf')

    try {
      const { data } = await addUser({
      
        variables: {...formState},
      });
      console.log('data:', data)
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };






  
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
          <form onSubmit={handleFormSubmit}>
          <h4 href="/signup">Signup</h4>
          <input  className="form-input m-2"
                placeholder="Your username"
                name="username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
                />
          <input
                className="form-input m-2"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
                 />
          <input 
               className="form-input m-2"
               placeholder="******"
               name="password"
               type="password"
               id="password"
               value={formState.password}
               onChange={handleChange}
               />
          <Button type="submit">Submit</Button>
          </form>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    </header>
  );
};

export default Header;


// <h4 href="/login">Login</h4>
//           <input placeholder= "e-mail" className="m-2"></input>
//           <input placeholder= "password" className="m-2"></input>
//           <Button>Submit</Button>