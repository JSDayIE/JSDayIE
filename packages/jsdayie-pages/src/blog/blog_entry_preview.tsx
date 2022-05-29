import React from "react";
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

export function BlogEntryPreview(props: BlogEntryPreviewProps) {
  return (
    <Card>
      <CardHeader>
        <h3 className="blog_entry_preview_title">{props.details.title}</h3>
        <span>{new Date(Date.parse(props.details.date)).toDateString()}</span>
      </CardHeader>
      <CardBody>
        <img src={props.details.thumbnail} />
        <br />
        <br />
        <p>{props.details.summary}</p>
      </CardBody>
      <CardFooter>
        <ButtonLink to={PATHS.blogEntry.replace(":id", props.details.id)}>
          Read more
        </ButtonLink>
      </CardFooter>
    </Card>
  );
}
