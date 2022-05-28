import React from "react";
import { Section, Container } from "@jsdayie/components";
import { SpeakerArray } from "@jsdayie/domain";
import { Speaker } from "./speaker";

interface SpeakersProps {
  data: SpeakerArray;
}

export class Speakers extends React.Component<SpeakersProps> {
  render() {
    const queryString = window.location.search.replace("?", "").split("=");
    const isDemo = queryString[0] === "demo" && queryString[1] === "true";
    const visibleSpeakers = isDemo ? this.props.data : this.props.data.filter(s => s.hide === false);
    return (
      <Container>
        <Section title="Speakers" size={1}>
          <p>
            JSDayIE features some of the best JavaScript professionals.
          </p>
          {(() => {
            if (visibleSpeakers.length === 0) {
              return <p>The speakers will be announced very soon!</p>;
            } else {
              return (
                <div className="row">
                  {
                    visibleSpeakers.map((s, k) => (
                      <div key={k} className="col-md-4">
                        <Speaker details={s} />
                      </div>
                    ))
                  }
                </div>
              );
            }
          })()}
          <a className="btn btn-outline-warning btn-lg" href="https://ti.to/wolk-software-limited/jsdayie-2023/">
            Get your ticket now!
          </a>
        </Section>
      </Container>
    );
  }
}
