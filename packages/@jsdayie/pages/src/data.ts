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
  IAwards,
  ActivityArray,
  activityArrayValidator,
  SpeakerArray,
  speakerArrayValidator,
  InfoEntryArray,
  infoEntryArrayValidator,
  awardsValidator,
} from "@jsdayie/domain";
import { getData, getText } from "@jsdayie/utils";
import { RESOURCES } from "@jsdayie/config";

const BASE_PATH = "/public";

export async function getBlogData(): Promise<BlogEntryArray | Error> {
  try {
    const data = getData<BlogEntryArray>(
      BASE_PATH + RESOURCES.blogEntries,
      blogEntryArrayValidator
    );
    return data;
  } catch (err) {
    return err as Error;
  }
}

export async function getGalleryData(): Promise<GalleryUrl | Error> {
  try {
    const data = getData<GalleryUrl>(
      BASE_PATH + RESOURCES.gallery,
      urlArrayValidator
    );
    return data;
  } catch (err) {
    return err as Error;
  }
}

export async function getBlogEntryData(id: string): Promise<string | Error> {
  const url = BASE_PATH + RESOURCES.blogEntry(id);
  return getText(url);
}

export async function getTicketData(): Promise<TicketArray | Error> {
  try {
    const data = getData<TicketArray>(
      BASE_PATH + RESOURCES.tickets,
      ticketArrayValidator
    );
    return data;
  } catch (err) {
    return err as Error;
  }
}

export async function getSponsorsingPackagesData(): Promise<
  SponsorsingPackageArray | Error
> {
  try {
    const data = getData<SponsorsingPackageArray>(
      BASE_PATH + RESOURCES.sponsorship,
      sponsorsingPackageArrayValidator
    );
    return data;
  } catch (err) {
    return err as Error;
  }
}

export async function getSponsorsData(): Promise<ISponsors | Error> {
  try {
    const data = getData<ISponsors>(
      BASE_PATH + RESOURCES.sponsors,
      sponsorsValidator
    );
    return data;
  } catch (err) {
    return err as Error;
  }
}

export async function getAwardsData(): Promise<IAwards | Error> {
  try {
    const data = getData<IAwards>(
      BASE_PATH + RESOURCES.awards,
      awardsValidator
    );
    return data;
  } catch (err) {
    return err as Error;
  }
}

export async function getScheduleData(): Promise<ActivityArray | Error> {
  try {
    const data = getData<ActivityArray>(
      BASE_PATH + RESOURCES.schedule,
      activityArrayValidator
    );
    return data;
  } catch (err) {
    return err as Error;
  }
}

export async function getSpeakerData(): Promise<SpeakerArray | Error> {
  try {
    const data = getData<SpeakerArray>(
      BASE_PATH + RESOURCES.speakers,
      speakerArrayValidator
    );
    return data;
  } catch (err) {
    return err as Error;
  }
}

export async function getInfoData(): Promise<InfoEntryArray | Error> {
  try {
    const data = getData<InfoEntryArray>(
      BASE_PATH + RESOURCES.infoEntries,
      infoEntryArrayValidator
    );
    return data;
  } catch (err) {
    return err as Error;
  }
}

export async function getInfoEntryData(id: string): Promise<string | Error> {
  const url = BASE_PATH + RESOURCES.infoEntry(id);
  return getText(url);
}
