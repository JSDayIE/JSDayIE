import React from "react";
import { Hero } from "@jsdayie/components";
import {
  ISponsors,
  SpeakerArray,
  SponsorsingPackageArray,
  TicketArray,
} from "@jsdayie/domain";
import { Tickets } from "../tickets";
import { Sponsors } from "../sponsors";
import { Welcome } from "../welcome";
import { Newsletter } from "../newsletter";
import { Speakers } from "../speakers";

export interface HomeProps {
  speakers: SpeakerArray;
  tickets: TicketArray;
  sponsorsingPackages: SponsorsingPackageArray;
  sponsors: ISponsors;
}

export const Home: React.FC<HomeProps> = (props) => {
  const { speakers, tickets, sponsors, sponsorsingPackages } = props;
  return (
    <>
      <Hero />
      <Welcome />
      <Speakers data={speakers} isDemo={false} isCfpOpen={false} />
      <Tickets data={tickets} />
      <Sponsors
        sponsorsingPackagesData={sponsorsingPackages}
        sponsorData={sponsors}
        displaySponsors
        displayPackages={false}
      />
      <Newsletter />
    </>
  );
};
