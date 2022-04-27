import {useState} from 'react';
import { useMutation } from '@apollo/client';
import {LOGIN_USER} from "../../utils/mutations"
// import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import {
  Button,
} from "react-bootstrap"


const LogIn = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  
  const [formState, setFormState] = useState({ email: '', password: '' });
  
  const [login, { error }] = useMutation(LOGIN_USER);
  
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    console.log('formState:', formState)

  };

  
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };






  
  return (
          <form onSubmit={handleFormSubmit}>
            <h4 href="/login">Login</h4>
            <input
              className="bg-light form-input m-2"
              placeholder="Your email"
              name="email"
              type="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              className=" bg-light form-input m-2"
              placeholder="******"
              name="password"
              type="password"
              id="password"
              value={formState.password}
              onChange={handleChange}
            />
            <Button type="submit">Submit</Button>
          </form>
  );
};

export default LogIn;

