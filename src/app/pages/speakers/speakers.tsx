import React from "react";
import { Fetchable } from "react-fetchable";
import { Container } from "../../../lib/components";
import { Section } from "../../../lib/components";
import { speakerArrayValidator } from "../../../lib/domain/types";
import { Speaker } from "./speaker";

export class Speakers extends React.Component {
  render() {
    return (
      <Container>
        <Section title="Speakers">
          <p>
            JSDayIE features 12 talks from some of the best JavaScript professionals in Ireland.
          </p>
          <Fetchable
              url="/data/speakers.json"
              validator={speakerArrayValidator}
              loading={() => <div>Loading...</div>}
              error={(e: Error) => <div>Error: {e.message}</div>}
              success={
                data => (
                  <div className="row">
                    {
                      data.map(s => (
                        <div className="col-md-4">
                          <Speaker details={s} />
                        </div>
                      ))
                    }
                  </div>
                )
              }
          />
        </Section>
      </Container>
    );
  }
}
