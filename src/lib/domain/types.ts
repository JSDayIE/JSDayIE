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
