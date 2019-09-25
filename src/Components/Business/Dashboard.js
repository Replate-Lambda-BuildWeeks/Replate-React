import React from 'react';


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
                <button className='dashboard-button add-location__button'>New Location</button>
            </div>
            </div>
            <div className='dashboard-section'>
            <h3 className='dashboard-subheader'>Scheduled Pickups</h3>
            <button className='dashboard-button'>+ Create a Pickup</button>
            </div>
            <div className='dashboard-section'>
            <h3 className='dashboard-subheader'>Next Week's Schedule</h3>

            <div className="week-schedule">
                <div className="day-schedule">
                    <div className='day-schedule__date'>September 23, 2019</div>
               
                <div className='day-schedule__pickup'>
                        <div className="pickup-info">
                            <div className="pickup-time-amount">4:00 PM - 10 lbs</div>
                            <div className="pickup-type">Chicken and steak</div>
                        </div>
                    </div>
                    </div>
                <div className="day-schedule">
                    <div className='day-schedule__date'>September 24, 2019</div>
                </div>
                <div className="day-schedule">
                    <div className='day-schedule__date'>September 25, 2019</div>
                </div>
                <div className="day-schedule">
                    <div className='day-schedule__date'>September 26, 2019</div>
                </div>
                <div className="day-schedule">
                    <div className='day-schedule__date'>September 27, 2019</div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessDashboard