import * as io from "io-ts";

export const activityValidator = io.type({
  startTime: io.string,
  duration: io.string,
  title: io.string,
  speaker: io.string
});

export const activityArrayValidator = io.array(activityValidator);

export type IActivity = io.TypeOf<typeof activityValidator>;
export type ActivityArray = io.TypeOf<typeof activityArrayValidator>;

export const sponsorsingPackageValidator = io.type({
  title: io.string,
  silver: io.string,
  gold: io.string,
  platinum: io.string,
  platinumPlus: io.string,
  diamond: io.string
});

export const sponsorsingPackageArrayValidator = io.array(
  sponsorsingPackageValidator
);

export type ISponsorsingPackage = io.TypeOf<typeof sponsorsingPackageValidator>;
export type SponsorsingPackageArray = io.TypeOf<
  typeof sponsorsingPackageArrayValidator
>;

export const sponsorValidator = io.type({
  hide: io.boolean,
  name: io.string,
  web: io.string,
  logo: io.string
});

export type ISponsor = io.TypeOf<typeof sponsorValidator>;

export const sponsorsValidator = io.type({
  silver: io.array(sponsorValidator),
  gold: io.array(sponsorValidator),
  platinum: io.array(sponsorValidator),
  platinumPlus: io.array(sponsorValidator),
  diamond: io.array(sponsorValidator),
  presenting: io.array(sponsorValidator),
  media: io.array(sponsorValidator),
  community: io.array(sponsorValidator),
  others: io.array(sponsorValidator)
});

export type ISponsors = io.TypeOf<typeof sponsorsValidator>;

export const speakerLinksValidator = io.partial({
  twitter: io.string,
  web: io.string,
  github: io.string,
  medium: io.string,
  linkedin: io.string
});

export const talkValidator = io.partial({
  title: io.string,
  abstract: io.string
});

export const speakerValidator = io.type({
  name: io.string,
  company: io.string,
  role: io.string,
  pic: io.string,
  bio: io.string,
  links: speakerLinksValidator,
  hide: io.boolean,
  talk: talkValidator
});

export const speakerArrayValidator = io.array(speakerValidator);

export type SpeakerArray = io.TypeOf<typeof speakerArrayValidator>;
export type ISpeaker = io.TypeOf<typeof speakerValidator>;

export const ticketValidator = io.type({
  type: io.string,
  price: io.string
});

export const ticketArrayValidator = io.array(ticketValidator);

export type ITicket = io.TypeOf<typeof ticketValidator>;
export type TicketArray = io.TypeOf<typeof ticketArrayValidator>;

export const blogEntryValidator = io.type({
  visible: io.boolean,
  id: io.string,
  date: io.string,
  title: io.string,
  summary: io.string,
  thumbnail: io.string
});

export const blogEntryArrayValidator = io.array(blogEntryValidator);

export type IBlogEntry = io.TypeOf<typeof blogEntryValidator>;
export type BlogEntryArray = io.TypeOf<typeof blogEntryArrayValidator>;
