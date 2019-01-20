import React from "react";
import Container from "../../lib/components/container/container";
import Section from "../../lib/components/section/section";
import Table from "../../lib/components/table/table";
import { ISponsorshipArray, SponsorshipArrayValidator } from "../../lib/domain/types";
import { Remote } from "../../lib/components/remote/remote";

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
            <h1>Presenting Sponsor</h1>
            <Remote
              url="/data/sponsors.json"
              validator={SponsorshipArrayValidator}
              loading={() => <div>Loading...</div>}
              error={(e: Error) => <div>Error: {e.message}</div>}
              success={(data: ISponsorshipArray) => {
                return (
                  <div>TODO</div>
                );
              }}
            />
            <h1>Diamond Sponsor</h1>
            <Remote
              url="/data/sponsors.json"
              validator={SponsorshipArrayValidator}
              loading={() => <div>Loading...</div>}
              error={(e: Error) => <div>Error: {e.message}</div>}
              success={(data: ISponsorshipArray) => {
                return (
                  <div>TODO</div>
                );
              }}
            />
            <h1>Platinum Plus Sponsors</h1>
            <Remote
              url="/data/sponsors.json"
              validator={SponsorshipArrayValidator}
              loading={() => <div>Loading...</div>}
              error={(e: Error) => <div>Error: {e.message}</div>}
              success={(data: ISponsorshipArray) => {
                return (
                  <div>TODO</div>
                );
              }}
            />
            <h1>Platinum Sponsors</h1>
            <Remote
              url="/data/sponsors.json"
              validator={SponsorshipArrayValidator}
              loading={() => <div>Loading...</div>}
              error={(e: Error) => <div>Error: {e.message}</div>}
              success={(data: ISponsorshipArray) => {
                return (
                  <div>TODO</div>
                );
              }}
            />
            <h1>Silver Sponsors</h1>
            <Remote
              url="/data/sponsors.json"
              validator={SponsorshipArrayValidator}
              loading={() => <div>Loading...</div>}
              error={(e: Error) => <div>Error: {e.message}</div>}
              success={(data: ISponsorshipArray) => {
                return (
                  <div>TODO</div>
                );
              }}
            />
            <h1>Gold Sponsors</h1>
            <Remote
              url="/data/sponsors.json"
              validator={SponsorshipArrayValidator}
              loading={() => <div>Loading...</div>}
              error={(e: Error) => <div>Error: {e.message}</div>}
              success={(data: ISponsorshipArray) => {
                return (
                  <div>TODO</div>
                );
              }}
            />
        </Section>
        <Section title="Would You Like to Sponsor JSdayIE?">
          <p>
            Sponsoring JSDayIE is a great way to contribute to the healthy
            growth of the JavaScript community in Ireland. Please join us 
            in creating an amazing experience for each and every attendee.
          </p>
          <Remote
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
            and find talent and profiles in Ireland specialized in
            JavaScript technologies.
          </p>
        </Section>
      </Container>
    );
  }
}

export default Sponsors;
