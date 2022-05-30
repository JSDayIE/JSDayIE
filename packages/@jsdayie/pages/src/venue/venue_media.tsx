import React from "react";
import { VenueMediaItem, VenueMediaItemProps } from "./venue_media_item";

interface VenueMediaProps {
  topLeft: VenueMediaItemProps;
  topRight: VenueMediaItemProps;
  bottonLeft: VenueMediaItemProps;
  bottonRight: VenueMediaItemProps;
}

export function VenueMedia(props: VenueMediaProps) {
  const { topLeft, topRight, bottonLeft, bottonRight } = props;
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <VenueMediaItem type={topLeft.type} url={topLeft.url} />
        </div>
        <div className="col-md-6">
          <VenueMediaItem type={topRight.type} url={topRight.url} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <VenueMediaItem type={bottonLeft.type} url={bottonLeft.url} />
        </div>
        <div className="col-md-6">
          <VenueMediaItem type={bottonRight.type} url={bottonRight.url} />
        </div>
      </div>
    </>
  );
}
