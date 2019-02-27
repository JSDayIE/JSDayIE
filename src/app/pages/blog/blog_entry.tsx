import React from "react";
import { Fetchable } from "react-fetchable";
import { Section } from "../../../lib/components";
import { blogEntryValidator, IBlogEntry } from "../../../lib/domain/types";
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
        <Fetchable
            url="/data/blog_entries.json"
            validator={blogEntryValidator}
            loading={() => <div>Loading...</div>}
            error={(e: Error) => <div>Error: {e.message}</div>}
            success={(blogEntry: IBlogEntry) => {
              return (
                <Section title={blogEntry.title} size={1}>
                  <MarkDown text={blogEntry.contentUrl}/>
                </Section>
              );
            }}
        />
    );
  }
}
