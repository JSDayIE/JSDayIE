import React, { useState } from "react";
import { ISpeaker } from "@jsdayie/domain";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Modal,
} from "@jsdayie/components";
import Image from "next/image";
import {
  GithubIcon,
  LinkedinIcon,
  MediumIcon,
  TwitterIcon,
  WebIcon,
} from "./social_icons";

interface SpeakerProps {
  details: ISpeaker;
  isPreview?: boolean;
}

export const Speaker: React.FC<SpeakerProps> = (props) => {
  const { details, isPreview } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggleHandler = () => setIsOpen(!isOpen);
  return (
    <div className="speaker">
      <Card>
        <CardHeader>
          <h3 className="blog_entry_preview_title">{details.name}</h3>
          <span>
            {details.role} @ {details.company}
          </span>
        </CardHeader>
        <CardBody>
          <div
            role="button"
            style={{ cursor: "pointer" }}
            onClick={() => toggleHandler()}
            onKeyDown={() => toggleHandler()}
            tabIndex={0}
          >
            <Image alt={details.name} src={details.pic} />
            <p>{details.talk.title}</p>
          </div>
        </CardBody>
        {isPreview === true ? null : (
          <CardFooter>
            <div className="iconroup">
              <WebIcon links={details.links} />
              <TwitterIcon links={details.links} />
              <GithubIcon links={details.links} />
              <MediumIcon links={details.links} />
              <LinkedinIcon links={details.links} />
            </div>
          </CardFooter>
        )}
      </Card>
      <Modal
        title={details.talk.title ? details.talk.title : ""}
        isOpen={isOpen}
        toggleHandler={() => toggleHandler()}
      >
        <h5 className="section_h2">Abstract</h5>
        <p>{details.talk.abstract}</p>
        <br />
        <h5 className="section_h2">Bio</h5>
        <p>{details.bio}</p>
      </Modal>
    </div>
  );
};
