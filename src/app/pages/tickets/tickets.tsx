import React from "react";
import { Fetchable } from "react-fetchable";
import { Section } from "../../../lib/components";
import { Button } from "../../../lib/components";
import { ticketArrayValidator } from "../../../lib/domain/types";
import { Ticket } from "./ticket";

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
                <p>* Fees are displayed excluding 23% VAT</p>
                <Button>Get your ticket now!</Button>
              </React.Fragment>
            );
          }}
        />
      </Section>
    );
  }
}
