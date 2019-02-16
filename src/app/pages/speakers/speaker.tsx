import React from "react";
import { ISpeaker } from "../../../lib/domain/types";
import "./speaker.css";

interface SpeakerProps {
  details: ISpeaker;
}

export class Speaker extends React.Component<SpeakerProps> {
  render() {
    return (
      <div className="speaker">
        <h1>{this.props.details.name}</h1>
        <h2>{this.props.details.role} at {this.props.details.org}</h2>
        <p>{this.props.details.bio}</p>
      </div>
    );
  }
}
