import React from "react";
import { Container } from "@jsdayie/components";
import { BlogPosts } from "./blog_post_list";
import { BlogEntryArray } from "@jsdayie/domain";

export interface BlogPostsProps {
  data: BlogEntryArray;
}

export const Blog: React.FC<BlogPostsProps> = props => {
    return (
      <Container>
        <BlogPosts data={props.data}/>
      </Container>
    );
}
