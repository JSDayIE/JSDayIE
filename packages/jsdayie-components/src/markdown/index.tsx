import React from "react";
import * as showdown from "showdown";

interface MarkDownProps {
    markdown: string;
}

export const MarkDown: React.FC<MarkDownProps> = props =>  {
  const converter = new showdown.Converter();
  const htmlString = converter.makeHtml(props.markdown);
  return (
      <div className="markdown">
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </div>
  );
}
