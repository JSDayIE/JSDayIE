import React from "react";
import { Sponsors, SponsorsProps, getSponsorsingPackagesData, getSponsorsData } from "@jsdayie/pages";

export interface SponsorsPageProps {
    props: SponsorsProps;
  }
  
  export async function getServerSideProps(): SponsorsPageProps {
    const sponsorsingPackagesData = await getSponsorsingPackagesData();
    const sponsorData = await getSponsorsData();
    if (sponsorsingPackagesData instanceof Error || sponsorData instanceof Error) {
      throw new Error();
    } else {
      return {
        props: {
            sponsorsingPackagesData,
            sponsorData
        }
      };
    }
  }

const SponsorsPage: React.FC<SponsorsProps> = props => {
 const { sponsorsingPackagesData, sponsorData } = props;
  return <Sponsors sponsorsingPackagesData={sponsorsingPackagesData} sponsorData={sponsorData} />;
};

export default SponsorsPage;
