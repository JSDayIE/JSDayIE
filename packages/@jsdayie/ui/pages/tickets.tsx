import React from "react";
import { Tickets, getTicketData } from "@jsdayie/pages";
import { TicketArray } from "@jsdayie/domain";

export interface TicketsPageProps {
  data: TicketArray;
}

export async function getServerSideProps() {
  const data = await getTicketData();
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

const TicketsPage: React.FC<TicketsPageProps> = (props) => {
  const { data } = props;
  return <Tickets data={data} />;
};

export default TicketsPage;
