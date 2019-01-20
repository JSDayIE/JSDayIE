import React from "react";
import Container from "../../lib/components/container/container";
import Section from "../../lib/components/section/section";
import Table from "../../lib/components/table/table";
import { ISponsors, SponsorsValidator, SponsorshipArrayValidator, ISponsorshipArray } from "../../lib/domain/types";
import { Fetchable } from "react-fetchable";

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
                    <h1>Presenting Sponsor</h1>
                    {
                      data.presenting.map(s => {
                        return (
                          <React.Fragment>
                            TODO
                          </React.Fragment>
                        );
                      })
                    }
                    <h1>Diamond Sponsor</h1>
                    {
                      data.diamond.map(s => {
                        return (
                          <React.Fragment>
                            TODO
                          </React.Fragment>
                        );
                      })
                    }
                    <h1>Platinum Plus Sponsors</h1>
                    {
                      data.platinumPlus.map(s => {
                        return (
                          <React.Fragment>
                            TODO
                          </React.Fragment>
                        );
                      })
                    }
                    <h1>Platinum Sponsors</h1>
                    {
                      data.platinum.map(s => {
                        return (
                          <React.Fragment>
                            TODO
                          </React.Fragment>
                        );
                      })
                    }
                    <h1>Silver Sponsors</h1>
                    {
                      data.silver.map(s => {
                        return (
                          <React.Fragment>
                            TODO
                          </React.Fragment>
                        );
                      })
                    }
                    <h1>Gold Sponsors</h1>
                    {
                      data.gold.map(s => {
                        return (
                          <React.Fragment>
                            TODO
                          </React.Fragment>
                        );
                      })
                    }
                  </React.Fragment>
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
            and find talent and profiles in Ireland specialized in
            JavaScript technologies.
          </p>
        </Section>
      </Container>
    );
  }
}

export default Sponsors;
