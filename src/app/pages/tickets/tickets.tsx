import React from "react";
import { Fetchable } from "react-fetchable";
import { Section } from "../../../lib/components";
import { Button } from "../../../lib/components";
import { ticketArrayValidator, ITicket } from "../../../lib/domain/types";
import { Card, CardBody, CardHeader, CardFooter } from "../../../lib/components";

interface TickerProps {
  details: ITicket;
}

function Ticket(props: TickerProps) {
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
          <li>✓ 12 Talks</li>
          <li>✓ Breakfast & Lunch</li>
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

export class Tickets extends React.Component {
  render() {
    return (
      <Section title="Tickets" size={1}>
        <p>
          Get your ticket before it is too late!
        </p>
        <Fetchable
          url="/data/tickets.json"
          validator={ticketArrayValidator}
          loading={() => <div>Loading...</div>}
          error={(e: Error) => <div>Error: {e.message}</div>}
          success={data => {
            return (
              <React.Fragment>
                <div className="row">
                  {
                    data.map(t => (
                      <div className="col-md-6">
                        <Ticket details={t}/>
                      </div>
                    ))
                  }
                </div>
                <Button>Get your ticket now!</Button>
              </React.Fragment>
            );
          }}
        />
      </Section>
    );
  }
}
