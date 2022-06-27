import React from "react";
import { Section, Table, Container } from "@jsdayie/components";
import { ActivityArray } from "@jsdayie/domain";

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
      </Section>
    </Container>
  );
};
