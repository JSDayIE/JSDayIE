import React from "react";
import { Section, Spinner, Container } from "@jsdayie/components";
import { ticketArrayValidator } from "@jsdayie/domain";
import { Ticket } from "./ticket";
import { RESOURCES } from "@jsdayie/config";

export class Tickets extends React.Component {
  render() {
    return (
      <Container>
        <Section title="Tickets" size={1}>
          <p>
            Get your ticket before it is too late!
          </p>
          <Fetchable
            url={RESOURCES.tickets}
            validator={ticketArrayValidator}
            loading={() => <Spinner size={100}/>}
            error={(e: Error) => <div>Error: {e.message}</div>}
            success={data => {
              return (
                <React.Fragment>
                  <div className="row">
                    {
                      data.map((ticket, ticketIndex) => (
                        <div key={ticketIndex} className="col-md-4">
                          <Ticket details={ticket}/>
                        </div>
                      ))
                    }
                  </div>
                  <p>* Fees are displayed excluding 23% VAT</p>
                  <a className="btn btn-outline-warning btn-lg" href="https://ti.to/wolk-software-limited/jsdayie-2023/">
                      Get your ticket now!
                  </a>
                </React.Fragment>
              );
            }}
          />
        </Section>
      </Container>
    );
  }
}
