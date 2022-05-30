import React from "react";
import { Section, Table, Button, Container } from "@jsdayie/components";
import { ISponsors, SponsorsingPackageArray } from "@jsdayie/domain";
import { SponsorGroup } from "./sponsor_group";

interface SponsorsProps {
  sponsorsingPackagesData: SponsorsingPackageArray;
  sponsorData: ISponsors;
}

export const Sponsors: React.FC<SponsorsProps> = (props) => {
  const { sponsorData, sponsorsingPackagesData } = props;
  return (
    <Container>
      <Section title="A shout out to our amazing sponsors!" size={1}>
        <p>
          JSDayIE 2023 would not be possible without the support of the
          following organizations. Would you like to add your name to the list?
          Check out our sponsorship opportunities!
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
      <Section title="Would you like to sponsor JSdayIE 2023?" size={1}>
        <p>
          Sponsoring JSDayIE is a great way to contribute to the healthy growth
          of the JavaScript community in Ireland. Please join us in creating an
          amazing experience for each and every attendee.
        </p>
        <Table
          headers={[
            "",
            "Silver",
            "Gold",
            "Platinum",
            "Platinum Plus",
            "Diamond",
          ]}
          rows={sponsorsingPackagesData.map((a) => [
            a.title,
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
        <Button href="mailto:info@jsday.ie">
          Contact us to become a sponsor now!
        </Button>
      </Section>
    </Container>
  );
};
