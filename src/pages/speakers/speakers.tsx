import React from "react";
import Container from "../../lib/components/container/container";
import Section from "../../lib/components/section/section";

class Speakers extends React.Component {
  render() {
    return (
      <Container>
        <Section title="Speakers">
          <p>
            We have selected the best speakers to tell us their experience with Javascript.
          </p>
        </Section>
      </Container>
    );
  }
}

export default Speakers;
