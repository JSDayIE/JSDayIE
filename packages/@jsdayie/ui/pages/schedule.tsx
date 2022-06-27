import React from "react";
import { ScheduleProps, getScheduleData, Schedule } from "@jsdayie/pages";
import { Seo } from "@jsdayie/components";
import { PATHS, seoValues } from "@jsdayie/config";

export interface SchedulePageProps {
  props: ScheduleProps;
}

export async function getStaticProps(): Promise<SchedulePageProps> {
  const data = await getScheduleData();
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

const SchedulePage: React.FC<ScheduleProps> = (props) => {
  const { data } = props;
  return (
    <>
      <Seo
        title={seoValues.title("Schedule")}
        description={seoValues.description}
        mainColorHex={seoValues.mainColorHex}
        author={seoValues.author}
        keywords={seoValues.keywords}
        url={seoValues.url(PATHS.schedule)}
        facebookThumbnailUrl={seoValues.facebookThumbnailUrl}
        twitterThumbnailUrl={seoValues.twitterThumbnailUrl}
        twitterUserName={seoValues.twitterUserName}
        GA_MEASUREMENT_ID={seoValues.GA_MEASUREMENT_ID}
      />
      <Schedule data={data} />
    </>
  );
};

export default SchedulePage;
