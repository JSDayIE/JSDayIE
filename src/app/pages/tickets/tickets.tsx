import React from "react";
import { Fetchable } from "react-fetchable";
import { Section, Spinner, Container } from "../../../lib/components";
import { ticketArrayValidator } from "../../../lib/domain/types";
import { Ticket } from "./ticket";
import { PATHS } from "../../config/routing";
import { Link } from "react-router-dom";

export class Tickets extends React.Component {
  render() {
    return (
      <Container>
        <Section title="Tickets" size={1}>
          <p>
            Get your ticket before it is too late!
          </p>
          <Fetchable
            url="/data/tickets.json"
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
                  <a className="btn btn-outline-warning btn-lg" href="https://ti.to/wolk-software-limited/jsdayie-2019/">
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
