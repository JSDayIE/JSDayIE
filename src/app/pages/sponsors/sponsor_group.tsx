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
      {sponsorsInGroup.map(s => <Sponsor details={s}></Sponsor>)} 
    </React.Fragment>
  );
}
