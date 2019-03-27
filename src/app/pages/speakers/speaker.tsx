import React from "react";
import { ISpeaker } from "../../../lib/domain/types";
import { Card, CardBody, CardHeader, CardFooter, Button } from "../../../lib/components";
import { GithubIcon, LinkedinIcon, WebIcon, TwitterIcon, MediumIcon } from "./social_icons";
import "./speaker.css";

interface SpeakerProps {
  details: ISpeaker;
}

export class Speaker extends React.Component<SpeakerProps> {
  render() {
    return (
      <div className="speaker">
        <Card>
          <CardHeader>
            <h3 className="blog_entry_preview_title">{this.props.details.name}</h3>
            <span>{this.props.details.company}</span>
          </CardHeader>
          <CardBody>
            <img src={this.props.details.pic}/>
            <p>{this.props.details.bio}</p>
          </CardBody>
          <CardFooter>
            <div className="iconroup">
              <WebIcon links={this.props.details.links} />
              <TwitterIcon links={this.props.details.links} />
              <GithubIcon links={this.props.details.links} />
              <MediumIcon links={this.props.details.links} />
              <LinkedinIcon links={this.props.details.links} />
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  }
}
