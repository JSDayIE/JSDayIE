import React from "react";
import * as showdown from "showdown";
import { sanitize } from "dompurify";

interface MarkDownProps {
  markdown: string;
}

export const MarkDown: React.FC<MarkDownProps> = (props) => {
  const { markdown } = props;
  const converter = new showdown.Converter();
  const htmlString = converter.makeHtml(markdown);
  const html = sanitize(htmlString);
  return (
    <div className="markdown">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};
