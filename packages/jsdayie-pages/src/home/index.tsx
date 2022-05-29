import React from "react";
import { Hero } from "@jsdayie/components";
import {
  ActivityArray,
  ISponsors,
  SpeakerArray,
  SponsorsingPackageArray,
  TicketArray,
} from "@jsdayie/domain";
import { Tickets } from "../tickets";
import { Sponsors } from "../sponsors";
import { Venue } from "../venue";
import { Schedule } from "../schedule";
import { CoC } from "../coc/coc";
import { Welcome } from "../welcome";
import { Newsletter } from "../newsletter";
import { BlogPreview } from "../blog/blog_preview";
import { Info } from "../info";
import { Speakers } from "../speakers";
import { BlogPostsProps } from "../blog/blog";

export interface HomeProps {
  blog: BlogPostsProps;
  speakers: SpeakerArray;
  activity: ActivityArray;
  tickets: TicketArray;
  sponsorsingPackagesData: SponsorsingPackageArray;
  sponsorData: ISponsors;
}

export const Home: React.FC<HomeProps> = (props) => {
  const {
    speakers,
    tickets,
    activity,
    blog,
    sponsorData,
    sponsorsingPackagesData,
  } = props;
  return (
    <>
      <Hero />
      <Welcome />
      <Speakers data={speakers} />
      <Schedule data={activity} />
      <Venue />
      <Tickets data={tickets} />
      <Info />
      <Sponsors
        sponsorsingPackagesData={sponsorsingPackagesData}
        sponsorData={sponsorData}
      />
      <CoC />
      <BlogPreview data={blog.data} />
      <Newsletter />
    </>
  );
};
