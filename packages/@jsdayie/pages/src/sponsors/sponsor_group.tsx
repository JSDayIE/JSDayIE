import React from "react";
import { ISponsors } from "@jsdayie/domain";
import { Sponsor } from "./sponsor";

interface SponsorGroupProps {
  group: keyof ISponsors;
  sponsors: ISponsors;
  label: string;
}

export function SponsorGroup({ group, sponsors, label }: SponsorGroupProps) {
  const sponsorsInGroup = sponsors[group];
  const visibleSponsorsInGroup: any[] = sponsorsInGroup.filter(
    (sponsor) => sponsor.hide === false
  );
  return visibleSponsorsInGroup.length > 0 ? (
    <>
      {visibleSponsorsInGroup.length > 0 ? (
        <h1 className="sponsor_group_title">{label}</h1>
      ) : null}
      <div className="row justify-content-md-center">
        {visibleSponsorsInGroup.map((s) => {
          return (
            <div key={s.name} className="col-md-3 sponsor_group">
              <Sponsor details={s} />
            </div>
          );
        })}
      </div>
    </>
  ) : null;
}
