import React from "react";
import { IAward } from "@jsdayie/domain";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@jsdayie/components";
import Image from "next/image";

interface AwardProps {
  details: IAward;
  isPreview?: boolean;
}

export const Award: React.FC<AwardProps> = (props) => {
  const { details, isPreview } = props;
  return (
    <div className="Award">
      <Card>
        <CardHeader>
          <h3 className="blog_entry_preview_title">{details.name}</h3>
        </CardHeader>
        <CardBody>
          <div>
            <Image
              alt={details.name}
              src={details.icon}
              width="215"
              height="215"
            />
            <p>{details.description}</p>
          </div>
        </CardBody>
        {isPreview === true ? null : (
          <CardFooter>
            <p>
              {details.disabled ? (
                <Button color="warning" disabled={details.disabled}>
                  NOMINATIONS NOT OPEN YET
                </Button>
              ) : (
                <Button
                  href={details.nominationLink}
                  color="warning"
                  disabled={details.disabled}
                >
                  NOMINATE NOW
                </Button>
              )}
            </p>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};
