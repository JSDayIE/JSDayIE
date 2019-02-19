import React from "react";

export interface VenueMediaItemProps {
  url: string;
  type: "image" | "video";
}

export function VenueMediaItem(props: VenueMediaItemProps) {
  if (props.type === "video") {
    return (
      <iframe
        className="venueMediaItem"
        src={props.url}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      >
      </iframe>
    );
  } else {
    return (
      <img className="venueMediaItem" src={props.url} />
    );
  }
}
