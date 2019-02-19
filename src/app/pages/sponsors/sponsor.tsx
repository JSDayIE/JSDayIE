import React from "react";
import { ISponsor } from "../../../lib/domain/types";
import { Card, CardBody } from "../../../lib/components";

interface SponsorProps {
  details: ISponsor;
}

export function Sponsor(props: SponsorProps) {
  return (
    <Card>
      <CardBody>
        <a title={props.details.name} href={props.details.web}>
          <img src={props.details.logo} />
        </a>
      </CardBody>
    </Card>
  );
}
