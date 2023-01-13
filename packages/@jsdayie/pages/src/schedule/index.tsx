import React from "react";
import { Section, Table, Container } from "@jsdayie/components";
import { ActivityArray } from "@jsdayie/domain";
import { Speaker } from "../speakers/speaker";

export interface ScheduleProps {
  data: ActivityArray;
}

export const Schedule: React.FC<ScheduleProps> = (props) => {
  const { data } = props;
  return (
    <Container>
      <div className="horizontal_break_6" />
      <br />
      <br />
      <br />
      <br />
      <Section title="Schedule" size={1}>
        <p>
          JSDayIE is a single-track 1-day tech conference featuring 12 talks
          from some of the best JavaScript professionals!
        </p>
        <Table
          headers={["Time", "Duration", "Speaker", "Activity"]}
          rows={data.map((a) => [
            { key: a.startTime, content: a.startTime },
            { key: a.duration, content: a.duration },
            { key: a.speaker, content: a.speaker },
            { key: a.title, content: a.title },
          ])}
          rowClass={(row) => (row[2].content === "--" ? "schedule_break" : "")}
        />
        <a
          className="btn btn-outline-warning btn-lg"
          href="https://ti.to/wolk-software-limited/jsdayie-2023"
        >
          Get your ticket now!
        </a>
        <p className="mt-5">
          This year we are very proud to announce that our Master of ceremonies
          will be Davy Engone. He has extensive experience producing video and
          audio content for the developer community and public speaking
          engagements. He is an enthusiastic and energetic software developer
          and entrepeneur with a great personality and lots of positive energy.
          We are delighted to have him on board!
        </p>
        <div className="row mt-5">
          <div className="col-4" />
          <div className="col-4">
            <Speaker
              details={{
                name: "Davy Engone",
                company: "Hackages & Techlingo",
                role: "Founder",
                pic: "/media/speakers_2019/davy_engone.jpg",
                bio: "Davy Engone is the founder and head of engineering at Hackages where he is building a team of developers and designers. He recently launched Techlingo, a brand that helps recruiters learn about the IT landscape and aims to close the gap between devs and recruiters.",
                links: {
                  twitter: "https://twitter.com/davyengone",
                  web: "https://www.davyengone.io",
                  github: "https://github.com/davyengone",
                  youtube: "https://www.youtube.com/@davyengone",
                  linkedin: "https://www.linkedin.com/in/davyengone/",
                },
                talk: {
                  title: "Master of Ceremonies",
                  abstract: "",
                },
                hide: false,
              }}
            />
          </div>
          <div className="col-4" />
        </div>
      </Section>
    </Container>
  );
};
