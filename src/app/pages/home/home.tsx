import React, { Component } from "react";
import { Hero } from "../../../lib/components";
import { Tickets } from "../tickets/tickets";
import { Sponsors } from "../sponsors/sponsors";
import { Venue } from "../venue/venue";
import { Schedule } from "../schedule/schedule";
import { CoC } from "../coc/coc";
import { Talks } from "../talks/talks";
import { Speakers } from "../speakers/speakers";
import { Welcome } from "../welcome/welcome";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero/>
        <Welcome/>
        <Talks/>
        <Speakers/>
        <Schedule/>
        <Tickets/>
        <Venue/>
        <Sponsors />
        <CoC/>
      </React.Fragment>
    );
  }
}
