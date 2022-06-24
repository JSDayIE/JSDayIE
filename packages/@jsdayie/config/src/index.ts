interface RouteConf {
  isIndex?: boolean;
  displayInNavBar?: boolean;
  title: string;
  path: string;
}

export const RESOURCES = {
  blogEntries: "/content/blog_entries.json",
  infoEntries: "/content/info_entries.json",
  infoEntry: (id: string) => `/info/${id}.md`,
  blogEntry: (id: string) => `/posts/${id}.md`,
  gallery: "/content/gallery_2019.json",
  trendingTopics: "/content/trending_topics.json",
  schedule: "/content/schedule.json",
  speakers: "/content/speakers.json",
  sponsors: "/content/sponsors.json",
  sponsorship: "/content/sponsorship.json",
  tickets: "/content/tickets.json",
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
