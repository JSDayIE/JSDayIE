import React, { Component } from "react";
import Section from "../../../lib/components/section/section";
import Hero from "../../../lib/components/hero/hero";
import Container from "../../../lib/components/container/container";
import Tickets from "../tickets/tickets";
import Sponsors from "../sponsors/sponsors";
import { Venue } from "../venue/venue";
import Schedule from "../schedule/schedule";
import { CoC } from "../coc/coc";
import { Talks } from "../talks/talks";
import { Speakers } from "../speakers/speakers";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero/>
        <Container>
            <Section title="Home">
                <p>
                    // TODO
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

export default Home;
