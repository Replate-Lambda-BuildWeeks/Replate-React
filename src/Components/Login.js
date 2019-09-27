import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Logo from '../../src/logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

//adding the useState hook to add component level state
const Login = props => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  // destructures state so you can use the properties as variables

  const { username, password } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value }); // everytime we type it is going to enter the correct piece of state.
  };

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post('http://0bbfee1e.ngrok.io/auth/login', user)
      .then(res => {
        console.log(res);
        //sets token to local storage.
        localStorage.setItem('token', res.data.token);
        //Ari added the line below to access for VolunteerDashboard
        localStorage.setItem('id', res.data.id);
        // forwards the user to the profile page using the  props
        props.history.push('/dashboard');
      })
      .catch(err => {
        console.log(err);
      });
    // console.log(values);
  };

  return (
    <div className="login-form">
      <img className="center" src={Logo} alt="replate logo" />

      <form onSubmit={onSubmit} className="container form-width">
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={onChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            autoComplete="off"
            required
          />
        </div>

        <input type="submit" value="Sign in" className="btn btn-success" />
      </form>
      <p>Don't have an account?</p>
      <Link to="/create-account">Sign Up</Link>
    </div>
  );
};

export default Login;
