import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonLink,
} from "@jsdayie/components";
import Image from "next/image";

interface InfoItemProps {
  title: string;
  summary: string;
  path: string;
  thumbnail: string;
}

export function InfoItem(props: InfoItemProps) {
  const { title, path, thumbnail, summary } = props;
  return (
    <Card>
      <CardHeader>
        <h3 className="blog_entry_preview_title">{title}</h3>
      </CardHeader>
      <CardBody>
        <Image alt={title} className="infoIcon" src={thumbnail} />
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
