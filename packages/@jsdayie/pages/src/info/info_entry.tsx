import React from "react";
import { MarkDown } from "@jsdayie/components";

interface InfoEntryProps {
  markdown: string;
}

export const InfoEntry: React.FC<InfoEntryProps> = (props) => {
  const { markdown } = props;
  return <MarkDown markdown={markdown} />;
};
