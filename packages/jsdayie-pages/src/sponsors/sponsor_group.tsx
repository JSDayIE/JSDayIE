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
  const visibleSponsorsInGroup = sponsorsInGroup.filter((sponsor) => sponsor.hide === false);
  return (
    <React.Fragment>
      {visibleSponsorsInGroup.length > 0 ? <h1 className="sponsor_group_title">{label}</h1> : null}
      <div className="row justify-content-md-center">
        {
          visibleSponsorsInGroup.map((s, k) => {
            return (
              <div key={k} className="col-md-3 sponsor_group">
                <Sponsor details={s}></Sponsor>
              </div>
            );
          })
        } 
      </div>
    </React.Fragment>
  );
}
