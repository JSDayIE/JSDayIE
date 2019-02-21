import React from "react";
import { Section, Container } from "../../../lib/components";

export class Welcome extends React.Component {
  render() {
    return (
      <Container>
        <Section title="Welcome to JSdayIE 2019!" size={1}>
            <p>
                JSDayIE 2019 is a 1-day single track tech conference dedicated to
                the JavaScript community in Ireland featuring some of the best
                JavaScript profesionals and organizations in Ireland. JSDayIE is
                the first JavaScript conference in Ireland and will take place
                in 2019, on September 20th at the Mansion House in Dawson Street, Dublin.
            </p>
            <p>
                JSDayIE is conference run by the JavaScript community for the developer
                community. JSDayIE is hosted by Wolk Software with support for the
                initiative from our sponsors.
            </p>
        </Section>
      </Container>
    );
  }
}
