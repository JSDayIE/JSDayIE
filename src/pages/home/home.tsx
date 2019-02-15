import React, { Component } from "react";
import Section from "../../lib/components/section/section";
import Button from "../../lib/components/button/button";
import Hero from "../../lib/components/hero/hero";
import Container from "../../lib/components/container/container";
import Tickets from "../tickets/tickets";
import Sponsors from "../sponsors/sponsors";
import Venue from "../venue/venue";
import Schedule from "../schedule/schedule";

class Home extends Component {
  render() {
    return (
      <React.Fragment>

        <Hero/>

        <Container>

            <Section title="Home">
                <p>
                    // TODO
                </p>
            </Section>

            <Section title="Talks">
                <p>Do you want to give a talk?</p>
                <p>Do not think about it. Access and sign up!</p>
                <table>
                    <thead>
                        <tr>
                            <th>Important Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1st September 2018</td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <Button>Submit your proposal</Button>
                <Button>Learn more about the CFP</Button>
            </Section>

            <Schedule/>
            <Tickets/>
            <Venue/>
            <Sponsors />

            <Section title="Code of Conduct">
                <p>JSDayIE is a community conference intended for networking and collaboration in the developer community. We value the participation of each member of the community and want all attendees to have an enjoyable and fulfilling experience.</p>
                <p>Accordingly, all attendees are expected to show respect and courtesy to other attendees throughout the conference and at all conference events, whether officially sponsored by JSDayIE or not.</p>
                <p>To make clear what is expected, all staff, attendees, speakers, exhibitors, organizers, volunteers, sponsors and providers at any JSDayIE event are required to conform to our Code of Conduct</p>
                <p>Organizers will enforce this code throughout the event.</p>
                <Button>Learn more about our Code of Conduct</Button>
            </Section>

        </Container>

      </React.Fragment>
    );
  }
}

export default Home;
