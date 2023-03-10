import React from "react";
import { Section, Container } from "@jsdayie/components";
import { SpeakerArray } from "@jsdayie/domain";
import { Speaker } from "./speaker";
import { Cfp } from "../cfp";

export interface SpeakersProps {
  data: SpeakerArray;
  isDemo: boolean;
  isCfpOpen: boolean;
}

export const Speakers: React.FC<SpeakersProps> = (props) => {
  const { data, isDemo, isCfpOpen } = props;
  const visibleSpeakers = isDemo ? data : data.filter((s) => s.hide === false);
  return (
    <Container>
      {isCfpOpen ? <Cfp /> : null}
      <Section title="2023 Speakers" size={1}>
        <p>
          JSDayIE 2023 features some of the best JavaScript professionals in
          Ireland and the rest of the world
        </p>
        {(() => {
          if (visibleSpeakers.length === 0) {
            return <p>The speakers will be announced very soon!</p>;
          }
          return (
            <div className="row">
              {visibleSpeakers.map((s) => (
                <div key={s.name} className="col-md-4">
                  <Speaker details={s} />
                </div>
              ))}
            </div>
          );
        })()}
        <a
          className="btn btn-outline-warning btn-lg"
          href="https://ti.to/wolk-software-limited/jsdayie-2023"
        >
          Get your ticket now!
        </a>
      </Section>
    </Container>
  );
};
