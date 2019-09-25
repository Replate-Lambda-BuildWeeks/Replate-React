import React, { useEffect, useState } from "react";
import axios from "axios";
import PickupCards from "./PickupCards";

export default function VolunteerDashboard() {
  const [pickup, setPickup] = useState([]); //holding pickup data
  const [volunteer, setVolunteer] = useState([]); // state holding volunteer name
  const [business, setBusiness] = useState([]); // state holding business data: address, etc

//axios call for volunteer name
  useEffect(() =>{
    axios
    .get(`http://0bbfee1e.ngrok.io/volunteers/:id`)
    .then(res => {
      console.log(res.data);
      setVolunteer(res.data);
    })
    .catch(err => {
      console.log("Volunteer Dashboard:", err);
    });
  }, [volunteer]);
  //axios call for business pickups
  useEffect(() =>{
    axios
    .get("http://0bbfee1e.ngrok.io/pickups")
    .then(res => {
      console.log(res.data);
      setPickup(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }, [volunteer]);
  
  return (
    <div className="dashboard">
      <h1 className="dashboard-header">REPLATE</h1>
      <div className="dashboard-section">
        <h3 className="dashboard-subheader">`Welcome Volunteer!`</h3>
        <div className="dashboard-locations">
          <div className="dashboard-location">
            <div className="location-image"></div>
          </div>
        </div>
      </div>
      <div className="dashboard-section">
        <h3 className="dashboard-subheader">Scheduled Pickups</h3>
        <button className="dashboard-button"> Claim a Pickup</button>
      </div>
      <div className="dashboard-section">
        <h3 className="dashboard-subheader">Available Pickups</h3>
        <div className="week-schedule">
          <div className="day-schedule">
            <div className="day-schedule__date">Today</div>
            {/* map over appointments here */}
            <div className="day-schedule__pickup">
              {pickup.map(p => {
                // spread each of the pickup values as props into a card component:
                return <PickupCards key = {p.id} {...p}/>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
