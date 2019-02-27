import React from "react";
import * as showdown from "showdown";

interface MarkDownProps {
  text: string;
}

function MarkDown(props: MarkDownProps) {
  const converter = new showdown.Converter();
  const html = converter.makeHtml(props.text);
  return <div>{html}</div>;
}

export class BlogEntry extends React.Component {
  render() {
    return (
        <div>TODO</div>
    );
  }
}
