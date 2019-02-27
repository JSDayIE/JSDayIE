import React from "react";
import { Section, Container, Button } from "../../../lib/components";
import { VenueMedia } from "./venue_media";

export class Venue extends React.Component {
  render() {
    return (
      <Container>
        <Section title="The event venue" size={1}>
          <p>
            JSDayIE 2019 will be hosted at The Round Room at the The Mansion House in Dublin, Ireland.
          </p>
          <VenueMedia
            topLeft={{ type: "image", url: "/media/venue1.png"}}
            topRight={{ type: "video", url: "https://www.youtube.com/embed/X-6Q6OxY4fg?controls=0"}}
            bottonLeft={{ type: "video", url: "https://www.youtube.com/embed/EMX22h9zpOc?controls=0"}}
            bottonRight={{ type: "image", url: "/media/venue2.jpg"}}
          />
          <br/>
          <p>
            The Round Room at the The Mansion House is located in Dawson Street, right in the heart
            of Dublin and it is equiped with state-of-the-art lighting and audio visual systems.
          </p>
          <Button href="https://www.theconferenceandeventsvenue.ie/our-venues/the-round-room/">
            Learn more about The Round Room
          </Button>
        </Section>
        <div className="hide">
          <Section title="The after party venue" size={1}>
            <p>
              The after party will take place in just 100 meters away from The Round Room at Cafe en Seine.
            </p>
            <VenueMedia
              topLeft={{ type: "image", url: "/media/after-venue-2.jpg"}}
              topRight={{ type: "video", url: "https://www.youtube.com/embed/SPxqF3vIxeA?controls=0"}}
              bottonLeft={{ type: "image", url: "/media/after-venue.jpg"}}
              bottonRight={{ type: "image", url: "/media/after-venue-3.jpg"}}
            />
            <br/>
            <p>
              Cafe en Seine, one of Dublin’s most iconic and stunning venues.
              Nestled in the heart of Dublin’s city centre on Dawson Street,
              Cafe en Seine was established in 1993 and quickly became a
              go-to destination for locals and visitors to the city.
            </p>
            <Button href="https://www.cafeenseine.ie/">
                Learn more about Cafe en Seine
            </Button>
          </Section>
        </div>
      </Container>
    );
  }
}
