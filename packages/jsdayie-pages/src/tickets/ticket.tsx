import React from "react";
import { ITicket } from "../../../lib/domain/types";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter
} from "../../../lib/components";
import { Ribbon } from "./ribbon";

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
        {props.details.isSoldOut ? <Ribbon title="SOLD OUT" /> : null}
        <span className="price">{props.details.price}</span>
        <ul>
          <li>✓ Welcome Pack</li>
          <li>✓ 12 Amazing Talks</li>
          <li>✓ Breakfast & Lunch</li>
          <li>✓ Access to the after party</li>
        </ul>
      </CardBody>
      <CardFooter>
        <p>
          {props.details.type} ticket for JSDayIE on September 20th, 2019.
          Please note that the ticket is NOT REFUNDABLE.
        </p>
      </CardFooter>
    </Card>
  );
}
