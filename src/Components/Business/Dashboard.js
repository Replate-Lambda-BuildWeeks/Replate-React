import React from 'react';

<<<<<<< HEAD
const Dashboard = () => {
  return (
    <div>
      <h1>Hello From dashboard</h1>
    </div>
  );
};

export default Dashboard;
=======

const BusinessDashboard = () => {
    return (
        <div className='dashboard'>
            <h1 className='dashboard-header'>Stripe</h1>
            <div className='dashboard-section'>
            <h3 className='dashboard-subheader'>Our Locations</h3>
            <div className="dashboard-locations">
                <div className="dashboard-location">
                    <div className='location-image'></div>
                    <div className="location-text">
                    <p className='location-address'>123 Street<br />San Francisco, CA 94103</p>
                    </div>
                </div>
                <button className='dashboard-button add-location__button'>
                
                New<br />Location
                </button>
            </div>
            </div>
            <div className='dashboard-section'>
            <h3 className='dashboard-subheader'>Scheduled Pickups</h3>
            <button className='dashboard-button'>
                + Create a Pickup
                </button>

            </div>
        </div>
    )
}

export default BusinessDashboard
>>>>>>> 32560a1461be3ccfbbf6304b3fcda23b40c61042
