import React from "react";
import { Section, Container, Table } from "../../../lib/components";
import { Link } from "react-router-dom";
import { PATHS } from "../../config/routing";

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
          <p>
            The CFP will be available the 1st of March! Subscribe to our <Link to={PATHS.newsletter}>Newsletter</Link> or follow us on <a target="_blank" href="https://twitter.com/JSDayIE">Twitter</a>, <a target="_blank" href="https://www.facebook.com/Jsdayie-336263463661254">Facebook</a> or <a target="_blank" href="https://www.linkedin.com/company/jsdayie">LinkedIn</a> to be notified when the tickets become available!
          </p>
        </Section>
      </Container>
    );
  }
}
