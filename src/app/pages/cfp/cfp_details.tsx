import React from "react";
import { Section, Container, Table } from "../../../lib/components";
import { Link } from "react-router-dom";
import { PATHS } from "../../config/routing";

export class CfpDetails extends React.Component {
  render() {
    return (
      <Container>
        <Section title="Call for proposals" size={1}>
          <p>
            We’re excited to welcome the JavaScript community to submit talks for JSDayIE 2019 that will take place on September 20th 2019.
            This Call for Proposals <b>closes on May 15th 2019</b>.
          </p>
          <Section title="Topics" size={2}>
            <p>TODO</p>
          </Section>
          <Section title="Selection process" size={2}>
            <p>TODO</p>
            <Table
                headers={[
                    "Date",
                    "Event"
                  ]}
                  rows={
                    [
                        ["CFP is open for submissions", "1st March 2019"],
                        ["CFP is close for submissions", "15th April 2019"],
                        ["Speakers are announced", "May 2019"]
                    ]
                  }
            />
            <p>
              The CFP will be available the 1st of March! Subscribe to our <Link to={PATHS.newsletter}>Newsletter</Link> or follow us on <a target="_blank" href="https://twitter.com/JSDayIE">Twitter</a>, <a target="_blank" href="https://www.facebook.com/Jsdayie-336263463661254">Facebook</a> or <a target="_blank" href="https://www.linkedin.com/company/jsdayie">LinkedIn</a> to be notified when the tickets become available!
            </p>
          </Section>
          <Section title="Guidelines" size={2}>
          </Section>
          <Section title="Perks" size={2}>
            <p>
              If your proposal gets selected and you accept to join JSDayIE 2019 as a speaker, we will make sure you have the best possible experience. Here are some of the benefits we offer to speakers:
            </p>
            <Table
                headers={[
                    "Speaker Perks"
                  ]}
                  rows={
                    [
                        ["Speaker dinners the night before the event"],
                        ["Free entrance at the conference"],
                        ["Extra ticket, in case somebody is joining you"],
                        ["An special surprise gift in your conference welcome pack"]
                    ]
                  }
            />
          </Section>
          <Section title="We can help" size={2}>
            <p>
              Not everyone is a natural-born talent on stage. Not everyone can produce kick-ass slide decks. Not everyone is a live-demo master. Not everyone knows they have something great to talk about.
            </p>
            <p>
              There are about a million reasons why you may not consider yourself a speaker. We are here to prove you wrong.
              If all you have is a gut feeling that you should be on stage, we are here to help you develop or hone the skills you think you lack to deliver a great presentation.
            </p>
            <p>
              We are committed to fulfilling our <b>mission</b> as a community event. We are all community people and we want to be as close to you as possible.
              We will try to be <b>supportive and helpful</b> and we will do our best to get back to you with valuable feedback from the CFP process. In case
              you wish to talk with someone from the team, do not hesitate to write an email at <a href="mailto:hello@jsday.org">hello@jsday.org</a>
              (just please don’t use this email to submit a proposal). Good luck!
            </p>
          </Section>
          <Section title="Code of conduct" size={2}>
          </Section>
        </Section>
      </Container>
    );
  }
}
