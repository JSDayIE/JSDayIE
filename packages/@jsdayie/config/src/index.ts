interface RouteConf {
  isIndex?: boolean;
  displayInNavBar?: boolean;
  title: string;
  path: string;
}

export const BaseCNDUrl = "https://jsdayie.azureedge.net/data";

export const RESOURCES = {
  blogEntries: `${BaseCNDUrl}/content/blog_entries.json`,
  blogEntry: (id: string) => `/posts/${id}.md`,
  gallery: `${BaseCNDUrl}/content/gallery/2019.json`,
  trendingTopics: `${BaseCNDUrl}/content/trending_topics.json`,
  schedule: `${BaseCNDUrl}/content/schedule.json`,
  speakers: `${BaseCNDUrl}/content/speakers.json`,
  sponsors: `${BaseCNDUrl}/content/sponsors.json`,
  sponsorship: `${BaseCNDUrl}/content/sponsorship.json`,
  tickets: `${BaseCNDUrl}/content/tickets.json`,
};

export const INFO_PAGES = {
  accessibility: "/info/accessibility.md",
  faq: "/info/faq.md",
  services: "/info/services.md",
  whyAttend: "/info/why_attend.md",
  whyEmployee: "/info/why_employee.md",
  tenReasonsToSponsor: "/info/ten_reasons_to_sponsor.md",
  travel: "/info/travel.md",
};

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
  coc: "/code-of-conduct",
  cocDetails: "/code-of-conduct-details",
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
  gallery: "/gallery",
};

export const routes: RouteConf[] = [
  { isIndex: true, title: "JSDayIE 2023", path: PATHS.home },
  { displayInNavBar: false, title: "CFP", path: PATHS.cfp },
  {
    displayInNavBar: true,
    title: "Speakers",
    path: PATHS.speakers,
  },
  { title: "Schedule", path: PATHS.schedule },
  { title: "Venue", path: PATHS.venue },
  {
    displayInNavBar: false,
    title: "Call for Proposals - Details",
    path: PATHS.cfpDetails,
  },
  { title: "Tickets", path: PATHS.tickets },
  { title: "Info", path: PATHS.info },
  {
    displayInNavBar: false,
    title: "Info - FAQ",
    path: PATHS.faq,
  },
  {
    displayInNavBar: true,
    title: "Gallery",
    path: PATHS.gallery,
  },
  {
    displayInNavBar: false,
    title: "Info - Services",
    path: PATHS.services,
  },
  {
    displayInNavBar: false,
    title: "Info - Accessibility",
    path: PATHS.accessibility,
  },
  {
    displayInNavBar: false,
    title: "Info - Travel",
    path: PATHS.travel,
  },
  {
    displayInNavBar: false,
    title: "Info - Why to attend",
    path: PATHS.whyAttend,
  },
  {
    displayInNavBar: false,
    title: "Info - Team",
    path: PATHS.team,
  },
  {
    displayInNavBar: false,
    title: "Info - Why to buy a ticket for your employees",
    path: PATHS.whyEmployee,
  },
  {
    displayInNavBar: false,
    title: "Info - Why to sponsor",
    path: PATHS.whySponsor,
  },
  { title: "Sponsors", path: PATHS.sponsors },
  { title: "CoC", path: PATHS.coc },
  { title: "Blog", path: PATHS.blog },
  {
    displayInNavBar: false,
    title: "Blog Entry",
    path: PATHS.blogEntry,
  },
  { title: "Newsletter", path: PATHS.newsletter },
  {
    displayInNavBar: false,
    title: "Code of conduct - Details",
    path: PATHS.cocDetails,
  },
  {
    displayInNavBar: false,
    title: "Speaker Card",
    path: PATHS.speakerCard,
  },
  {
    displayInNavBar: false,
    title: "Promo",
    path: PATHS.promo,
  },
];
