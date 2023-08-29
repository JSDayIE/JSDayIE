import React from "react";
import {
  Sponsors,
  SponsorsProps,
  getSponsorsingPackagesData,
  getSponsorsData,
} from "@jsdayie/pages";
import { Seo } from "@jsdayie/components";
import { PATHS, seoValues } from "@jsdayie/config";

export interface SponsorsPageProps {
  props: SponsorsProps;
}

export async function getStaticProps(): Promise<SponsorsPageProps> {
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
        displaySponsors: true,
      },
    };
  }
}

const SponsorsPage: React.FC<SponsorsProps> = (props) => {
  const { displaySponsors, sponsorsingPackagesData, sponsorData } = props;
  return (
    <>
      <Seo
        title={seoValues.title("Sponsors")}
        description={seoValues.description}
        mainColorHex={seoValues.mainColorHex}
        author={seoValues.author}
        keywords={seoValues.keywords}
        url={seoValues.url(PATHS.sponsors)}
        facebookThumbnailUrl={seoValues.facebookThumbnailUrl}
        twitterThumbnailUrl={seoValues.twitterThumbnailUrl}
        twitterUserName={seoValues.twitterUserName}
        GA_MEASUREMENT_ID={seoValues.GA_MEASUREMENT_ID}
      />
      <Sponsors
        sponsorsingPackagesData={sponsorsingPackagesData}
        sponsorData={sponsorData}
        displaySponsors={displaySponsors}
      />
    </>
  );
};

export default SponsorsPage;
