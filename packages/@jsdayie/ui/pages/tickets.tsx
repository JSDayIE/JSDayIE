import React from "react";
import { Tickets, getTicketData } from "@jsdayie/pages";
import { TicketArray } from "@jsdayie/domain";
import { Seo } from "@jsdayie/components";
import { PATHS, seoValues } from "@jsdayie/config";

export interface TicketsPageProps {
  data: TicketArray;
}

export async function getStaticProps() {
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
  return (
    <>
      <Seo
        title={seoValues.title("Tickets")}
        description={seoValues.description}
        mainColorHex={seoValues.mainColorHex}
        author={seoValues.author}
        keywords={seoValues.keywords}
        url={seoValues.url(PATHS.tickets)}
        facebookThumbnailUrl={seoValues.facebookThumbnailUrl}
        twitterThumbnailUrl={seoValues.twitterThumbnailUrl}
        twitterUserName={seoValues.twitterUserName}
        GA_MEASUREMENT_ID={seoValues.GA_MEASUREMENT_ID}
      />
      <Tickets data={data} />
    </>
  );
};

export default TicketsPage;
