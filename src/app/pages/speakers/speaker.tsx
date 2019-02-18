import React from "react";
import { ISpeaker } from "../../../lib/domain/types";
import { Card, CardBody, CardHeader, CardFooter, Button } from "../../../lib/components";
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
            <h3>{this.props.details.name}</h3>
          </CardHeader>
          <CardBody>
            <img src={this.props.details.pic}/>
            <p>{this.props.details.bio}</p>
          </CardBody>
          <CardFooter>
            <div className="iconroup">
              <Button><i className="fas fa-globe-europe"></i></Button>
              <Button><i className="fab fa-twitter"></i></Button>
              <Button><i className="fab fa-github"></i></Button>
              <Button><i className="fab fa-linkedin-in"></i></Button>
              <Button><i className="fab fa-medium-m"></i></Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  }
}
