import React from "react";
import { Card, CardTitle, CardSubtitle, Button } from "reactstrap";

export default function PickupCards ({
quantity,
food
}) {

    return (
        <div className="pickupCard">
        <Card>
            {/* <CardTitle>{`Pickup Date here ->` + date}</CardTitle> */}
            {/* <CardSubtitle>{`Business Name here ->` + name}</CardSubtitle> */}
            {/* <CardSubtitle>{`Time here ->` + time}</CardSubtitle> */}
            <CardSubtitle>{quantity}</CardSubtitle>
            <CardSubtitle>{food}</CardSubtitle>
            <Button type="submit">Claim Pickup</Button>
        </Card>
        </div>
    )
}