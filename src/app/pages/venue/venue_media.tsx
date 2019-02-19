import React from "react";
import { VenueMediaItem, VenueMediaItemProps } from "./venue_media_item";

interface VenueMediaProps {
  topLeft: VenueMediaItemProps;
  topRight: VenueMediaItemProps;
  bottonLeft: VenueMediaItemProps;
  bottonRight: VenueMediaItemProps;
}

export function VenueMedia(props: VenueMediaProps) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-6">
          <VenueMediaItem type={props.topLeft.type} url={props.topLeft.url} />
        </div>
        <div className="col-md-6">
          <VenueMediaItem type={props.topRight.type} url={props.topRight.url} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <VenueMediaItem type={props.bottonLeft.type} url={props.bottonLeft.url} />
        </div>
        <div className="col-md-6">
          <VenueMediaItem type={props.bottonRight.type} url={props.bottonRight.url} />
        </div>
      </div>
    </React.Fragment>
  );
}
