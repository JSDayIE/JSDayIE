import React from "react";
import Image from "next/image";

export interface VenueMediaItemProps {
  url: string;
  type: "image" | "video";
}

export function VenueMediaItem(props: VenueMediaItemProps) {
  const { url, type } = props;
  if (type === "video") {
    return (
      <iframe
        title="the venue"
        className="venueMediaItem"
        src={url}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
    );
  }
  return <Image alt="the venue" className="venueMediaItem" src={url} />;
}
