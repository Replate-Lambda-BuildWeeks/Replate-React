import React from 'react';
import './App.css';
import BusOnboardForm from './Components/BusinessCreateAccount';
// import PickupForm from './Components/Business/PickupForm';
import { Route } from 'react-router-dom';
import Private from '../src/utils/PrivateRoute';
import Login from './Components/Login';
// import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Route exact path="/" render={props => <Login {...props} />} />
      {/* <PickupForm/> */}
      <Private exact path="/business-onboard" component={BusOnboardForm} />
    </div>
  );
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
