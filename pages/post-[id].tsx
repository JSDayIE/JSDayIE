import React from "react";
import { getBlogPostData, BlogEntry } from "@jsdayie/pages";
import { useRouter } from "next/router";

export interface BlogPageProps {
  markdown: string | Error;
}

export async function getServerSideProps(): Promise<BlogPageProps> {
  const router = useRouter();
  const { id } = router.query;
  if (typeof id === "string") {
    const markdownOrError = await getBlogPostData(id);
    return {
      markdown: markdownOrError,
    };
  }
  return {
    markdown: new Error("Missing ID"),
  };
}

export const BlogPostPage: React.FC<BlogPageProps> = (props) => {
  const { markdown } = props;
  if (markdown instanceof Error) {
    return <>Error</>;
  }
  return <BlogEntry markdown={markdown} />;
};

export default BlogPostPage;
