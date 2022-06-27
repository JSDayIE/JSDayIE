import React from "react";
import { BlogPostsProps, getBlogData, Blog } from "@jsdayie/pages";
import { Seo } from "@jsdayie/components";
import { PATHS, seoValues } from "@jsdayie/config";

export interface BlogPageProps {
  props: BlogPostsProps;
}

export async function getStaticProps(): Promise<BlogPageProps> {
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
  return (
    <>
      <Seo
        title={seoValues.title("Blog")}
        description={seoValues.description}
        mainColorHex={seoValues.mainColorHex}
        author={seoValues.author}
        keywords={seoValues.keywords}
        url={seoValues.url(PATHS.blog)}
        facebookThumbnailUrl={seoValues.facebookThumbnailUrl}
        twitterThumbnailUrl={seoValues.twitterThumbnailUrl}
        twitterUserName={seoValues.twitterUserName}
        GA_MEASUREMENT_ID={seoValues.GA_MEASUREMENT_ID}
      />
      <Blog data={data} />
    </>
  );
};

export default BlogPage;
