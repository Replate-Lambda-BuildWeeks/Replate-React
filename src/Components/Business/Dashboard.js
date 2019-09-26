import React, {useState} from 'react';
import LocationForm from "./LocationForm"
import PickupForm from "./PickupForm"
// import BusinessContext from './businessContext';

const BusinessDashboard = () => {

    const [showmodal, setShowModal] = useState(false);
    const [showmodalschedule, setShowModalSchedule] = useState(false);

    const [locations, setLocations] = useState([]);
    const [schedules, setSchedules] = useState([]);

    const onClick = () => {
        setShowModal(true)
    }
    const onsubmit = (location) => {
        setShowModal(false)
        setLocations([...locations, location])
       
    }

    const onClickschedule = () => {
        setShowModalSchedule(true)
    }
    const onsubmitschedule = (schedule) => {

        setShowModalSchedule(false)
        setSchedules([...schedules, schedule])
    }

//  change2
    return (
        <div className='dashboard'>
            <h1 className='dashboard-header'>Stripe</h1>
            <div className='dashboard-section'>
            <h3 className='dashboard-subheader'>Our Locations</h3>
            <div className="dashboard-locations">
            {locations.map((location, index) => (

                <div className="dashboard-location" key={index}>
                    <div className='location-image'></div>
                    <div className="location-text">
                    <p className='location-address'>{location.address}
                    <br />
                    {location.city},
                    {location.state} {location.zip}</p>
                    </div>
                </div>
            ))
            }
                <button onClick={onClick} className='dashboard-button add-location__button'>Add New Location</button>
                {showmodal && <LocationForm onsubmit={onsubmit} />}
            </div>
            </div>
            <div className='dashboard-section'>
            <h3 className='dashboard-subheader'>Scheduled Pickups</h3>
            <button onClick={onClickschedule} className='dashboard-button'>+ Create a Pickup</button>
            {showmodalschedule && <PickupForm onsubmit={onsubmitschedule} />}
            </div>
            <div className='dashboard-section'>
            <h3 className='dashboard-subheader'>Next Week's Schedule</h3>

            {schedules.map((schedule, index) => (

            <div className="week-schedule" >
                <div className="day-schedule" key={index}>
                    <div className='day-schedule__date'>September 23, 2019</div>
               
                <div className='day-schedule__pickup'>
                        <div className="pickup-info">
                            <div className="pickup-time-amount">{schedule.time}
                    {schedule.amount}
                    </div>
                            <div className="pickup-type">{schedule.type} </div>
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
            ))
            }
            </div>
            
        
        </div>
    )

}

export default BusinessDashboard
