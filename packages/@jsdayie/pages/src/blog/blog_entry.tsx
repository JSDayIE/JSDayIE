import React from "react";
import { MarkDown, Container } from "@jsdayie/components";

export interface BlogEntryProps {
  markdown: string;
}

export const BlogEntry: React.FC<BlogEntryProps> = (props) => {
  const { markdown } = props;
  return (
    <Container>
      <MarkDown markdown={markdown} />
    </Container>
  );
};
