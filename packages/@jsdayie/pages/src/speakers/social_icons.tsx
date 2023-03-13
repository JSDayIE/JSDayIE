import React from "react";
import { ISpeaker } from "@jsdayie/domain";
import { Button } from "@jsdayie/components";

type Links = ISpeaker["links"];

interface SocialIconProps {
  links: Links;
}

function socialIconFactory(type: keyof Links, label: string) {
  return function SocialIcon(props: SocialIconProps) {
    const { links } = props;
    const url = links[type];
    switch (type) {
      case "web":
        return url ? (
          <Button href={url} title={label}>
            <i className="fas fa-globe-europe" />
          </Button>
        ) : null;
      case "twitter":
        return url ? (
          <Button href={url} title={label}>
            <i className="fab fa-twitter" />
          </Button>
        ) : null;
      case "github":
        return url ? (
          <Button href={url} title={label}>
            <i className="fab fa-github" />
          </Button>
        ) : null;
      case "linkedin":
        return url ? (
          <Button href={url} title={label}>
            <i className="fab fa-linkedin-in" />
          </Button>
        ) : null;
      case "medium":
        return url ? (
          <Button href={url} title={label}>
            <i className="fab fa-medium" />
          </Button>
        ) : null;
      case "youtube":
        return url ? (
          <Button href={url} title={label}>
            <i className="fab fa-youtube" />
          </Button>
        ) : null;
      default:
        return null;
    }
  };
}

export const WebIcon = socialIconFactory("web", "Internet globe icon");
export const TwitterIcon = socialIconFactory("twitter", "Twitter icon");
export const GithubIcon = socialIconFactory("github", "GitHub icon");
export const LinkedinIcon = socialIconFactory("linkedin", "LinkedIn icon");
export const MediumIcon = socialIconFactory("medium", "Medium icon");
export const YoutubeIcon = socialIconFactory("youtube", "YouTube icon");
