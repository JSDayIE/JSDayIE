import React from "react";
import { Section, Container } from "@jsdayie/components";

export const Welcome: React.FC = () => {
  return (
    <Container>
      <Section title="Welcome to JSdayIE 2023!" size={1}>
        <p>
          JSDayIE 2013 is a 1-day single track tech conference dedicated to the
          JavaScript community in Ireland featuring 500 attendees and some of
          the best JavaScript professionals and organizations.
        </p>
        <p>
          JSDayIE was the first JavaScript conference in Ireland in 2023. The
          2nd edition of JSDayIE will take place on September 26th 2023 at The
          Round Room at the Mansion House in Dawson Street, Dublin.
        </p>
        <p>
          JSDayIE is a day to celebrate the JavaScript community in Ireland and
          it is presented by{" "}
          <a href="http://www.wolksoftware.com">Wolk Software</a> with support
          for the initiative from our sponsors.
        </p>
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
