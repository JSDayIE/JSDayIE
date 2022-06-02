import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonLink,
} from "@jsdayie/components";
import { PATHS } from "@jsdayie/config";
import Image from "next/image";

interface InfoItemProps {
  title: string;
  summary: string;
  id: string;
  thumbnail: string;
}

export function InfoItem(props: InfoItemProps) {
  const { title, id, thumbnail, summary } = props;
  const path = `${PATHS.info}/${id}`;
  return (
    <Card>
      <CardHeader>
        <h3 className="blog_entry_preview_title">{title}</h3>
      </CardHeader>
      <CardBody>
        <Image
          alt={title}
          className="infoIcon"
          src={thumbnail}
          width="200"
          height="200"
        />
        <br />
        <br />
        <p>{summary}</p>
      </CardBody>
      <CardFooter>
        <ButtonLink to={path}>Read more</ButtonLink>
      </CardFooter>
    </Card>
  );
}
