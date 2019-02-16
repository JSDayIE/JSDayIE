import React from "react";
import Container from "../../../lib/components/container/container";
import Section from "../../../lib/components/section/section";
import { Fetchable } from "react-fetchable";
import Table from "../../../lib/components/table/table";
import { ticketArrayValidator } from "../../../lib/domain/types";
import Button from "../../../lib/components/button/button";

class Tickets extends React.Component {
  render() {
    return (
      <Container>
        <Section title="Tickets">
          <p>
            Hurry up, get your ticket before it is too late!
          </p>
          <Fetchable
            url="/data/tickets.json"
            validator={ticketArrayValidator}
            loading={() => <div>Loading...</div>}
            error={(e: Error) => <div>Error: {e.message}</div>}
            success={data => {
              return (
                <React.Fragment>
                  <Table
                    headers={["Type", "Price (EUR)"]}
                    rows={data.map(t => [t.type, t.price])}
                  />
                  <Button>Get your ticket now!</Button>
                </React.Fragment>
              );
            }}
          />
        </Section>
      </Container>
    );
  }
}

export default Tickets;
