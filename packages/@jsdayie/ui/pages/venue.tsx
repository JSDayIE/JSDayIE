import React from "react";
import { Venue, getGalleryData, VenueProps } from "@jsdayie/pages";

export interface VenuePageProps {
  props: VenueProps;
}

export async function getServerSideProps(): Promise<VenuePageProps> {
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
  return <Venue galleryData={galleryData} isPreview={isPreview} />;
};

export default VenuePage;
