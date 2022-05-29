import React from "react";
import { Section, Container, Button } from "@jsdayie/components";
import { VenueMedia } from "./venue_media";

export const Venue: React.FC = () => {
  return (
    <Container>
      <Section title="The event venue" size={1}>
        <p>
          JSDayIE 2023 will be hosted at The Round Room at The Mansion House in
          Dublin, Ireland.
        </p>
        <VenueMedia
          topLeft={{ type: "image", url: "/media/venue1.png" }}
          topRight={{
            type: "video",
            url: "https://www.youtube.com/embed/X-6Q6OxY4fg?controls=0",
          }}
          bottonLeft={{
            type: "video",
            url: "https://www.youtube.com/embed/EMX22h9zpOc?controls=0",
          }}
          bottonRight={{ type: "image", url: "/media/venue2.jpg" }}
        />
        <br />
        <p>
          The Round Room at The Mansion House is located in Dawson Street, right
          in the heart of Dublin and it is equipped with state-of-the-art
          lighting and audiovisual systems.
        </p>
        <Button href="https://www.theconferenceandeventsvenue.ie/our-venues/the-round-room/">
          Learn more about The Round Room
        </Button>
      </Section>
      <Section title="The after party venue" size={1}>
        <p>
          The after party will take place in just 100 meters away from The Round
          Room at Cafe en Seine.
        </p>
        <VenueMedia
          topLeft={{ type: "image", url: "/media/after-venue-2.jpg" }}
          topRight={{
            type: "video",
            url: "https://www.youtube.com/embed/SPxqF3vIxeA?controls=0",
          }}
          bottonLeft={{ type: "image", url: "/media/after-venue.jpg" }}
          bottonRight={{ type: "image", url: "/media/after-venue-3.jpg" }}
        />
        <br />
        <p>
          Cafe en Seine, one of Dublin’s most iconic and stunning venues.
          Nestled in the heart of Dublin’s city centre on Dawson Street, Cafe en
          Seine was established in 1993 and quickly became a go-to destination
          for locals and visitors to the city.
        </p>
        <Button href="https://www.cafeenseine.ie/">
          Learn more about Cafe en Seine
        </Button>
      </Section>
      <Section title="Visit Dublin and discover Ireland" size={1}>
        <p>
          Joining JSDayIE 2023 provides you with a great excuse to explore
          Dublin and the rest of Ireland.
        </p>
        <VenueMedia
          topLeft={{
            type: "video",
            url: "https://www.youtube.com/embed/fsK8O2yvEPg?controls=0",
          }}
          topRight={{
            type: "video",
            url: "https://www.youtube.com/embed/w9vVo9kV_gI?controls=0",
          }}
          bottonLeft={{
            type: "video",
            url: "https://www.youtube.com/embed/PIzU6Vhpzyw?controls=0",
          }}
          bottonRight={{
            type: "video",
            url: "https://www.youtube.com/embed/fQl8FBIubxg?controls=0",
          }}
        />
        <br />
        <p>
          Visiting Dublin is like taking a great big breath of fresh air. Always
          invigorating, this Viking city is at once modern and historic,
          exciting and relaxing.
        </p>
        <Button href="https://www.discoverireland.ie/">
          Learn more about visiting Ireland
        </Button>
        <div className="row failte">
          <div className="col-md-6">
            <a
              href="http://www.failteireland.ie/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="failte ireland logo" src="/media/failte_ireland.png" />
            </a>
          </div>
          <div className="col-md-6">
            <a
              href="https://www.meetinireland.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="meet in ireland logo"
                src="/media/meet_in_ireland.png"
              />
            </a>
          </div>
        </div>
      </Section>
    </Container>
  );
};
