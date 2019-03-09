import React from "react";
import { Fetchable } from "react-fetchable";
import { Section, Container, Spinner } from "../../../lib/components";
import { speakerArrayValidator } from "../../../lib/domain/types";
import { Speaker } from "./speaker";

export class Speakers extends React.Component {
  render() {
    return (
      <Container>
        <Section title="Speakers" size={1}>
          <p>
            JSDayIE features 12 talks from some of the best JavaScript professionals.
          </p>
          <Fetchable
              url="/data/speakers.json"
              validator={speakerArrayValidator}
              loading={() => <Spinner size={100}/>}
              error={(e: Error) => <div>Error: {e.message}</div>}
              success={
                  data => {
                    const queryString = window.location.search.replace("?", "").split("=");
                    const isDemo = queryString[0] === "demo" && queryString[1] === "true";
                    const visibleSpeakers = isDemo ? data : data.filter(s => s.hide === false);
                    if (visibleSpeakers.length === 0) {
                      return <p>The speakers will be announced in May 2019!</p>;
                    } else {
                      return (
                        <div className="row">
                          {
                            visibleSpeakers.map(s => (
                              <div className="col-md-4">
                                <Speaker details={s} />
                              </div>
                            ))
                          }
                        </div>
                      );
                    }
                }
              }
          />
        </Section>
      </Container>
    );
  }
}
