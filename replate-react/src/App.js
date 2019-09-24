import React from 'react';
import './App.css';
import BusOnboardForm from "./Components/BusinessCreateAccount";
import VolOnboardForm from "./Components/VolunteerCreateAccount"
import UserType from './Components/CreateAccount';
import Dashboard from "./Components/VolunteerDashboard/Dashboard";
import AvailablePickups from "./Components/VolunteerDashboard/PickupCards";
import VolunteerDashboard from "./Components/VolunteerDashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <h1>App Test</h1>
      {/* <UserType/> */}
      {/* <BusOnboardForm/> */}
      {/* <VolOnboardForm/> */}
      {/* <Dashboard/> */}
      <AvailablePickups/>
      <VolunteerDashboard/>
    </div>
  );
}

export default App;

