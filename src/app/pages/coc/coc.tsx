import React from "react";
import Section from "../../../lib/components/section/section";
import Button from "../../../lib/components/button/button";

export class CoC extends React.Component {
  render() {
    return (
        <Section title="Code of Conduct">
          <p>
            JSDayIE is a community conference intended for networking and
            collaboration in the developer community. We value the participation
            of each member of the community and want all attendees to have an
            enjoyable and fulfilling experience.
          </p>
          <p>
            Accordingly, all attendees are expected to show respect and courtesy
            to other attendees throughout the conference and at all conference events,
            whether officially sponsored by JSDayIE or not.
          </p>
          <p>
            To make clear what is expected, all staff, attendees, speakers, exhibitors,
            organizers, volunteers, sponsors and providers at any JSDayIE event are
            required to conform to our Code of Conduct
          </p>
          <p>
            Organizers will enforce this code throughout the event.
          </p>
          <Button>Submit your proposal</Button>
        </Section>
    );
  }
}
