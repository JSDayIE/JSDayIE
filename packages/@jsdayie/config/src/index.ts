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
  awards: "/content/awards.json",
};

export const PATHS = {
  home: "/",
  awards: "/awards",
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
  // { title: "CfP", path: PATHS.cfp },
  { title: "Speakers", path: PATHS.speakers },
  { title: "Schedule", path: PATHS.schedule },
  { title: "Venue", path: PATHS.venue },
  { title: "Tickets", path: PATHS.tickets },
  { title: "Info", path: PATHS.info },
  { title: "Sponsors", path: PATHS.sponsors },
  { title: "CoC", path: PATHS.coc },
  { title: "Blog", path: PATHS.blog },
  { title: "News", path: PATHS.newsletter },
];

const baseSeoUrl = "https://www.jsday.ie";

export const seoValues = {
  title: (title: string) => `JSDayIE 2023 | ${title}`,
  description:
    "JSDayIE - The first JavaScipt conference in Ireland is back on the 26th September 2023 The Round Room at the The Mansion House in Dublin, Ireland",
  mainColorHex: "#c8a157",
  url: (path: string) => `${baseSeoUrl}${path}`,
  twitterUserName: "@jsdayie",
  author: "JSDayIE | Wolk Software",
  facebookThumbnailUrl: `${baseSeoUrl}/media/facebook-thumbnail.png`,
  twitterThumbnailUrl: `${baseSeoUrl}/media/twitter-thumbnail.png`,
  keywords: [
    "javascript",
    "js",
    "tech",
    "conference",
    "conf",
    "dublin",
    "ireland",
    "europe",
    "react",
    "vue",
    "next",
    "node.js",
    "frontend",
    "backend",
    "deno",
    "yarn",
    "npm",
  ],
  GA_MEASUREMENT_ID: "G-9W242S4MXM",
};
