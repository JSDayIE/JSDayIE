import React from "react";
import {
  BlogEntryProps,
  getBlogData,
  getBlogEntryData,
  BlogEntry,
} from "@jsdayie/pages";
import { GetStaticProps, GetStaticPaths } from "next";

export interface BlogEntryPageProps {
  props: BlogEntryProps;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getBlogData();
  if (data instanceof Error) {
    throw new Error(data.message);
  } else {
    return {
      paths: data.map((d) => ({
        params: {
          id: d.id,
        },
      })),
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async (
  context
): Promise<BlogEntryPageProps> => {
  if (context.params && context.params.id) {
    const markdown = await getBlogEntryData(context.params.id as string);
    if (markdown instanceof Error) {
      throw new Error(markdown.message);
    } else {
      return {
        props: {
          markdown,
        },
      };
    }
  } else {
    throw new Error("Missing id");
  }
};

const BlogEntryPage: React.FC<BlogEntryProps> = (props) => {
  const { markdown } = props;
  return <BlogEntry markdown={markdown} />;
};

export default BlogEntryPage;
