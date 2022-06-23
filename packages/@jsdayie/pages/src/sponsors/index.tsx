import React from "react";
import { Section, Table, Button, Container } from "@jsdayie/components";
import { ISponsors, SponsorsingPackageArray } from "@jsdayie/domain";
import { SponsorGroup } from "./sponsor_group";

export interface SponsorsProps {
  sponsorsingPackagesData: SponsorsingPackageArray;
  sponsorData: ISponsors;
}

export const Sponsors: React.FC<SponsorsProps> = (props) => {
  const { sponsorData, sponsorsingPackagesData } = props;
  return (
    <Container>
      <div className="horizontal_break_2" />
      <Section title="Would you like to sponsor JSdayIE 2023?" size={1}>
        <p>
          Sponsoring JSDayIE is a great way to contribute to the healthy growth
          of the JavaScript community in Ireland. Please join us in creating an
          amazing experience for each and every attendee.
        </p>
        <Table
          headers={[
            "",
            "Bronze",
            "Silver",
            "Gold",
            "Platinum",
            "Platinum Plus",
            "Diamond",
          ]}
          rows={sponsorsingPackagesData
            .filter((a) => !a.hide)
            .map((a) => [
              a.title,
              a.bronze,
              a.silver,
              a.gold,
              a.platinum,
              a.platinumPlus,
              a.diamond,
            ])}
        />
        <p>* Fees are displayed excluding 23% VAT</p>
        <p>
          Sponsoring offers a unique opportunity to expose your brand and find
          talent specialized in JavaScript technologies in Ireland.
        </p>
        <Button href="https://bit.ly/SponsorJSDayIE2023Now" color="warning">
          Download our Sponsorship Prospectus
        </Button>
        <br />
        <br />
        <p>Or</p>
        <Button href="mailto:info@jsday.ie" color="warning">
          Contact us to become a sponsor now!
        </Button>
      </Section>
      <div className="horizontal_break_2" />
      <Section title="A shout out to our 2019 sponsors!" size={1}>
        <p>
          JSDayIE 2019 was possible thanks the support of the following
          organizations. Would you like to add your name to the list? Check out
          our sponsorship opportunities!
        </p>
        <SponsorGroup
          group="presenting"
          label="Presenting Sponsor"
          sponsors={sponsorData}
        />
        <SponsorGroup
          group="diamond"
          label="Diamond Sponsor"
          sponsors={sponsorData}
        />
        <SponsorGroup
          group="platinumPlus"
          label="Platinum Plus Sponsors"
          sponsors={sponsorData}
        />
        <SponsorGroup
          group="platinum"
          label="Platinum Sponsors"
          sponsors={sponsorData}
        />
        <SponsorGroup
          group="gold"
          label="Gold Sponsors"
          sponsors={sponsorData}
        />
        <SponsorGroup
          group="silver"
          label="Silver Sponsors"
          sponsors={sponsorData}
        />
        <SponsorGroup
          group="media"
          label="Media Sponsors"
          sponsors={sponsorData}
        />
        <SponsorGroup
          group="community"
          label="Community Partners"
          sponsors={sponsorData}
        />
        <SponsorGroup
          group="others"
          label="Community Sponsors"
          sponsors={sponsorData}
        />
      </Section>
    </Container>
  );
};