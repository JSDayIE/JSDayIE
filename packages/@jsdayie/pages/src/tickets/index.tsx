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
      <div className="horizontal_break_5" />
      <Section title="Tickets" size={1}>
        <p>Get your ticket before it is too late!</p>
        <div className="row">
          {data.map((ticket) => (
            <div key={ticket.type} className="col-md-3">
              <Ticket details={ticket} />
            </div>
          ))}
        </div>
        <br />
        <p>
          We are proud to announce that thanks to our sponsors and attendees we
          are able to offer a limited number of student and diversity tickets.
          Please use one of the forms below to apply for a ticket if you are a
          student or a member of an underrepresented group.
        </p>
        <div className="row">
          <div className="col-md-12">
            <a
              className="btn btn-outline-warning btn-lg"
              href="https://forms.gle/SuLbvmVREM9AqCJD6"
            >
              Apply for a student ticket
            </a>
            <br />
            <br />
            <p>Or</p>
            <br />
            <a
              className="btn btn-outline-warning btn-lg"
              href="https://forms.gle/cSJzqwrmcYSjRcT46"
            >
              Apply for a diversity ticket
            </a>
          </div>
        </div>
      </Section>
    </Container>
  );
};
