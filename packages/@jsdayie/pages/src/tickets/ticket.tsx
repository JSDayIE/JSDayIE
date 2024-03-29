import React from "react";
import { ITicket } from "@jsdayie/domain";
import { Card, CardBody, CardHeader, CardFooter } from "@jsdayie/components";
import { Ribbon } from "./ribbon";

interface TickerProps {
  details: ITicket;
}

export const Ticket: React.FC<TickerProps> = (props) => {
  const { details } = props;
  const { isRemote } = details;
  return (
    <Card>
      <CardHeader>
        <h3>{details.type}</h3>
      </CardHeader>
      <CardBody>
        {details.isSoldOut ? <Ribbon title="SOLD OUT" /> : null}
        <span className="price">{details.price}</span>
        <ul>
          {isRemote ? (
            <li>✓ Tune in from home</li>
          ) : (
            <>
              <li>✓ In-person attendance</li>
              <li>✓ Welcome Pack</li>
              <li>✓ Breakfast & Lunch</li>
              <li>✓ Access to the after party</li>
            </>
          )}
          <li>✓ 12 Amazing Talks</li>
          <li>
            ✓ Access to the JSDayIE 2023{" "}
            <a title="Vi.to Hub" href="https://vi.to/">
              Vi.to
            </a>{" "}
            Hub
          </li>
          {isRemote ? (
            <>
              <li>&nbsp;</li>
              <li>&nbsp;</li>
              <li>&nbsp;</li>
            </>
          ) : null}
        </ul>
      </CardBody>
      <CardFooter>
        <p>
          <a
            className="btn btn-outline-warning btn-lg"
            href="https://ti.to/wolk-software-limited/jsdayie-2023/"
          >
            BUY NOW
          </a>
        </p>
        <p>
          Please note that{" "}
          <a
            title="Terms and conditions"
            href="https://bit.ly/JSDayIETermsAndConditions"
          >
            terms and conditions
          </a>{" "}
          apply.
        </p>
      </CardFooter>
    </Card>
  );
};
