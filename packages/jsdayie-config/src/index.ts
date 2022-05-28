interface RouteConf {
  isIndex?: boolean;
  displayInNavBar?: boolean;
  title: string;
  path: string;
}

export const RESOURCES = {
  blogEntries: "/data/blog_entries.json",
  blogEntry: (id: string) => `/posts/${id}.md`,
  gallery: "/data/gallery/2019.json",
  trendingTopics: "/data/trending_topics.json",
  schedule: "/data/schedule.json",
  speakers: "/data/speakers.json",
  sponsors: "/data/sponsors.json",
  sponsorship: "/data/sponsorship.json",
  tickets: "/data/tickets.json"
};

export const INFO_PAGES = {
  accessibility: "/info/accessibility.md",
  faq: "/info/faq.md",
  services: "/info/services.md",
  whyAttend: "/info/why_attend.md",
  whyEmployee: "/info/why_employee.md",
  tenReasonsToSponsor: "/info/ten_reasons_to_sponsor.md",
  travel: "/info/travel.md"
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
