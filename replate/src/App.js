import React from 'react';
import { Route } from 'react-router-dom';
// import Private from './components/PrivateRoute';
import Login from './components/Login';

import './App.css';
import VolunteerState from './context/volunteer/VolunteerState';
import Home from './pages/Home';

function App() {
  return (
    <VolunteerState>
      <div className="App">
        <Home />
        <Route exact path="/login" render={props => <Login {...props} />} />
        {/* <Route path="/sign-up" render={props => <RegisterPage {...props} />} /> */}
        {/* <PrivateRoute
        exact
        path="/business-dashboard"
        component={BusOnboardForm}
      /> */}

        {/* <PrivateRoute
        exact
        path="/volunteer-dashboard"
        component={VolOnboardForm}
      /> */}
      </div>
    </VolunteerState>
  );
}

export default App;
