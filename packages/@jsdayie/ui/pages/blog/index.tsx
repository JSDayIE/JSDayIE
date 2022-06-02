import React from "react";
import { BlogPostsProps, getBlogData, Blog } from "@jsdayie/pages";

export interface BlogPageProps {
  props: BlogPostsProps;
}

export async function getServerSideProps(): Promise<BlogPageProps> {
  const data = await getBlogData();
  if (data instanceof Error) {
    throw new Error(data.message);
  } else {
    return {
      props: {
        data,
      },
    };
  }
}

const BlogPage: React.FC<BlogPostsProps> = (props) => {
  const { data } = props;
  return <Blog data={data} />;
};

export default BlogPage;
