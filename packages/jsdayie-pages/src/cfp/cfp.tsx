import React from "react";
import { Section, ButtonLink, Container, Button } from "@jsdayie/components";
import { PATHS } from "@jsdayie/config";

export class Cfp extends React.Component {
  render() {
    return (
      <Container>
        <Section title="Call for proposals" size={1}>
          <p>
            JSDayIE brings together the Ireland JavaScript community for one day
            full of talks on GraphQL, DevOps, machine learning, accessibility,
            new and upcoming JavaScript features, JavaScript frameworks like
            React, Vue, and Angular, Node.js, web performance, progressive Web
            Apps and much more.
          </p>
          <img src="/media/js_galaxy_2023.png" />
          <p>Do you want to give a talk?</p>
          <ButtonLink to={PATHS.cfpDetails}>
            Learn more about the CFP
          </ButtonLink>
          <br />
          <br />
          <p>Do not think about it, submit your proposal now!</p>
          <Button href="https://goo.gl/forms/QYiMwHEGyfXMdLy33">
            Submit your proposal now!
          </Button>
        </Section>
      </Container>
    );
  }
}
