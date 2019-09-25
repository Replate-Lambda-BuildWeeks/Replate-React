import React, { useState, useEffect } from "react";
import BusOnboardForm from "./BusinessCreateAccount";
import VolOnboardForm from "./VolunteerCreateAccount"

export function UserType() {
  const [volCheck, setVolCheck] = React.useState(true);
  const [busCheck, setBusCheck] = React.useState(false);

  return (
    <div className="App">
      <label>Business</label>
      <input
        type="radio"
        onClick={function(event){ setBusCheck(!busCheck); setVolCheck(!volCheck)}}
        name="business"
        checked={busCheck}
      />

      <label>Volunteer</label>
      <input
        type="radio"
        onClick={function(event){ setBusCheck(!busCheck); setVolCheck(!volCheck)}}
        name="volunteer"
        checked={volCheck}
      />
      {volCheck && <VolOnboardForm />}
      {busCheck && <BusOnboardForm />}
    </div>
  );
}

 export default UserType;
