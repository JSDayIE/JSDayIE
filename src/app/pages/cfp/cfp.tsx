import React from "react";
import { Section, Link, Container, Button } from "../../../lib/components";
import { PATHS } from "../../config/routing";

export class Cfp extends React.Component {
  render() {
    return (
      <Container>
        <Section title="Call for proposals"  size={1}>
          <p>
              JSDayIE brings together the Ireland JavaScript community for one
              day full of talks on GraphQL, DevOps, machine learning, accessibility,
              new and upcoming JavaScript features, JavaScript frameworks like React,
              Vue, and Angular, Node.js, web performance, progressive Web Apps and
              much more.
          </p>
          <img src="/media/js_galaxy_2019.png"/>
          <p>Do you want to give a talk?</p>
          <Link to={PATHS.cfpDetails}>Learn more about the CFP</Link>
          <br/><br/>
          <p>Do not think about it, submit your proposal now!</p>
          <Button href="https://goo.gl/forms/QYiMwHEGyfXMdLy33">Submit your proposal now!</Button>
        </Section>
      </Container>
    );
  }
}