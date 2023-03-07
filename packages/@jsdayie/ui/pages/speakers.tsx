import React from "react";
import { SpeakersProps, getSpeakerData, Speakers } from "@jsdayie/pages";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { Seo } from "@jsdayie/components";
import { PATHS, seoValues } from "@jsdayie/config";

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<SpeakersProps>
> => {
  const data = await getSpeakerData();
  if (data instanceof Error) {
    throw new Error(data.message);
  } else {
    return {
      props: {
        data,
        isDemo: false,
        isCfpOpen: false,
      },
    };
  }
};

const SpeakersPage: React.FC<SpeakersProps> = (props) => {
  const { data, isDemo, isCfpOpen } = props;
  return (
    <>
      <Seo
        title={seoValues.title("Speakers")}
        description={seoValues.description}
        mainColorHex={seoValues.mainColorHex}
        author={seoValues.author}
        keywords={seoValues.keywords}
        url={seoValues.url(PATHS.speakers)}
        facebookThumbnailUrl={seoValues.facebookThumbnailUrl}
        twitterThumbnailUrl={seoValues.twitterThumbnailUrl}
        twitterUserName={seoValues.twitterUserName}
        GA_MEASUREMENT_ID={seoValues.GA_MEASUREMENT_ID}
      />
      <Speakers data={data} isDemo={isDemo} isCfpOpen={isCfpOpen} />
    </>
  );
};

export default SpeakersPage;
