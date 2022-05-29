import React from "react";
import { Section, Container, Table, Button } from "@jsdayie/components";
import Link from "next/link";
import { PATHS } from "@jsdayie/config";

export class CfpDetails extends React.Component {
  render() {
    return (
      <Container>
        <Section title="Call for proposals" size={1}>
          <p>
            We’re excited to welcome the JavaScript community to submit talks
            for JSDayIE 2023 that will take place on September 26th 2023. This
            Call for Proposals <b>closes on April 15th, 2023</b>. Here are some
            important dates that you should remember!
          </p>
          <Table
            headers={["Date", "Event"]}
            rows={[
              ["CFP is open for submissions", "1st March 2023"],
              ["CFP is close for submissions", "15th April 2023"],
              ["Speakers are announced", "May 2023"],
            ]}
          />
          <p>
            Do you want to give a talk? Do not think about it, submit your
            proposal now!
          </p>
          <Button href="https://goo.gl/forms/QYiMwHEGyfXMdLy33">
            Submit your proposal now!
          </Button>
          <Section title="Topics" size={2}>
            <p>
              JSDayIE is a single track 1-day conference dedicated to the entire
              JS ecosystem and its community in Ireland. We are looking for a
              multitude of topics and perspectives but most of all we value:
            </p>
            <Table
              headers={["What we value the most"]}
              rows={[
                [
                  <div>
                    <b>Original topics</b>, presented for the first time
                  </div>,
                ],
                [
                  <div>
                    <b>Practical ideas</b> that attendees can apply at work the
                    next day
                  </div>,
                ],
                [
                  <div>
                    <b>Trends and hot topics</b> which are relevant in 2023 and
                    beyond
                  </div>,
                ],
                [
                  <div>
                    <b>Fresh perspectives</b> on the JS ecosystem
                  </div>,
                ],
              ]}
            />
            <p>
              We don't have a specific theme for JSDayIE. Instead, we’re aiming
              to select talks that are interesting to as many JavaScript
              developers as possible. Our audience skill level is intermediate
              to advanced.
            </p>
            <p>
              All talks should be in English and 25 minutes long. We will be on
              a tight schedule and will enforce the time limits rigorously. We
              suggest that you time your presentation accordingly in advance.
            </p>
          </Section>
          <Section title="Selection process" size={2}>
            <p>
              We are expecting to receive a large number of proposals for
              JSDayIE 2023. With this in mind, we created a team subject matter
              experts that will go through the proposals and will decide what to
              include in the conference agenda.
            </p>
            <p>
              Each member of the commitee will go through the proposals and will
              create their own shortlist. Based on the recurrence of a proposal
              on multiple shortlists we will proceed to place it on the final
              list. All the speakers will get a response, positive or negative.
            </p>
            <p>
              We will do our best to build an agenda that covers diverse topics
              which can be of interest for the majority of attendees interested
              in the current landscape of the JavaScript world.
            </p>
          </Section>
          <Section title="Perks" size={2}>
            <p>
              If your proposal gets selected and you accept to join JSDayIE 2023
              as a speaker, we will make sure you have the best possible
              experience. Here are some of the benefits we offer to speakers:
            </p>
            <Table
              headers={["Speaker Perks"]}
              rows={[
                ["Speaker dinners the night before the event"],
                ["Free entrance at the conference"],
                ["Extra ticket, in case somebody is joining you"],
                ["A special surprise gift in your conference welcome pack"],
              ]}
            />
          </Section>
          <Section title="We can help" size={2}>
            <p>
              Not everyone is a natural-born talent on stage. Not everyone can
              produce kick-ass slide decks. Not everyone is a live-demo master.
              Not everyone knows they have something great to talk about.
            </p>
            <p>
              There are about a million reasons why you may not consider
              yourself a speaker. We are here to prove you wrong. If all you
              have is a gut feeling that you should be on stage, we are here to
              help you develop or hone the skills you think you lack to deliver
              a great presentation.
            </p>
            <p>
              We are committed to fulfilling our <b>mission</b> as a community
              event. We are all community people and we want to be as close to
              you as possible. We will try to be <b>supportive and helpful</b>{" "}
              and we will do our best to get back to you with valuable feedback
              from the CFP process. In case you wish to talk with someone from
              the team, do not hesitate to write an email at{" "}
              <a href="mailto:info@jsday.ie">info@jsday.ie</a>
              (just please don’t use this email to submit a proposal). Good
              luck!
            </p>
          </Section>
          <Section title="Video Recordings" size={2}>
            <p>
              We plan to record and publish all talks in{" "}
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCUPILOYOw8pbBWuKEaqI1EQ"
                rel="noreferrer"
              >
                our youtube channel
              </a>{" "}
              for free, along with a recording of the slide deck, live demo, and
              any on-presenter-screen activity. We do this for the benefit of
              the larger JavaScript community and those who couldn’t make it to
              the conference. We hope you agree with us, but if you are
              uncomfortable with this in any way, let us know and we will work
              things out. Note that we disabled comments on our published videos
              by default.
            </p>
            <p>
              Finally, since you retain full ownership of your slides and
              recording, we’d like to ask you to make your materials and
              recording available under a Creative Commons (we default to
              non-commercial reuse) or other open source license.
            </p>
          </Section>
          <Section title="Code of conduct" size={2}>
            <p>
              Our Code of conduct aims to create a safe and welcoming space for
              our community members, and to protect every attendee, staff member
              and speaker from harassment. We thus need you to read, understand,
              and comply with our <Link href={PATHS.coc}>code of conduct</Link>.
            </p>
          </Section>
        </Section>
      </Container>
    );
  }
}
