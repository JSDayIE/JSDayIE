import React from "react";
import * as showdown from "showdown";

interface MarkDownProps {
  markdown: string;
}

export const MarkDown: React.FC<MarkDownProps> = (props) => {
  const { markdown } = props;
  const converter = new showdown.Converter();
  const htmlString = converter.makeHtml(markdown);
  return (
    <div className="markdown">
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </div>
  );
};
