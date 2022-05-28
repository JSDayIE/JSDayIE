import React from "react";
import { Section, Container, Spinner } from "@jsdayie/components";
import { speakerArrayValidator, ISpeaker } from "@jsdayie/domain";
import { Speaker } from "./speaker";
import { RESOURCES } from "@jsdayie/config";

export class SpeakerCard extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const $navbar = document.querySelector(".navbar");
      if ($navbar) {
        ($navbar as HTMLElement).style.display = "none";
      }
      const $footer = document.querySelector(".footer");
      if ($footer) {
        ($footer as HTMLElement).style.display = "none";
      }
      const $card = document.querySelector(".card");
      if ($card) {
        ($card as HTMLElement).style.backgroundColor = "transparent";
        ($card as HTMLElement).style.boxShadow = "none";
        ($card as HTMLElement).style.border = "none";
      }
      const $cardHeader = document.querySelector(".card-header");
      if ($cardHeader) {
        ($cardHeader as HTMLElement).style.borderBottom = "none";
      }
    }, 2000);
  }
  render() {
    return (
      <Container>
        <Section title="JSDayIE 2023 is proud to present" size={1}>
          <Fetchable
            url={RESOURCES.speakers}
            validator={speakerArrayValidator}
            loading={() => <Spinner size={100} />}
            error={(e: Error) => <div>Error: {e.message}</div>}
            success={(data: ISpeaker[]) => {
              const queryString = window.location.search
                .replace("?", "")
                .split("=");
              const index = parseInt(queryString[1]);
              const s = data[index];
              return (
                <div className="row">
                  <div className="col-md-4">&nbsp;</div>
                  <div className="col-md-4">
                    <Speaker details={s} isPreview={true} />
                  </div>
                </div>
              );
            }}
          />
        </Section>
      </Container>
    );
  }
}
