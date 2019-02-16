import React from "react";
import { Section } from "../../../lib/components/section/section";
import { Table } from "../../../lib/components/table/table";
import { Button } from "../../../lib/components/button/button";
import { ISponsors, SponsorsValidator, sponsorsingPackageArrayValidator, SponsorsingPackageArray } from "../../../lib/domain/types";
import { Fetchable } from "react-fetchable";

interface SponsorGroupProps {
  group: keyof ISponsors;
  sponsors: ISponsors;
  label: string;
}

function SponsorGroup({ group, sponsors, label }: SponsorGroupProps) {
  const sponsorsInGroup = sponsors[group];
  return (
    <React.Fragment>
      {sponsorsInGroup.length > 0 ? <h1>{label}</h1> : null}
      {
        sponsorsInGroup.map(s => (
          <a title={s.name} href={s.web}>
            <img className={`${group}Sponsor`} src={s.logo} />
          </a>
        ))
      } 
    </React.Fragment>
  );
}

export class Sponsors extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Section title="A shout out to our amazing sponsors!">
          <p>
            JSDayIE 2019 would not be possible without the support of the following organizations.
            Would you like to add your name to the list? Check out our sponsorship opportunities!
          </p>
          <Fetchable
              url="/data/sponsors.json"
              validator={SponsorsValidator}
              loading={() => <div>Loading...</div>}
              error={(e: Error) => <div>Error: {e.message}</div>}
              success={(data: ISponsors) => {
                return (
                  <React.Fragment>
                    <SponsorGroup group="presenting" label="Presenting Sponsor" sponsors={data} />
                    <SponsorGroup group="diamond" label="Diamond Sponsor" sponsors={data} />
                    <SponsorGroup group="platinumPlus" label="Platinum Plus Sponsor" sponsors={data} />
                    <SponsorGroup group="platinum" label="Platinum Sponsors" sponsors={data} />
                    <SponsorGroup group="gold" label="Gold Sponsors" sponsors={data} />
                    <SponsorGroup group="silver" label="Silver Sponsors" sponsors={data} />
                    <SponsorGroup group="media" label="Media Sponsors" sponsors={data} />
                  </React.Fragment>
                );
              }}
          />
        </Section>
        <Section title="Would You Like to Sponsor JSdayIE 2019?">
          <p>
            Sponsoring JSDayIE is a great way to contribute to the healthy
            growth of the JavaScript community in Ireland. Please join us 
            in creating an amazing experience for each and every attendee.
          </p>
          <Fetchable
            url="/data/sponsorship.json"
            validator={sponsorsingPackageArrayValidator}
            loading={() => <div>Loading...</div>}
            error={(e: Error) => <div>Error: {e.message}</div>}
            success={(data: SponsorsingPackageArray) => {
              return (
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
                    data.map(a => [
                      a.title,
                      a.silver,
                      a.gold,
                      a.platinum,
                      a.platinumPlus,
                      a.diamond
                    ])
                  }
                />
              );
            }}
          />
          <p>* Fees are displayed excluding 23% VAT</p>
          <p>
            Sponsoring offers a unique opportunity to expose your brand
            and find talent specialized in JavaScript technologies
            in Ireland.
          </p>
          <Button>Become a sponsor now!</Button>
        </Section>
      </React.Fragment>
    );
  }
}
