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

export interface HomeProps {
  blog: BlogPostsProps;
}

export const Home: React.FC<HomeProps> = props => {
    return (
      <React.Fragment>
        <Hero/>
        <Welcome/>
        <Speakers/>
        <Schedule/>
        <Venue/>
        <Tickets/>
        <Info/>
        <Sponsors />
        <CoC/>
        <BlogPreview data={props.blog.data}/>
        <Newsletter/>
      </React.Fragment>
    );
}
