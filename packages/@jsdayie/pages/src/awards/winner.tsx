import React, { useState } from "react";
import { IAward, IAwardWinner } from "@jsdayie/domain";
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
} from "../speakers/social_icons";

interface WinnerProps {
  award: IAward;
  winner: IAwardWinner;
}

export const Winner: React.FC<WinnerProps> = (props) => {
  const { award, winner } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggleHandler = () => setIsOpen(!isOpen);
  return (
    <div className="Award">
      <Card>
        <CardHeader>
          <h3 className="blog_entry_preview_title">{award.name}</h3>
        </CardHeader>
        <CardBody>
          <div>
            <Image alt={award.name} src={award.icon} width="215" height="215" />
            <br />
            <br />
            <h5>{winner.name.length > 0 ? winner.name : "TBD"}</h5>
          </div>
        </CardBody>
        <CardFooter>
          <button
            type="button"
            className="btn btn-outline-warning btn-lg"
            onClick={() => toggleHandler()}
          >
            More info
          </button>
        </CardFooter>
      </Card>
      <Modal
        title={award.name}
        isOpen={isOpen}
        toggleHandler={() => toggleHandler()}
      >
        <p>
          {award.description} The winner of the Javascript Awards Ireland
          2023&apos;s {award.name} is:
        </p>
        <h4 style={{ color: "#c8a157" }}>
          {winner.name.length > 0 ? winner.name : "TBD"}
        </h4>
        {winner.name.length > 0 ? (
          <p>
            Congratulations, and thank you! Learn more using the links below:
          </p>
        ) : null}
        <div className="iconGroup">
          <WebIcon links={winner.links} />
          <TwitterIcon links={winner.links} />
          <GithubIcon links={winner.links} />
          <MediumIcon links={winner.links} />
          <LinkedinIcon links={winner.links} />
          <YoutubeIcon links={winner.links} />
        </div>
        <br />
      </Modal>
    </div>
  );
};
