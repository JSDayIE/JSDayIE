import React from "react";
import {
  Sponsors,
  SponsorsProps,
  getSponsorsingPackagesData,
  getSponsorsData,
} from "@jsdayie/pages";

export interface SponsorsPageProps {
  props: SponsorsProps;
}

export async function getServerSideProps(): Promise<SponsorsPageProps> {
  const sponsorsingPackagesData = await getSponsorsingPackagesData();
  const sponsorData = await getSponsorsData();
  if (sponsorsingPackagesData instanceof Error) {
    throw new Error(sponsorsingPackagesData.message);
  } else if (sponsorData instanceof Error) {
    throw new Error(sponsorData.message);
  } else {
    return {
      props: {
        sponsorsingPackagesData,
        sponsorData,
      },
    };
  }
}

const SponsorsPage: React.FC<SponsorsProps> = (props) => {
  const { sponsorsingPackagesData, sponsorData } = props;
  return (
    <Sponsors
      sponsorsingPackagesData={sponsorsingPackagesData}
      sponsorData={sponsorData}
    />
  );
};

export default SponsorsPage;
