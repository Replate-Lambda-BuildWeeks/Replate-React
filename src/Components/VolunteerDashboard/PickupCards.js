import React from "react";
import { Card, CardTitle, CardSubtitle, Button } from "reactstrap";

export default function AvailablePickups ({
name,
date,
time,
amount,
type
}) {

    return (
        <div className="pickupCard">
        <Card>
            <CardTitle>{`Pickup Date here ->` + date}</CardTitle>
            <CardSubtitle>{`Business Name here ->` + name}</CardSubtitle>
            <CardSubtitle>{`Time here ->` + time}</CardSubtitle>
            <CardSubtitle>{`Food Amount here ->` + amount}</CardSubtitle>
            <CardSubtitle>{`Food Type here ->` + type}</CardSubtitle>
            <Button type="submit">Claim Pickup</Button>
        </Card>
        </div>
    )
}