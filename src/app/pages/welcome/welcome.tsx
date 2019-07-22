import React from "react";
import { Section, Container } from "../../../lib/components";

export class Welcome extends React.Component {
  render() {
    return (
      <Container>
        <Section title="Welcome to JSdayIE 2019!" size={1}>
            <p>
              JSDayIE 2019 is a 1-day single track tech conference dedicated to
              the JavaScript community in Ireland featuring over 450 attendees and
              some of the best JavaScript professionals and organizations.
            </p>
            <p>
              JSDayIE is the first JavaScript conference in Ireland and will take place
              in 2019, on September 20th at The Round Room at the Mansion House in
              Dawson Street, Dublin.
            </p>
            <p>
              JSDayIE is a day to celebrate the JavaScript community in Ireland and it
              is presented by <a href="http://www.wolksoftware.com">Wolk Software</a> with
              support for the initiative from our sponsors.
            </p>
            <a className="btn btn-outline-warning btn-lg" href="https://ti.to/wolk-software-limited/jsdayie-2019/">
              Get your ticket now!
            </a>
        </Section>
      </Container>
    );
  }
}
