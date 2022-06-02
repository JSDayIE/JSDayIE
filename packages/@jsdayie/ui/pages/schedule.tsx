import React from "react";
import { ScheduleProps, getScheduleData, Schedule } from "@jsdayie/pages";

export interface SchedulePageProps {
  props: ScheduleProps;
}

export async function getServerSideProps(): Promise<SchedulePageProps> {
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
  return <Schedule data={data} />;
};

export default SchedulePage;
