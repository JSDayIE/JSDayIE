import React from "react";
import { MarkDown, Container } from "@jsdayie/components";

export interface InfoEntryProps {
  markdown: string;
}

export const InfoEntry: React.FC<InfoEntryProps> = (props) => {
  const { markdown } = props;
  return (
    <Container>
      <MarkDown markdown={markdown} />
    </Container>
  );
};
