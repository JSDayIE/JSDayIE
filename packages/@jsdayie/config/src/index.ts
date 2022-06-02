interface RouteConf {
  isIndex?: boolean;
  displayInNavBar?: boolean;
  title: string;
  path: string;
}

export const BaseCNDUrl = "https://jsdayie.azureedge.net/data";

export const RESOURCES = {
  blogEntries: `${BaseCNDUrl}/content/blog_entries.json`,
  infoEntries: "https://jsdayie.azureedge.net/data/content/info_entries.json",
  infoEntry: (id: string) => `${BaseCNDUrl}/info/${id}.md`,
  blogEntry: (id: string) => `${BaseCNDUrl}/posts/${id}.md`,
  gallery: `${BaseCNDUrl}/content/gallery_2019.json`,
  trendingTopics: `${BaseCNDUrl}/content/trending_topics.json`,
  schedule: `${BaseCNDUrl}/content/schedule.json`,
  speakers: `${BaseCNDUrl}/content/speakers.json`,
  sponsors: `${BaseCNDUrl}/content/sponsors.json`,
  sponsorship: `${BaseCNDUrl}/content/sponsorship.json`,
  tickets: `${BaseCNDUrl}/content/tickets.json`,
};

export const PATHS = {
  home: "/",
  speakers: "/speakers",
  schedule: "/schedule",
  venue: "/venue",
  cfp: "/call-for-proposals",
  cfpDetails: "/call-for-proposals-details",
  tickets: "/tickets",
  sponsors: "/sponsors",
  coc: "/code-of-conduct",
  cocDetails: "/code-of-conduct-details",
  blog: "/blog",
  blogEntry: "/blog/:id",
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
  { isIndex: true, title: "DayIE", path: PATHS.home },
  { title: "CfP", path: PATHS.cfp },
  { title: "Speakers", path: PATHS.speakers },
  { title: "Schedule", path: PATHS.schedule },
  { title: "Venue", path: PATHS.venue },
  { title: "Tickets", path: PATHS.tickets },
  { title: "Info", path: PATHS.info },
  { title: "Sponsors", path: PATHS.sponsors },
  { title: "CoC", path: PATHS.coc },
  { title: "Blog", path: PATHS.blog },
  { title: "Newsletter", path: PATHS.newsletter },
];
