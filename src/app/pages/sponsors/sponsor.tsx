import React from "react";
import { ISponsor } from "../../../lib/domain/types";

interface SponsorProps {
  details: ISponsor;
}

export function Sponsor(props: SponsorProps) {
  return (
      <a title={props.details.name} href={props.details.web}>
        <img src={props.details.logo} />
      </a>
  );
}
