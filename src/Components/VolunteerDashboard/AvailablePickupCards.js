import React, { useState, useEffect } from "react";
import { Card, CardTitle, CardSubtitle, Button } from "reactstrap";
import axios from "axios";

export default function AvailablePickupCards({ quantity, food, date, time, restaurant_name }) {

    function Claim(){
        const [claimed, setClaimed] = useState([]); // state holding business address
        useEffect(() => {
            axios
              .put()
              .then(res => {
                console.log(res.data);
                setClaimed(res.data);
              })
              .catch(err => {
                console.log(err);
              });
          }, [setClaimed]);
    }
    
  return (
    <div className="pickupCard">
      <Card>
        <CardTitle>{`${date} at ${time}`}</CardTitle>
        <CardSubtitle>{restaurant_name}</CardSubtitle>
        <CardSubtitle>{`${quantity} of ${food}`}</CardSubtitle>
        <Button type="submit" onClick={Claim} >Claim</Button>
      </Card>
    </div>
  );
}
