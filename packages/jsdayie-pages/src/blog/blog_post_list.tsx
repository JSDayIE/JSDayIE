import React from "react";
import { Section } from "@jsdayie/components";
import { BlogEntryArray } from "@jsdayie/domain";
import { BlogEntryPreview } from "./blog_entry_preview";

interface BlogPostsProps {
  limit?: number;
  data: BlogEntryArray;
}

export function BlogPosts(props: BlogPostsProps) {
  const sortedEntries = props.data
    .filter((p) => p.visible === true)
    .sort(
      (a, b) =>
        new Date(Date.parse(b.date)).getTime() -
        new Date(Date.parse(a.date)).getTime()
    );
  const entries =
    props.limit !== undefined && sortedEntries.length > props.limit
      ? sortedEntries.slice(0, props.limit)
      : sortedEntries;
  return (
    <Section title="Blog" size={1}>
      <p>Here you will find the latest news about JSDayIE</p>
      <div className="row">
        {entries.map((blogEntry, blogEntryIndex) => (
          <div key={blogEntryIndex} className="col-md-6">
            <BlogEntryPreview details={blogEntry} />
          </div>
        ))}
      </div>
    </Section>
  );
}
