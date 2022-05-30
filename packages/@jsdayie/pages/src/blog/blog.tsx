import React from "react";
import { Container } from "@jsdayie/components";
import { BlogEntryArray } from "@jsdayie/domain";
import { BlogPosts } from "./blog_post_list";

export interface BlogPostsProps {
  data: BlogEntryArray;
}

export const Blog: React.FC<BlogPostsProps> = (props) => {
  const { data } = props;
  return (
    <Container>
      <BlogPosts data={data} />
    </Container>
  );
};
