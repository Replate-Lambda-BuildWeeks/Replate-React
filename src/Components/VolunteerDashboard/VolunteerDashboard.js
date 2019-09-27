import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ScheduledPickupCards from "./ScheduledPickupCards";
import AvailablePickupCards from "./AvailablePickupCards";
import logo from "../../images/logo.png";
import userImage from "../../images/userImage.jpg";

export default function VolunteerDashboard() {
  const id = localStorage.getItem("id");
  console.log(id);

  const [available, setAvailable] = useState([]);
  const [scheduled, setScheduled] = useState([]);
  const [pickup, setPickup] = useState([]); //holding pickup data
  const [volunteer, setVolunteer] = useState(["Volunteer"]); // state volunteer name
  const [restaurants, setRestaurants] = useState([]); // state holding business address
  // const id = props.match.params.id;
  //axios call for volunteer name

  useEffect(() => {
    axios
      .get("http://0bbfee1e.ngrok.io/pickups/")
      .then(res => {
        const scheduledPickups = res.data.filter(p => p.volunteer_id === id);
        setScheduled(scheduledPickups);
        const avilablePickups = res.data.filter(p => p.volunteer_id === id);
        setAvailable(avilablePickups);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const id = window.localStorage.getItem("id");
    console.log(id);
    axios
      .get(`http://0bbfee1e.ngrok.io/volunteers/${id}`)
      .then(res => {
        //console.log(res.data);
        setVolunteer(res.data);
      })
      .catch(err => {
        console.log("Volunteer Dashboard:", err);
      });
  }, [setVolunteer]);

  //axios call for pickups
  useEffect(() => {
    axios
      .get("http://0bbfee1e.ngrok.io/pickups")
      .then(res => {
        console.log(res.data);
        setPickup(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [available, scheduled]);

  //axios call for business address
  useEffect(() => {
    axios
      .get("http://0bbfee1e.ngrok.io/restaurants/")
      .then(res => {
        console.log(res.data);
        setRestaurants(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [setRestaurants]);

  return (
    <div className="volDash-container">
      <div className="volDash-header">
        <img className="volDash-logo" src={logo} alt="logo" />
        <h1>REPLATE</h1>
      </div>
      <div className="volDash-UserClaimSection">
        <div className="volDash-UserSection">
          <img className="volDash-userImage" src={userImage} alt="user" />
          <h3 className="volDash-welcome">
            Welcome {volunteer.volunteer_name}!
          </h3>
        </div>
        <div className="volDash-button-div">
          <button className="volDash-button">Claim a Pickup</button>
        </div>
      </div>

      <h3 className="volDash-h3">Your Scheduled Pickups</h3>
      <div className="volDash-day-schedule__pickup">
        <div>
          {/* {pickup.map(p => (
            <div>{JSON.stringify(p.volunteer_name)}</div>
          ))} */}
          {pickup.map(p => (
            <div>{p.food} {p.volunteer_id}</div>
          ))}
        </div>
        {pickup.map(p => 
            p.volunteer_id === id && <ScheduledPickupCards key={p.id} {...p} />
        )}

        {/* {
              console.log(p.volunteer_id);
              // console.log(p);
              return <ScheduledPickupCards key={p.id} {...p} />;
            } else if (p.volunteer_id === null) {
              // console.log(volunteer.id);
              // console.log(p.volunteer_id);
              return null;
            }
          )} */}
      </div>

      <div className="volDash-section">
        <h3 className="volDash-h3">Available Pickups</h3>
        <div className="volDash-day-schedule__pickup">
          {pickup.map(p => {
            return p.volunteer_id === id ? (
              <ScheduledPickupCards
                key={p.id}
                {...p}
                setAvailable={setAvailable}
                setScheduled={setScheduled}
              />
            ) : p.volunteer_id === null ? (
              <AvailablePickupCards
                key={p.id}
                {...p}
                setAvailable={setAvailable}
                setScheduled={setScheduled}
              />
            ) : (
              <div>None</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
