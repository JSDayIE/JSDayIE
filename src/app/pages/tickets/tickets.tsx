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
                  <p>
                    The tickets will be available very soon! Subscribe to our <Link to={PATHS.newsletter}>Newsletter</Link> or follow us on <a target="_blank" href="https://twitter.com/jsdayireland">Twitter</a>, <a target="_blank" href="https://www.facebook.com/Jsdayie-336263463661254">Facebook</a> or <a target="_blank" href="https://www.linkedin.com/company/jsdayie">LinkedIn</a> to be notified when the tickets become available!
                  </p>
                </React.Fragment>
              );
            }}
          />
        </Section>
      </Container>
    );
  }
}
