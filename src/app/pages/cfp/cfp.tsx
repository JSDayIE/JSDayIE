import React from "react";
import { Section, Link, Container } from "../../../lib/components";
import { PATHS } from "../../config/routing";

export class Cfp extends React.Component {
  render() {
    return (
      <Container>
        <Section title="Call for Proposals"  size={1}>
          <p>
              JSDayIE brings together the Ireland JavaScript community for one
              day full of talks on GraphQL, DevOps, machine learning, accessibility,
              new and upcoming JavaScript features, JavaScript frameworks like React,
              Vue, and Angular, Node.js, web performance, progressive Web Apps and
              much more.
          </p>
          <p>Do you want to give a talk?</p>
          <p>Do not think about it, submit your proposal now!</p>
          <br/>
          <div className="btnGroup">
              <Link to={PATHS.cfpDetails}>Learn more about the call for proposals</Link>
          </div>
        </Section>
      </Container>
    );
  }
}