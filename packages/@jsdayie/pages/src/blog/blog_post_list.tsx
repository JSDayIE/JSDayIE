import React from "react";
import { Section } from "@jsdayie/components";
import { BlogEntryArray } from "@jsdayie/domain";
import { BlogEntryPreview } from "./blog_entry_preview";

interface BlogPostsProps {
  limit?: number;
  data: BlogEntryArray;
}

export const BlogPosts: React.FC<BlogPostsProps> = (props) => {
  const { data, limit } = props;
  const sortedEntries = data
    .filter((p) => p.visible === true)
    .sort(
      (a, b) =>
        new Date(Date.parse(b.date)).getTime() -
        new Date(Date.parse(a.date)).getTime()
    );
  const entries =
    limit !== undefined && sortedEntries.length > limit
      ? sortedEntries.slice(0, limit)
      : sortedEntries;
  return (
    <Section title="Blog" size={1}>
      <p>Here you will find the latest news about JSDayIE</p>
      <div className="row">
        {entries.map((blogEntry) => (
          <div key={blogEntry.id} className="col-md-6">
            <BlogEntryPreview details={blogEntry} />
          </div>
        ))}
      </div>
    </Section>
  );
};
