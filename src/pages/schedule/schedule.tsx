import React from "react";
import Container from "../../lib/components/container/container";
import Section from "../../lib/components/section/section";
import Table from "../../lib/components/table/table";
import { IActivityArray, ActivityArrayValidator } from "../../lib/domain/types";
import { Remote } from "../../lib/components/remote/remote";

interface ScheduleProps {}

interface ScheduleState {}

class Schedule extends React.Component<ScheduleProps, ScheduleState> {
  public render() {
    return (
      <Container>
        <Section title="Schedule">
          <p>
            JSDayIE is a single-track 1-day event featuring 12 amazing talks
            with a duration of 25 minutes each dedicated to the JavaScript
            community in Ireland.
          </p>
          <Remote
            url="/data/schedule.json"
            validator={ActivityArrayValidator}
            loading={() => <div>Loading...</div>}
            error={(e: Error) => <div>Error: {e.message}</div>}
            success={(data: IActivityArray) => {
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
