import React from "react";
import Container from "../../lib/components/container/container";
import Section from "../../lib/components/section/section";
import Table from "../../lib/components/table/table";
import { ActivityArray, activityArrayValidator } from "../../lib/domain/types";
import { Fetchable } from "react-fetchable";

interface ScheduleProps {}

interface ScheduleState {}

class Schedule extends React.Component<ScheduleProps, ScheduleState> {
  public render() {
    return (
      <Container>
        <Section title="Schedule">
          <p>
            JSDayIE is a single-track 1-day tech conference featuring 12
            talks from some of the best JavaScript professionals in Ireland!
          </p>
          <Fetchable
            url="/data/schedule.json"
            validator={activityArrayValidator}
            loading={() => <div>Loading...</div>}
            error={(e: Error) => <div>Error: {e.message}</div>}
            success={(data: ActivityArray) => {
              return (
                <Table
                  headers={["Time", "Activity"]}
                  rows={data.map(a => [`${a.startTime}`, a.title])}
                />
              );
            }}
          />
        </Section>
      </Container>
    );
  }
}

export default Schedule;
