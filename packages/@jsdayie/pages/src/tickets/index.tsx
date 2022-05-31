import React from "react";
import { Section, Container } from "@jsdayie/components";
import { TicketArray } from "@jsdayie/domain";
import { Ticket } from "./ticket";

interface TicketsProps {
  data: TicketArray;
}

export const Tickets: React.FC<TicketsProps> = (props) => {
  const { data } = props;
  return (
    <Container>
      <Section title="Tickets" size={1}>
        <p>Get your ticket before it is too late!</p>
        <div className="row">
          {data.map((ticket) => (
            <div key={ticket.type} className="col-md-3">
              <Ticket details={ticket} />
            </div>
          ))}
        </div>
        <p>* Fees are displayed excluding 23% VAT</p>
        <a
          className="btn btn-outline-warning btn-lg"
          href="https://ti.to/wolk-software-limited/jsdayie-2023/"
        >
          Get your ticket now!
        </a>
      </Section>
    </Container>
  );
};
