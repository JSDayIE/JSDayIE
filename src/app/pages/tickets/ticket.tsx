import React from "react";
import { ITicket } from "../../../lib/domain/types";
import { Card, CardBody, CardHeader, CardFooter } from "../../../lib/components";

interface TickerProps {
  details: ITicket;
}

export function Ticket(props: TickerProps) {
  return (
    <Card>
      <CardHeader>
        <h3>{props.details.type}</h3>
      </CardHeader>
      <CardBody>
        <span className="price">
          {props.details.price}
        </span>
        <ul>
          <li>✓ Welcome Pack</li>
          <li>✓ 12 Amazing Talks</li>
          <li>✓ Breakfast & Lunch</li>
          <li>✓ Access to the after party</li>
        </ul>
      </CardBody>
      <CardFooter>
        <p>
          Early bird ticket for JSDayIE on September 20th 2019.
          Please note that the ticket is NOT REFUNDABLE.
        </p>
      </CardFooter>
    </Card>
  );
}
