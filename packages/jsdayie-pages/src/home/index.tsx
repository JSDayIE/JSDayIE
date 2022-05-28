import React, { Component } from "react";
import { Hero } from "@jsdayie/components";
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
import { ActivityArray, ISponsors, SpeakerArray, SponsorsingPackageArray, TicketArray } from "@jsdayie/domain";

export interface HomeProps {
  blog: BlogPostsProps;
  speakers: SpeakerArray;
  activity: ActivityArray;
  tickets: TicketArray;
  sponsorsingPackagesData: SponsorsingPackageArray;
  sponsorData: ISponsors;
}

export const Home: React.FC<HomeProps> = props => {
    return (
      <React.Fragment>
        <Hero/>
        <Welcome/>
        <Speakers data={props.speakers}/>
        <Schedule data={props.activity}/>
        <Venue/>
        <Tickets data={props.tickets}/>
        <Info/>
        <Sponsors sponsorsingPackagesData={props.sponsorsingPackagesData} sponsorData={props.sponsorData} />
        <CoC/>
        <BlogPreview data={props.blog.data}/>
        <Newsletter/>
      </React.Fragment>
    );
}
