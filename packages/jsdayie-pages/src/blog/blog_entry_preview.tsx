import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonLink,
} from "@jsdayie/components";
import { IBlogEntry } from "@jsdayie/domain";
import { PATHS } from "@jsdayie/config";

interface BlogEntryPreviewProps {
  details: IBlogEntry;
}

export const BlogEntryPreview: React.FC<BlogEntryPreviewProps> = (props) => {
  const { details } = props;
  return (
    <Card>
      <CardHeader>
        <h3 className="blog_entry_preview_title">{details.title}</h3>
        <span>{new Date(Date.parse(details.date)).toDateString()}</span>
      </CardHeader>
      <CardBody>
        <Image alt={details.id} src={details.thumbnail} />
        <br />
        <br />
        <p>{details.summary}</p>
      </CardBody>
      <CardFooter>
        <ButtonLink to={PATHS.blogEntry.replace(":id", details.id)}>
          Read more
        </ButtonLink>
      </CardFooter>
    </Card>
  );
};
