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
            JSDayIE features some of the best JavaScript professionals.
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
                }
              }
          />
          <a className="btn btn-outline-warning btn-lg" href="https://ti.to/wolk-software-limited/jsdayie-2019/">
            Get your ticket now!
          </a>
        </Section>
      </Container>
    );
  }
}
