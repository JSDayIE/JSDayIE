import React from "react";
import { InfoProps, getInfoData, Info } from "@jsdayie/pages";

export interface InfoPageProps {
  props: InfoProps;
}

export async function getServerSideProps(): Promise<InfoPageProps> {
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
  return <Info data={data} />;
};

export default InfoPage;
