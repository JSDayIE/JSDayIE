import React from "react";
import { Fetchable } from "react-fetchable";
import { Section } from "../../../lib/components";
import { Table } from "../../../lib/components";
import { Button } from "../../../lib/components";
import { ticketArrayValidator } from "../../../lib/domain/types";

export class Tickets extends React.Component {
  render() {
    return (
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
    );
  }
}
