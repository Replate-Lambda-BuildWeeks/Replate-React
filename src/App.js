import React from 'react';
import './App.css';
import BusOnboardForm from './Components/CreateAccount/BusinessCreateAccount';
import VolunteerCreateAccount from './Components/CreateAccount/VolunteerCreateAccount';
// import PickupForm from './Components/Business/PickupForm';
// import Home from './pages/Home';
import Dashboard from './Components/Business/Dashboard';
import { Route, Switch } from 'react-router-dom';
import Private from '../src/utils/PrivateRoute';
import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import VolunteerDashboard from './Components/VolunteerDashboard/VolunteerDashboard';
import VolunteerState from './context/volunteer/VolunteerState';
import BusinessContext from './context/business/businessContext';

function App() {
  return (
    <div className="App">
      {/* <Route exact path="/login" render={props => <Login {...props} />} /> */}
      {/* <PickupForm/> */}
      {/* <VolunteerDashboard/> */}
      {/* <UserType/> */}
      <Switch>
        {/* <Home /> */}

        <Route exact path="/" render={props => <Login {...props} />} />
        {/* <VolunteerState /> */}
        {/* <PickupForm /> */}
        {/* <Route exact path="/business-onboard" component={BusOnboardForm} /> */}

        <Route exact path="/create-account" component={CreateAccount} />

        <Private exact path="/dashboard" component={Dashboard} />
      </Switch>
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
