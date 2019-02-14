import React from "react";
import Container from "../../lib/components/container/container";
import Section from "../../lib/components/section/section";
import Table from "../../lib/components/table/table";
import { ISponsors, SponsorsValidator, SponsorshipArrayValidator, ISponsorshipArray } from "../../lib/domain/types";
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
  <h1>Presenting Sponsor</h1>
}

class Sponsors extends React.Component {
  render() {
    return (
      <Container>
        <Section title="A shout out to our amazing sponsors!">
          <p>
            These organizations have been instrumental in shaping TSConf
            so far! Would you like to add your name to the list?
            Check out our sponsorship opportunities.
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
                    <SponsorGroup group="silver" label="Silver Sponsors" sponsors={data} />
                    <SponsorGroup group="gold" label="Gold Sponsors" sponsors={data} />
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
            validator={SponsorshipArrayValidator}
            loading={() => <div>Loading...</div>}
            error={(e: Error) => <div>Error: {e.message}</div>}
            success={(data: ISponsorshipArray) => {
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
          <p>
            Sponsoring offers a unique opportunity to expose your brand
            and find talent and profiles specialized in JavaScript technologies
            in Ireland.
          </p>
        </Section>
      </Container>
    );
  }
}

export default Sponsors;
