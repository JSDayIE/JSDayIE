import React from "react";
import { ISpeaker } from "@jsdayie/domain";
import { Button } from "@jsdayie/components";

type Links = ISpeaker["links"];

interface SocialIconProps {
  links: Links;
}

function socialIconFactory(type: keyof Links) {
  return function SocialIcon(props: SocialIconProps) {
    const { links } = props;
    const url = links[type];
    switch (type) {
      case "web":
        return url ? (
          <Button href={url}>
            <i className="fas fa-globe-europe" />
          </Button>
        ) : null;
      case "twitter":
        return url ? (
          <Button href={url}>
            <i className="fab fa-twitter" />
          </Button>
        ) : null;
      case "github":
        return url ? (
          <Button href={url}>
            <i className="fab fa-github" />
          </Button>
        ) : null;
      case "linkedin":
        return url ? (
          <Button href={url}>
            <i className="fab fa-linkedin-in" />
          </Button>
        ) : null;
      case "medium":
        return url ? (
          <Button href={url}>
            <i className="fab fa-medium" />
          </Button>
        ) : null;
      default:
        return null;
    }
  };
}

export const WebIcon = socialIconFactory("web");
export const TwitterIcon = socialIconFactory("twitter");
export const GithubIcon = socialIconFactory("github");
export const LinkedinIcon = socialIconFactory("linkedin");
export const MediumIcon = socialIconFactory("medium");
