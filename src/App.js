import React from 'react';
import './Dashboard.css';
import './App.css';
import './PickupForm.css';
import './LocationForm.css';

import FormikPickupForm from './Components/Business/PickupForm';
import ModifyPickupForm from './Components/Business/ModifyPickupForm';
import BusinessDashboard from './Components/Business/Dashboard';
import FormikLocationForm from './Components/Business/LocationForm';




function App() {

  return(
    
    // <FormikPickupForm />
    // // <ModifyPickupForm />
    <BusinessDashboard />
    
  )
  
}

export default App;
