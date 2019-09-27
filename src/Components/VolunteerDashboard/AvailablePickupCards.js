import React, { useState, useEffect } from "react";
import { Card, CardTitle, CardSubtitle, Button } from "reactstrap";
import axios from "axios";

export default function AvailablePickupCards(
  pickup,
  setAvailable,
  setScheduled
) {
  //console.log(pickup);
  //   console.log(id);

  const id = localStorage.getItem("id");
  const [claimed, setClaimed] = useState([]);
  console.log(pickup);

  function Claim() {
    console.log("Claim Triggered");
    axios
      .put("http://0bbfee1e.ngrok.io/pickups/", {
        restaurant_id: `${id}`,
        volunteer_id: `${pickup.restaurant_id}`
      })
      .then(res => {
        console.log("Claim Successful", res.data);
        setClaimed(res.data);
        pickup.setAvailable(res.data);
        pickup.setScheduled(res.data);
      })
      .catch(err => {
        console.log("Claim Button Error:", err);
      });
  }

  //   function DisplayAddress(){
  //       if (pickup.address === {}){
  //           return(null)
  //       } else {
  //         return(<CardSubtitle>{restaurants.address}</CardSubtitle>)
  //       }
  //   }

  return (
    <div className="pickupCard">
      <Card>
        <CardTitle>{`${pickup.date} at ${pickup.time}`}</CardTitle>
        {/* <CardSubtitle>{address.restaurant_name}</CardSubtitle> */}
        <CardSubtitle>{`${pickup.quantity} of ${pickup.food}`}</CardSubtitle>
        <Button type="submit" onClick={Claim}>
          Claim
        </Button>
      </Card>
    </div>
  );
}
