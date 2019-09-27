import React, { useState, useEffect } from "react";
import { Card, CardTitle, CardSubtitle, Button } from "reactstrap";
import axios from "axios";

export default function ScheduledPickupCards(pickup) {
  console.log("Scheduled Pickup", pickup);

  return (
    <div className="pickupCard">
      <Card>
        <CardTitle>{`${pickup.date} at ${pickup.time}`}</CardTitle>
        {/* <CardSubtitle>{pickup.restaurant_name}</CardSubtitle> */}
        <CardSubtitle>{`${pickup.quantity} of ${pickup.food}`}</CardSubtitle>
        <Button type="submit">Edit</Button>
        <Button type="submit">Delete</Button>
      </Card>
    </div>
  );
}
