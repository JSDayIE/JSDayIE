import React from "react";
import { InfoProps, getInfoData, Info } from "@jsdayie/pages";
import { Seo } from "@jsdayie/components";
import { PATHS, seoValues } from "@jsdayie/config";

export interface InfoPageProps {
  props: InfoProps;
}

export async function getStaticProps(): Promise<InfoPageProps> {
  const data = await getInfoData();
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

const InfoPage: React.FC<InfoProps> = (props) => {
  const { data } = props;
  return (
    <>
      <Seo
        title={seoValues.title("General information")}
        description={seoValues.description}
        mainColorHex={seoValues.mainColorHex}
        author={seoValues.author}
        keywords={seoValues.keywords}
        url={seoValues.url(PATHS.info)}
        facebookThumbnailUrl={seoValues.facebookThumbnailUrl}
        twitterThumbnailUrl={seoValues.twitterThumbnailUrl}
        twitterUserName={seoValues.twitterUserName}
        GA_MEASUREMENT_ID={seoValues.GA_MEASUREMENT_ID}
      />
      <Info data={data} />
    </>
  );
};

export default InfoPage;
