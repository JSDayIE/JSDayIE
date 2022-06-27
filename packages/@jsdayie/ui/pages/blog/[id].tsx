import React from "react";
import {
  BlogEntryProps,
  getBlogData,
  getBlogEntryData,
  BlogEntry,
} from "@jsdayie/pages";
import { GetStaticProps, GetStaticPaths } from "next";
import { Seo } from "@jsdayie/components";
import { PATHS, seoValues } from "@jsdayie/config";

interface ExtendedProps extends BlogEntryProps {
  id: string;
}

export interface BlogEntryPageProps {
  props: ExtendedProps;
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
    const id = context.params.id as string;
    const markdown = await getBlogEntryData(id);
    if (markdown instanceof Error) {
      throw new Error(markdown.message);
    } else {
      return {
        props: {
          id,
          markdown,
        },
      };
    }
  } else {
    throw new Error("Missing id");
  }
};

const BlogEntryPage: React.FC<ExtendedProps> = (props) => {
  const { markdown, id } = props;
  const lines = markdown.split(/\r?\n/);
  const header = lines.find((l) => {
    const clean = l.trim();
    return clean[0] === "#" && clean[1] !== "#";
  });
  const title = header
    ? header.split("#").join("").trim()
    : id.split("-").join(" ");
  return (
    <>
      <Seo
        title={seoValues.title(title)}
        description={seoValues.description}
        mainColorHex={seoValues.mainColorHex}
        author={seoValues.author}
        keywords={seoValues.keywords}
        url={seoValues.url(`${PATHS.blogEntry}/${id}`)}
        facebookThumbnailUrl={seoValues.facebookThumbnailUrl}
        twitterThumbnailUrl={seoValues.twitterThumbnailUrl}
        twitterUserName={seoValues.twitterUserName}
        GA_MEASUREMENT_ID={seoValues.GA_MEASUREMENT_ID}
      />
      <BlogEntry markdown={markdown} />
    </>
  );
};

export default BlogEntryPage;
