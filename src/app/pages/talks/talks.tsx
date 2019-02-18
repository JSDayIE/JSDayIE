import React from "react";
import { Section, Button, Table } from "../../../lib/components";

export class Talks extends React.Component {
  render() {
    return (
    <Section title="Talks"  size={1}>
        <p>
            JSDayIE brings together the Ireland JavaScript community for one
            day full of talks on GraphQL, DevOps, machine learning, accessibility,
            new and upcoming JavaScript features, JavaScript frameworks like React,
            Vue, and Angular, Node.js, web performance, progressive Web Apps and
            much more.
        </p>
        <p>Do you want to give a talk?</p>
        <p>Do not think about it, submit your proposal now!</p>
        <Table
            headers={[
                "Date",
                "Event"
              ]}
              rows={
                [
                    ["CFP is openfor submissions", "1st March 2019"],
                    ["CFP is close for submissions", "30th April 2019"],
                    ["Speakers are announced", "20th May 2019"]
                ]
              }
        />
        <br/>
        <div className="btnGroup">
            <Button>Submit your proposal</Button>
            <Button>Learn more about the CFP</Button>
        </div>
    </Section>
    );
  }
}