import React, { Component } from "react";
import { Hero } from "../../../lib/components";
import { Tickets } from "../tickets/tickets";
import { Sponsors } from "../sponsors/sponsors";
import { Venue } from "../venue/venue";
import { Schedule } from "../schedule/schedule";
import { CoC } from "../coc/coc";
import { Welcome } from "../welcome/welcome";
import { Newsletter } from "../newsletter/newsletter";
import { BlogPreview } from "../blog/blog";
import { Info } from "../info/info";
import { Speakers } from "../speakers/speakers";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero/>
        <Welcome/>
        <Speakers/>
        <Schedule/>
        <Venue/>
        <Tickets/>
        <Info/>
        <Sponsors />
        <CoC/>
        <BlogPreview/>
        <Newsletter/>
      </React.Fragment>
    );
  }
}
