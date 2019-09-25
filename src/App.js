import React from 'react';
import './App.css';
import PickupForm from './Components/Business/PickupForm';
import UserType from "./Components/CreateAccount"
import VolunteerDashboard from "./Components/VolunteerDashboard/VolunteerDashboard"
import { Route } from 'react-router-dom';
// import Private from './components/PrivateRoute';
import Login from './Components/Login';
import Home from './pages/Home';

function App() {

  return(
    <div className="App">
      {/* <Home /> */}
      <Route exact path="/login" render={props => <Login {...props} />} />
      {/* <PickupForm/> */}
      <VolunteerDashboard/>
      {/* <UserType/> */}
    </div>
  )
}

export default App;

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );