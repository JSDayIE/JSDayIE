import React from "react";
import { ISponsors } from "../../../lib/domain/types";
import { Sponsor } from "./sponsor";

interface SponsorGroupProps {
  group: keyof ISponsors;
  sponsors: ISponsors;
  label: string;
}

export function SponsorGroup({ group, sponsors, label }: SponsorGroupProps) {
  const sponsorsInGroup = sponsors[group];
  return (
    <React.Fragment>
      {sponsorsInGroup.length > 0 ? <h1>{label}</h1> : null}
      <div className="row justify-content-md-center">
        {
          sponsorsInGroup.map(s => {
            return (
              <div className="col-md-4">
                <Sponsor details={s}></Sponsor>
              </div>
            );
          })
          } 
      </div>
      <br/><br/><br/>
    </React.Fragment>
  );
}
