import React from "react";
import { Container, ButtonLink } from "@jsdayie/components";
import { PATHS } from "@jsdayie/config";
import { BlogPosts } from "./blog_post_list";
import { BlogPostsProps } from "./blog";

export const BlogPreview: React.FC<BlogPostsProps> = (props) => {
  return (
    <Container>
      <BlogPosts limit={2} data={props.data} />
      <div className="center">
        <ButtonLink to={PATHS.blog}>Visit our blog</ButtonLink>
      </div>
    </Container>
  );
};
