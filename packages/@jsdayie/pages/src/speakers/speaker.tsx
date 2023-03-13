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
  YoutubeIcon,
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
          <p>
            {details.company
              ? `${details.role} @ ${details.company}`
              : details.role}
            {", "}
            {details.city} {details.country}
          </p>
        </CardHeader>
        <CardBody>
          <div
            role="button"
            className="clickcable"
            onClick={() => toggleHandler()}
            onKeyDown={() => toggleHandler()}
            tabIndex={0}
          >
            <Image
              alt={details.name}
              src={details.pic}
              width="215"
              height="215"
            />
            <p>{details.talk.title}</p>
          </div>
        </CardBody>
        {isPreview === true ? null : (
          <CardFooter>
            <div className="iconGroup">
              <WebIcon links={details.links} />
              <TwitterIcon links={details.links} />
              <GithubIcon links={details.links} />
              <MediumIcon links={details.links} />
              <LinkedinIcon links={details.links} />
              <YoutubeIcon links={details.links} />
            </div>
          </CardFooter>
        )}
      </Card>
      <Modal
        title={details.talk.title ? details.talk.title : ""}
        isOpen={isOpen}
        toggleHandler={() => toggleHandler()}
      >
        {details.talk.abstract ? (
          <>
            <h5 className="section_h2">Abstract</h5>
            <div dangerouslySetInnerHTML={{ __html: details.talk.abstract }} />
            <br />
          </>
        ) : null}
        <h5 className="section_h2">Bio</h5>
        <p>{details.bio}</p>
      </Modal>
    </div>
  );
};
