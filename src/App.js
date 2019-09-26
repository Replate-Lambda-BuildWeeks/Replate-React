import React from 'react';
import './App.css';
import BusOnboardForm from './Components/BusinessCreateAccount';
import VolunteerCreateAccount from '../src/Components/VolunteerCreateAccount';
// import PickupForm from './Components/Business/PickupForm';
// import Home from './pages/Home';
import Dashboard from './Components/Business/Dashboard';
import { Route, Switch } from 'react-router-dom';
import Private from '../src/utils/PrivateRoute';
import Login from './Components/Login';
import VolunteerState from './context/volunteer/VolunteerState';
import BusinessContext from './context/business/businessContext';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Home /> */}

        <Route exact path="/" render={props => <Login {...props} />} />
        {/* <VolunteerState /> */}
        {/* <PickupForm /> */}
        <Private exact path="/business-onboard" component={BusOnboardForm} />

        <Private
          exact
          path="/volunteer-onboard"
          component={VolunteerCreateAccount}
        />

        <Route exact path="/dashboard" component={Dashboard} />
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
