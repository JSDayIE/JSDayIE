import React from "react";
import { Hero } from "@jsdayie/components";
import {
  ActivityArray,
  ISponsors,
  SpeakerArray,
  SponsorsingPackageArray,
  TicketArray,
  InfoEntryArray,
} from "@jsdayie/domain";
import { Tickets } from "../tickets";
import { Sponsors } from "../sponsors";
import { Venue, VenueProps } from "../venue";
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
  sponsorsingPackages: SponsorsingPackageArray;
  sponsors: ISponsors;
  info: InfoEntryArray;
  venue: VenueProps;
}

export const Home: React.FC<HomeProps> = (props) => {
  const {
    speakers,
    tickets,
    activity,
    blog,
    sponsors,
    sponsorsingPackages,
    info,
    venue,
  } = props;
  return (
    <>
      <Hero />
      <Welcome />
      <Speakers data={speakers} isDemo={false} isPreview />
      <Schedule data={activity} />
      <Tickets data={tickets} />
      <Sponsors
        sponsorsingPackagesData={sponsorsingPackages}
        sponsorData={sponsors}
      />
      <Venue galleryData={venue.galleryData} isPreview />
      <Info data={info} />
      <BlogPreview data={blog.data} />
      <CoC />
      <Newsletter />
    </>
  );
};
