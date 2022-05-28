import React from "react";
import { Spinner, Section, Table, Button, Container } from "@jsdayie/components";
import { ISponsors, sponsorsValidator, sponsorsingPackageArrayValidator, SponsorsingPackageArray } from "@jsdayie/domain";
import { SponsorGroup } from "./sponsor_group";
import { RESOURCES } from "@jsdayie/config";

interface SponsorsProps {
  sponsorsingPackagesData: SponsorsingPackageArray;
  sponsorData: ISponsors;
}

export class Sponsors extends React.Component<SponsorsProps> {
  render() {
    return (
      <Container>
        <Section title="A shout out to our amazing sponsors!" size={1}>
          <p>
            JSDayIE 2023 would not be possible without the support of the following organizations.
            Would you like to add your name to the list? Check out our sponsorship opportunities!
          </p>
        <SponsorGroup group="presenting" label="Presenting Sponsor" sponsors={this.props.sponsorData} />
        <SponsorGroup group="diamond" label="Diamond Sponsor" sponsors={this.props.sponsorData} />
        <SponsorGroup group="platinumPlus" label="Platinum Plus Sponsors" sponsors={this.props.sponsorData} />
        <SponsorGroup group="platinum" label="Platinum Sponsors" sponsors={this.props.sponsorData} />
        <SponsorGroup group="gold" label="Gold Sponsors" sponsors={this.props.sponsorData} />
        <SponsorGroup group="silver" label="Silver Sponsors" sponsors={this.props.sponsorData} />
        <SponsorGroup group="media" label="Media Sponsors" sponsors={this.props.sponsorData} />
        <SponsorGroup group="community" label="Community Partners" sponsors={this.props.sponsorData} />
        <SponsorGroup group="others" label="Community Sponsors" sponsors={this.props.sponsorData} />
        </Section>
        <Section title="Would you like to sponsor JSdayIE 2023?" size={1}>
          <p>
            Sponsoring JSDayIE is a great way to contribute to the healthy
            growth of the JavaScript community in Ireland. Please join us 
            in creating an amazing experience for each and every attendee.
          </p>
          <Table
            headers={[
              "",
              "Silver",
              "Gold",
              "Platinum",
              "Platinum Plus",
              "Diamond"
            ]}
            rows={
              this.props.sponsorsingPackagesData.map(a => [
                a.title,
                a.silver,
                a.gold,
                a.platinum,
                a.platinumPlus,
                a.diamond
              ])
            }
          />
          <p>* Fees are displayed excluding 23% VAT</p>
          <p>
            Sponsoring offers a unique opportunity to expose your brand
            and find talent specialized in JavaScript technologies
            in Ireland.
          </p>
          <Button href="mailto:info@jsday.ie">
            Contact us to become a sponsor now!
          </Button>
        </Section>
      </Container>
    );
  }
}
