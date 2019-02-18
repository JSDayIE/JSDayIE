import React, { Component } from "react";
import { Section } from "../../../lib/components";
import { Hero } from "../../../lib/components";
import { Container } from "../../../lib/components";
import { Tickets } from "../tickets/tickets";
import { Sponsors } from "../sponsors/sponsors";
import { Venue } from "../venue/venue";
import { Schedule } from "../schedule/schedule";
import { CoC } from "../coc/coc";
import { Talks } from "../talks/talks";
import { Speakers } from "../speakers/speakers";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero/>
        <Container>
            <Section title="Home" size={1}>
                <p>
                  JSDayIE 2019 is a 1-day single track tech conference dedicated to
                  the JavaScript community in Ireland featuring some of the best
                  JavaScript profesionals and organizations in Ireland. JSDayIE is
                  the first JavaScript conference in Ireland and will take place
                  in 2019, on September 20th at the Mansion House in Dawson Street, Dublin.
                </p>
                <p>
                  JSDayIE is conference run by the JavaScript community for the developer
                  community. RebelCon is hosted by Wolk Software with support for the
                  initiative from our sponsors.
                </p>
            </Section>
            <Talks/>
            <Speakers/>
            <Schedule/>
            <Tickets/>
            <Venue/>
            <Sponsors />
            <CoC/>
        </Container>
      </React.Fragment>
    );
  }
}
