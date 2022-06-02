import React from "react";
import { SpeakersProps, getSpeakerData, Speakers } from "@jsdayie/pages";
import { GetStaticProps, GetStaticPropsResult } from "next";

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
        isPreview: false,
      },
    };
  }
};

const SpeakersPage: React.FC<SpeakersProps> = (props) => {
  const { data, isDemo, isPreview } = props;
  return <Speakers data={data} isDemo={isDemo} isPreview={isPreview} />;
};

export default SpeakersPage;
