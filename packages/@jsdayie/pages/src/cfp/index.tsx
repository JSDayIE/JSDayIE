import React from "react";
import { Section, ButtonLink, Container, Button } from "@jsdayie/components";
import { PATHS } from "@jsdayie/config";
import Image from "next/image";

export const Cfp: React.FC = () => {
  return (
    <Container>
      <Section title="JSDayIE 2023 Call for Proposals" size={1}>
        <p>
          JSDayIE brings together the Ireland JavaScript community for one day
          full of talks on GraphQL, DevOps, machine learning, accessibility, new
          and upcoming JavaScript features, JavaScript frameworks like React,
          Vue, and Angular, Node.js, web performance, progressive Web Apps and
          much more.
        </p>
        <Image
          alt="js ecosystem"
          src="https://jsdayie.azureedge.net/data/media/js_galaxy_2019.png"
          width="800"
          height="480"
        />
        <p>Do you want to give a talk?</p>
        <ButtonLink to={PATHS.cfpDetails}>Learn more about the CFP</ButtonLink>
        <br />
        <br />
        <p>Do not think about it, submit your proposal now!</p>
        <Button color="warning" href="https://forms.gle/QnSmpAS91jL5opKh6">
          Submit your proposal now!
        </Button>
      </Section>
    </Container>
  );
};
