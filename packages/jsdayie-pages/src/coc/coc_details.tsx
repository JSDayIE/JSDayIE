import React from "react";
import { Section, Button, Container } from "@jsdayie/components";

export class CoCDetails extends React.Component {
  render() {
    return (
      <Container>
        <Section title="Code of conduct" size={1}>
          <p>
            All attendees, speakers, sponsors and volunteers at our conference
            are required to agree with the following code of conduct. Organisers
            will enforce this code throughout the event. We expect cooperation
            from all participants to help ensure a safe environment for
            everybody.
          </p>
          <Section title="The quick version" size={2}>
            <p>
              Our conference is dedicated to providing a harassment-free
              conference experience for everyone, regardless of gender, gender
              identity and expression, age, sexual orientation, disability,
              physical appearance, body size, race, ethnicity, religion (or lack
              thereof), or technology choices. We do not tolerate harassment of
              conference participants in any form. Sexual language and imagery
              is not appropriate for any conference venue, including talks,
              workshops, parties, Twitter and other online media. Conference
              participants violating these rules may be sanctioned or expelled
              from the conference without a refund at the discretion of the
              conference organisers.
            </p>
          </Section>
          <Section title="The less quick version" size={2}>
            <p>
              Harassment includes offensive verbal comments related to gender,
              gender identity and expression, age, sexual orientation,
              disability, physical appearance, body size, race, ethnicity,
              religion, technology choices, sexual images in public spaces,
              deliberate intimidation, stalking, following, harassing
              photography or recording, sustained disruption of talks or other
              events, inappropriate physical contact, and unwelcome sexual
              attention.
            </p>
            <p>
              Participants asked to stop any harassing behavior are expected to
              comply immediately.
            </p>
            <p>
              Sponsors are also subject to the anti-harassment policy. In
              particular, sponsors should not use sexualised images, activities,
              or other material. Booth staff (including volunteers) should not
              use sexualised clothing/uniforms/costumes, or otherwise create a
              sexualised environment.
            </p>
            <p>
              If a participant engages in harassing behavior, the conference
              organisers may take any action they deem appropriate, including
              warning the offender or expulsion from the conference with no
              refund.
            </p>
            <p>
              If you are being harassed, notice that someone else is being
              harassed, or have any other concerns, please contact a member of
              conference staff immediately. Conference staff can be identified
              as they'll be wearing branded clothing and/or badges. You can also
              reach the organizers at{" "}
              <a href="mailto:info@jsday.ie">info@jsday.ie</a>.
            </p>
            <p>
              Conference staff will be happy to help participants contact
              hotel/venue security or local law enforcement, provide escorts, or
              otherwise assist those experiencing harassment to feel safe for
              the duration of the conference. We value your attendance.
            </p>
            <p>
              We expect participants to follow these rules at conference and
              workshop venues and conference-related social events.
            </p>
          </Section>
        </Section>
      </Container>
    );
  }
}
