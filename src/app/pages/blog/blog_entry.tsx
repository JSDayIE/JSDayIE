import React from "react";
import { Fetchable } from "react-fetchable";
import { Section } from "../../../lib/components";
import { blogEntryValidator, IBlogEntry } from "../../../lib/domain/types";

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

                </Section>
              );
            }}
        />
    );
  }
}
