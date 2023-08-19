import React from "react";
import { Section, Table, Button, Container } from "@jsdayie/components";
import { ISponsors, SponsorsingPackageArray } from "@jsdayie/domain";
import { SponsorGroup } from "./sponsor_group";

export interface SponsorsProps {
  sponsorsingPackagesData: SponsorsingPackageArray;
  sponsorData: ISponsors;
  displaySponsors: boolean;
}

export const Sponsors: React.FC<SponsorsProps> = (props) => {
  const { displaySponsors, sponsorData, sponsorsingPackagesData } = props;
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
            .map((a, i) => [
              { key: `title${i}`, content: a.title },
              { key: `bronze${i}`, content: a.bronze },
              { key: `silver${i}`, content: a.silver },
              { key: `gold${i}`, content: a.gold },
              { key: `platinum${i}`, content: a.platinum },
              { key: `platinumPlus${i}`, content: a.platinumPlus },
              { key: `diamond${i}`, content: a.diamond },
            ])}
        />
        <p>* Fees are displayed excluding 23% VAT</p>
        <p>We also offer the following additional sponsorship opportunities:</p>
        <Table
          headers={[
            "",
            "Award category",
            "Coffee Break",
            "Breakfast",
            "Lunch",
            "After party",
          ]}
          rows={[
            [
              {
                key: "aso_title1",
                content: "Price (EUR)*",
              },
              { key: "aso_price1", content: "500" },
              { key: "aso_price2", content: "1000" },
              { key: "aso_price3", content: "1000" },
              { key: "aso_price4", content: "1000" },
              { key: "aso_price5", content: "3000" },
            ],
            [
              {
                key: "aso_title2",
                content: "Maximum Availability",
              },
              { key: "aso_availability1", content: "8" },
              { key: "aso_availability2", content: "2" },
              { key: "aso_availability3", content: "1" },
              { key: "aso_availability4", content: "1" },
              { key: "aso_availability5", content: "1" },
            ],
          ]}
        />
        <p>* Fees are displayed excluding 23% VAT</p>
        <p>
          Sponsoring offers a unique opportunity to expose your brand and find
          talent specialized in JavaScript technologies in Ireland.
        </p>
        <br />
        <Button href="https://bit.ly/SponsorJSDayIE2023Now" color="warning">
          Download our prospectus
        </Button>
        <br />
        <br />
        <p>Or</p>
        <Button href="mailto:info@jsday.ie" color="warning">
          Become a sponsor
        </Button>
      </Section>
      <div className="horizontal_break_2" />
      {displaySponsors ? (
        <Section title="A shout out to our 2023 sponsors!" size={1}>
          <p>
            JSDayIE 2023 is only possible thanks the support of the following
            organizations. Would you like to add your name to the list? Check
            out our sponsorship opportunities!
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
      ) : null}
    </Container>
  );
};
