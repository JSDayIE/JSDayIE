import React from "react";
import { AwardsProps, getAwardsData, Awards } from "@jsdayie/pages";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { Seo } from "@jsdayie/components";
import { PATHS, seoValues } from "@jsdayie/config";

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<AwardsProps>
> => {
  const data = await getAwardsData();
  if (data instanceof Error) {
    throw new Error(data.message);
  } else {
    return {
      props: {
        ...data,
        isPreview: false,
      },
    };
  }
};

const SpeakersPage: React.FC<AwardsProps> = (props) => {
  const { categories, isPreview } = props;
  return (
    <>
      <Seo
        title={seoValues.title("Awards")}
        description={seoValues.description}
        mainColorHex={seoValues.mainColorHex}
        author={seoValues.author}
        keywords={seoValues.keywords}
        url={seoValues.url(PATHS.awards)}
        facebookThumbnailUrl={seoValues.facebookThumbnailUrl}
        twitterThumbnailUrl={seoValues.twitterThumbnailUrl}
        twitterUserName={seoValues.twitterUserName}
        GA_MEASUREMENT_ID={seoValues.GA_MEASUREMENT_ID}
      />
      <Awards categories={categories} isPreview={isPreview} />
    </>
  );
};

export default SpeakersPage;
