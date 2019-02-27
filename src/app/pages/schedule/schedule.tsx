import React from "react";
import { Fetchable } from "react-fetchable";
import { Section, Table, Container, Spinner } from "../../../lib/components";
import { ActivityArray, activityArrayValidator } from "../../../lib/domain/types";

interface ScheduleProps {}

interface ScheduleState {}

export class Schedule extends React.Component<ScheduleProps, ScheduleState> {
  public render() {
    return (
      <Container>
        <Section title="Schedule" size={1}>
          <p>
            JSDayIE is a single-track 1-day tech conference featuring 12
            talks from some of the best JavaScript professionals in Ireland!
          </p>
          <Fetchable
            url="/data/schedule.json"
            validator={activityArrayValidator}
            loading={() => <Spinner size={100}/>}
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
          <div className="hide">
            <p>
              JSDayIE 2019 also features an after-party
              full of activities at Cafe en Seine!
            </p>
            <Fetchable
              url="/data/after_party.json"
              validator={activityArrayValidator}
              loading={() => <Spinner size={100}/>}
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
          </div>
        </Section>
      </Container>
    );
  }
}
