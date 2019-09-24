import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom';

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
    axiosWithAuth()
      .post('/login', user)
      .then(response => {
        //sets token to local storage.
        localStorage.setItem('token', response.data.payload);
        // forwards the user to the profile page using the formikBag props
        props.history.push('/dashboard');
      })
      .catch(err => {
        console.log(err.response.data);
      });
    // console.log(values);
  };

  return (
    <div className="login-form">
      <h1 className="login-header">
        <span className="">Replate</span>
      </h1>

      <form onSubmit={onSubmit} className="container">
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
      <Link to="/register">Sign Up</Link>
    </div>
  );
};

export default Login;
