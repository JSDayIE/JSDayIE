import React from "react";
import { Venue, getGalleryData, VenueProps } from "@jsdayie/pages";
import { Seo } from "@jsdayie/components";
import { PATHS, seoValues } from "@jsdayie/config";

export interface VenuePageProps {
  props: VenueProps;
}

export async function getStaticProps(): Promise<VenuePageProps> {
  const data = await getGalleryData();
  if (data instanceof Error) {
    throw new Error(data.message);
  } else {
    return {
      props: {
        isPreview: false,
        galleryData: {
          urls: data,
        },
      },
    };
  }
}

const VenuePage: React.FC<VenueProps> = (props) => {
  const { galleryData, isPreview } = props;
  return (
    <>
      <Seo
        title={seoValues.title("Venue")}
        description={seoValues.description}
        mainColorHex={seoValues.mainColorHex}
        author={seoValues.author}
        keywords={seoValues.keywords}
        url={seoValues.url(PATHS.venue)}
        facebookThumbnailUrl={seoValues.facebookThumbnailUrl}
        twitterThumbnailUrl={seoValues.twitterThumbnailUrl}
        twitterUserName={seoValues.twitterUserName}
        GA_MEASUREMENT_ID={seoValues.GA_MEASUREMENT_ID}
      />
      <Venue galleryData={galleryData} isPreview={isPreview} />
    </>
  );
};

export default VenuePage;
