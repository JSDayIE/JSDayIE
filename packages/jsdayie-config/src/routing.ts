import { Home } from "../__pages/home/home";
import { Speakers } from "../__pages/speakers/speakers";
import { Schedule } from "../__pages/schedule/schedule";
import { Tickets } from "../__pages/tickets/tickets";
import { Venue } from "../__pages/venue/venue";
import { Sponsors } from "../__pages/sponsors/sponsors";
import { CoC } from "../__pages/coc/coc";
import { CoCDetails } from "../__pages/coc/coc_details";
import { Cfp } from "../__pages/cfp/cfp";
import { CfpDetails } from "../__pages/cfp/cfp_details";
import { Blog } from "../__pages/blog/blog";
import { BlogEntry } from "../__pages/blog/blog_entry";
import { Newsletter } from "../__pages/newsletter/newsletter";
import { Info } from "../__pages/info/info";
import { Faq } from "../__pages/info/faq";
import { Accessibility } from "../__pages/info/accessibility";
import { Team } from "../__pages/info/team";
import { Travel } from "../__pages/info/travel";
import { Services } from "../__pages/info/services";
import { WhyAttend } from "../__pages/info/why_attend";
import { WhyEmployee } from "../__pages/info/why_employee";
import { WhySponsor } from "../__pages/info/why_sponsor";
import { SpeakerCard } from "../__pages/speakers/card";
import { Promo } from "../__pages/others/promo";
import { GalleryPage } from "../__pages/gallery/gallery";

interface RouteConf {
  isIndex?: boolean;
  displayInNavBar?: boolean;
  title: string;
  path: string;
  component: React.ComponentType<any>;
}

export const PATHS = {
  home: "/",
  speakers: "/speakers",
  speakerCard: "/speaker_card",
  schedule: "/schedule",
  venue: "/venue",
  cfp: "/cfp",
  cfpDetails: "/cfp_details",
  tickets: "/tickets",
  sponsors: "/sponsors",
  coc: "/coc",
  cocDetails: "/coc_details",
  blog: "/blog",
  blogEntry: "/blog_entry/:id",
  newsletter: "/newsletter",
  info: "/info",
  faq: "/info/faq",
  services: "/info/services",
  accessibility: "/info/accessibility",
  travel: "/info/travel",
  whyAttend: "/info/why_attend",
  team: "/info/team",
  whyEmployee: "/info/why_employee",
  whySponsor: "/info/why_sponsor",
  promo: "/promo",
  gallery: "/gallery"
};

export const routes: RouteConf[] = [
  { isIndex: true, title: "JSDayIE 2019", path: PATHS.home, component: Home },
  { displayInNavBar: false, title: "CFP", path: PATHS.cfp, component: Cfp },
  {
    displayInNavBar: true,
    title: "Speakers",
    path: PATHS.speakers,
    component: Speakers
  },
  { title: "Schedule", path: PATHS.schedule, component: Schedule },
  { title: "Venue", path: PATHS.venue, component: Venue },
  {
    displayInNavBar: false,
    title: "Call for Proposals - Details",
    path: PATHS.cfpDetails,
    component: CfpDetails
  },
  { title: "Tickets", path: PATHS.tickets, component: Tickets },
  { title: "Info", path: PATHS.info, component: Info },
  {
    displayInNavBar: false,
    title: "Info - FAQ",
    path: PATHS.faq,
    component: Faq
  },
  {
    displayInNavBar: true,
    title: "Gallery",
    path: PATHS.gallery,
    component: GalleryPage
  },
  {
    displayInNavBar: false,
    title: "Info - Services",
    path: PATHS.services,
    component: Services
  },
  {
    displayInNavBar: false,
    title: "Info - Accessibility",
    path: PATHS.accessibility,
    component: Accessibility
  },
  {
    displayInNavBar: false,
    title: "Info - Travel",
    path: PATHS.travel,
    component: Travel
  },
  {
    displayInNavBar: false,
    title: "Info - Why to attend",
    path: PATHS.whyAttend,
    component: WhyAttend
  },
  {
    displayInNavBar: false,
    title: "Info - Team",
    path: PATHS.team,
    component: Team
  },
  {
    displayInNavBar: false,
    title: "Info - Why to buy a ticket for your employees",
    path: PATHS.whyEmployee,
    component: WhyEmployee
  },
  {
    displayInNavBar: false,
    title: "Info - Why to sponsor",
    path: PATHS.whySponsor,
    component: WhySponsor
  },
  { title: "Sponsors", path: PATHS.sponsors, component: Sponsors },
  { title: "CoC", path: PATHS.coc, component: CoC },
  { title: "Blog", path: PATHS.blog, component: Blog },
  {
    displayInNavBar: false,
    title: "Blog Entry",
    path: PATHS.blogEntry,
    component: BlogEntry
  },
  { title: "Newsletter", path: PATHS.newsletter, component: Newsletter },
  {
    displayInNavBar: false,
    title: "Code of conduct - Details",
    path: PATHS.cocDetails,
    component: CoCDetails
  },
  {
    displayInNavBar: false,
    title: "Speaker Card",
    path: PATHS.speakerCard,
    component: SpeakerCard
  },
  {
    displayInNavBar: false,
    title: "Promo",
    path: PATHS.promo,
    component: Promo
  }
];
