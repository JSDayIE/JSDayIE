import * as io from "io-ts";

export const ActivityValidator = io.type({
    startTime: io.string,
    title: io.string,
    minuteCount: io.number
});

export const ActivityArrayValidator = io.array(ActivityValidator);

export type IActivity = io.TypeOf<typeof ActivityValidator>;
export type IActivityArray = io.TypeOf<typeof ActivityArrayValidator>;

export const SponsorshipValidator = io.type({
    title: io.string,
    silver: io.string,
    gold: io.string,
    platinum: io.string,
    platinumPlus: io.string,
    diamond: io.string
});

export const SponsorshipArrayValidator = io.array(SponsorshipValidator);

export type ISponsorship = io.TypeOf<typeof SponsorshipValidator>;
export type ISponsorshipArray = io.TypeOf<typeof SponsorshipArrayValidator>;

export const SponsorValidator = io.type({
    name: io.string,
    website: io.string,
    logo: io.string
});

export const SponsorsValidator = io.type({
    silver: io.array(SponsorValidator),
    gold: io.array(SponsorValidator),
    platinum: io.array(SponsorValidator),
    platinumPlus: io.array(SponsorValidator),
    diamond: io.array(SponsorValidator),
    presenting: io.array(SponsorValidator)
});

export type ISponsors = io.TypeOf<typeof SponsorsValidator>;
