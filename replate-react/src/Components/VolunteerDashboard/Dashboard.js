import React from "react";
import { Card, CardTitle } from "reactstrap";

const VolunteerDashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-header">Stripe</h1>
      <div className="dashboard-section">
        <h3 className="dashboard-subheader">Welcome Volunteer Name!</h3>
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
            <div className="day-schedule__date">September 23, 2019</div>
            {/* map over appointments here */}
            <div className="day-schedule__pickup">
              <div className="pickup-info">
                <div className="pickup-time-amount">4:00 PM - 10 lbs</div>
                <div className="pickup-type">Chicken and steak</div>
              </div>
            </div>
          </div>
          <div className="day-schedule">
            <div className="day-schedule__date">September 24, 2019</div>
          </div>
          <div className="day-schedule">
            <div className="day-schedule__date">September 25, 2019</div>
          </div>
          <div className="day-schedule">
            <div className="day-schedule__date">September 26, 2019</div>
          </div>
          <div className="day-schedule">
            <div className="day-schedule__date">September 27, 2019</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
