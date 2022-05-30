import React from "react";
import { ISponsor } from "@jsdayie/domain";
import Image from "next/image";

interface SponsorProps {
  details: ISponsor;
}

export function Sponsor(props: SponsorProps) {
  const { details } = props;
  return (
    <a title={details.name} href={details.web}>
      <Image alt={`${details.name} logo`} src={details.logo} />
    </a>
  );
}
