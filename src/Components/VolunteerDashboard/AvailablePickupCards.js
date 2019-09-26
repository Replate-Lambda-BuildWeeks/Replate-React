import React, { useState, useEffect } from "react";
import { Card, CardTitle, CardSubtitle, Button } from "reactstrap";
import axios from "axios";

export default function AvailablePickupCards(pickup, address) {
  console.log(pickup);
  console.log(address);

  function Claim() {
    const [claimed, setClaimed] = useState([]);
    useEffect(() => {
      axios
        .put(`http://0bbfee1e.ngrok.io/pickups/`)
        .then(res => {
          console.log(res.data);
          setClaimed(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, [setClaimed]);

    return <p>Claimed!</p>;
  }

  return (
    <div className="pickupCard">
      <Card>
        <CardTitle>{`${pickup.date} at ${pickup.time}`}</CardTitle>
        <CardSubtitle>{pickup.restaurant_name}</CardSubtitle>
        <CardSubtitle>{`${pickup.quantity} of ${pickup.food}`}</CardSubtitle>
        <Button type="submit" onClick={Claim}>
          Claim
        </Button>
      </Card>
    </div>
  );
}
