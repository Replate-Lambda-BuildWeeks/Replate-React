import React from "react";
import { Card, CardTitle, CardSubtitle, Button } from "reactstrap";

export default function ScheduledPickupCards({ quantity, food, date, time }) {
    // function formatDate(){
    //     const formated = "";

    //     return()
    // }
  return (
    <div className="pickupCard">
      <Card>
        <CardTitle>{`${date} at ${time}`}</CardTitle>
        {/* <CardSubtitle>{`Business Name here ->` + name}</CardSubtitle> */}
        <CardSubtitle>{`${quantity} of ${food}`}</CardSubtitle>
        <Button type="submit">Edit</Button>
        <Button type="submit">Delete</Button>
      </Card>
    </div>
  );
}
