import React from "react";
import { Card, CardTitle, CardSubtitle, Button } from "reactstrap";

export default function ScheduledPickupCards({ quantity, food, date, time, restaurant_name }) {
    
  return (
    <div className="pickupCard">
      <Card>
        <CardTitle>{`${date} at ${time}`}</CardTitle>
        <CardSubtitle>{restaurant_name}</CardSubtitle>
        
        <CardSubtitle>{`${quantity} of ${food}`}</CardSubtitle>
        <Button type="submit">Edit</Button>
        <Button type="submit">Delete</Button>
      </Card>
    </div>
  );
}
