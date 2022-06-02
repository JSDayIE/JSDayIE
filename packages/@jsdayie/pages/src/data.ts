import {
  blogEntryArrayValidator,
  BlogEntryArray,
  urlArrayValidator,
  GalleryUrl,
  TicketArray,
  ticketArrayValidator,
  SponsorsingPackageArray,
  sponsorsingPackageArrayValidator,
  sponsorsValidator,
  ISponsors,
  ActivityArray,
  activityArrayValidator,
  SpeakerArray,
  speakerArrayValidator,
  InfoEntryArray,
  infoEntryArrayValidator,
} from "@jsdayie/domain";
import { getPage } from "@jsdayie/utils";
import { RESOURCES } from "@jsdayie/config";
import fetch from "isomorphic-fetch";

export async function getBlogData(): Promise<BlogEntryArray | Error> {
  try {
    const data = getPage<BlogEntryArray>(
      RESOURCES.blogEntries,
      blogEntryArrayValidator
    );
    return data;
  } catch (err) {
    return err as Error;
  }
}

export async function getGalleryData(): Promise<GalleryUrl | Error> {
  try {
    const data = getPage<GalleryUrl>(RESOURCES.gallery, urlArrayValidator);
    return data;
  } catch (err) {
    return err as Error;
  }
}

export async function getBlogEntryData(id: string): Promise<string | Error> {
  const url = RESOURCES.blogEntry(id);
  const response = await fetch(url);
  const markdown = await response.text();
  return markdown;
}

export async function getTicketData(): Promise<TicketArray | Error> {
  try {
    const data = getPage<TicketArray>(RESOURCES.tickets, ticketArrayValidator);
    return data;
  } catch (err) {
    return err as Error;
  }
}

export async function getSponsorsingPackagesData(): Promise<
  SponsorsingPackageArray | Error
> {
  try {
    const data = getPage<SponsorsingPackageArray>(
      RESOURCES.sponsorship,
      sponsorsingPackageArrayValidator
    );
    return data;
  } catch (err) {
    return err as Error;
  }
}

export async function getSponsorsData(): Promise<ISponsors | Error> {
  try {
    const data = getPage<ISponsors>(RESOURCES.sponsors, sponsorsValidator);
    return data;
  } catch (err) {
    return err as Error;
  }
}

export async function getScheduleData(): Promise<ActivityArray | Error> {
  try {
    const data = getPage<ActivityArray>(
      RESOURCES.schedule,
      activityArrayValidator
    );
    return data;
  } catch (err) {
    return err as Error;
  }
}

export async function getSpeakerData(): Promise<SpeakerArray | Error> {
  try {
    const data = getPage<SpeakerArray>(
      RESOURCES.speakers,
      speakerArrayValidator
    );
    return data;
  } catch (err) {
    return err as Error;
  }
}

export async function getInfoData(): Promise<InfoEntryArray | Error> {
  try {
    const data = getPage<InfoEntryArray>(
      RESOURCES.infoEntries,
      infoEntryArrayValidator
    );
    return data;
  } catch (err) {
    return err as Error;
  }
}

export async function getInfoEntryData(id: string): Promise<string | Error> {
  const url = RESOURCES.infoEntry(id);
  const response = await fetch(url);
  const markdown = await response.text();
  return markdown;
}
