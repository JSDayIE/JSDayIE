import React from "react";
import { Section, Container, Button } from "@jsdayie/components";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import { VenueMedia } from "./venue_media";

export interface VenueProps {
  galleryData: { urls: string[] };
  isPreview: boolean;
}

export const Venue: React.FC<VenueProps> = (props) => {
  const { galleryData, isPreview } = props;
  const { urls } = galleryData;
  const photos = urls.map((url) => ({ original: url }));
  return (
    <Container>
      <Section title="The event venue" size={1}>
        <p>
          JSDayIE 2023 will be hosted at The Round Room at The Mansion House in
          Dublin, Ireland.
        </p>
        <VenueMedia
          topLeft={{
            type: "image",
            url: "/media/venue1.png",
          }}
          topRight={{
            type: "video",
            url: "https://www.youtube.com/embed/X-6Q6OxY4fg?controls=0",
          }}
          bottonLeft={{
            type: "video",
            url: "https://www.youtube.com/embed/-fpvYWMBixY?controls=0",
          }}
          bottonRight={{
            type: "image",
            url: "/media/venue2.jpg",
          }}
        />
        <br />
        <p>
          The Round Room at The Mansion House is located in Dawson Street, right
          in the heart of Dublin and it is equipped with state-of-the-art
          lighting and audiovisual systems.
        </p>
      </Section>
      <Section title="The after party venue" size={1}>
        <p>
          The after party will take place in just 100 meters away from The Round
          Room at Cafe en Seine.
        </p>
        <VenueMedia
          topLeft={{
            type: "image",
            url: "/media/after-venue-2.jpg",
          }}
          topRight={{
            type: "video",
            url: "https://www.youtube.com/embed/SPxqF3vIxeA?controls=0",
          }}
          bottonLeft={{
            type: "image",
            url: "/media/after-venue.jpg",
          }}
          bottonRight={{
            type: "image",
            url: "/media/after-venue-3.jpg",
          }}
        />
        <br />
        <p>
          Cafe en Seine, one of Dublin&apos;s most iconic and stunning venues.
          Nestled in the heart of Dublin&apos;s city centre on Dawson Street,
          Cafe en Seine was established in 1993 and quickly became a go-to
          destination for locals and visitors to the city.
        </p>
      </Section>
      <Section title="Visit Dublin and discover Ireland" size={1}>
        <p>
          Joining JSDayIE 2023 provides you with a great excuse to explore
          Dublin and the rest of Ireland.
        </p>
        <VenueMedia
          topLeft={{
            type: "video",
            url: "https://www.youtube.com/embed/yDZRbanbkpM?controls=0",
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
        <Button color="warning" href="https://www.ireland.com/">
          More about Ireland
        </Button>
        <div className="row failte">
          <div className="col-md-6">
            <a
              href="http://www.failteireland.ie/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt="failte ireland logo"
                src="/media/failte_ireland.png"
                width="324"
                height="93"
              />
            </a>
          </div>
          <div className="col-md-6">
            <a
              href="https://www.meetinireland.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt="meet in ireland logo"
                src="/media/meet_in_ireland.png"
                width="324"
                height="116"
              />
            </a>
          </div>
        </div>
      </Section>
      {isPreview !== true ? (
        <Section title="JSDayIE 2019 Gallery" size={1}>
          <ImageGallery items={photos} showThumbnails showBullets autoPlay />
        </Section>
      ) : null}
    </Container>
  );
};
