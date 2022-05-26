import React from "react";
import { ISpeaker } from "@jsdayie/domain";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Modal
} from "@jsdayie/components";
import {
  GithubIcon,
  LinkedinIcon,
  WebIcon,
  TwitterIcon,
  MediumIcon,
} from "./social_icons";
import "./speaker.css";

interface SpeakerProps {
  details: ISpeaker;
  isPreview?: boolean;
}

interface SpeakerState {
  isOpen: boolean;
}

export class Speaker extends React.Component<SpeakerProps, SpeakerState> {
  public constructor(props: SpeakerProps) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  public render() {
    return (
      <div className="speaker">
        <Card>
          <CardHeader>
            <h3 className="blog_entry_preview_title">
              {this.props.details.name}
            </h3>
            <span>
              {this.props.details.role} @ {this.props.details.company}
            </span>
          </CardHeader>
          <CardBody>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => this._toggleHandler()}
            >
              <img src={this.props.details.pic} />
              <p>{this.props.details.talk.title}</p>
            </div>
          </CardBody>
          {this.props.isPreview === true ? null : (
            <CardFooter>
              <div className="iconroup">
                <WebIcon links={this.props.details.links} />
                <TwitterIcon links={this.props.details.links} />
                <GithubIcon links={this.props.details.links} />
                <MediumIcon links={this.props.details.links} />
                <LinkedinIcon links={this.props.details.links} />
              </div>
            </CardFooter>
          )}
        </Card>
        <Modal
          title={this.props.details.talk.title!}
          isOpen={this.state.isOpen}
          toggleHandler={() => this._toggleHandler()}
        >
          <h5 className="section_h2">Abstract</h5>
          <p>{this.props.details.talk.abstract}</p>
          <br />
          <h5 className="section_h2">Bio</h5>
          <p>{this.props.details.bio}</p>
        </Modal>
      </div>
    );
  }
  public _toggleHandler() {
    this.setState({ isOpen: !this.state.isOpen });
  }
}
