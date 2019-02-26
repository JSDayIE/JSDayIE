import React from "react";
import { Section, Container, Table } from "../../../lib/components";

export class CfpDetails extends React.Component {
  render() {
    return (
      <Container>
        <Section title="Call for Proposals" size={1}>
          <p>
              TODO
          </p>
          <Table
              headers={[
                  "Date",
                  "Event"
                ]}
                rows={
                  [
                      ["CFP is open for submissions", "1st March 2019"],
                      ["CFP is close for submissions", "30th April 2019"],
                      ["Speakers are announced", "May 2019"]
                  ]
                }
          />
        </Section>
      </Container>
    );
  }
}
