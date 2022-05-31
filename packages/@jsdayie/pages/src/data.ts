import {
  blogEntryArrayValidator,
  BlogEntryArray,
  urlArrayValidator,
  GalleryUrl,
  TicketArray,
  ticketArrayValidator,
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

export async function getBlogPostData(id: string): Promise<string | Error> {
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

// TODO
export async function getSponsorsingPackagesData(): Promise<TicketArray | Error> {
  try {
    const data = getPage<TicketArray>(RESOURCES.tickets, ticketArrayValidator);
    return data;
  } catch (err) {
    return err as Error;
  }
}

// TODO
export async function getSponsorsData(): Promise<TicketArray | Error> {
  try {
    const data = getPage<TicketArray>(RESOURCES.tickets, ticketArrayValidator);
    return data;
  } catch (err) {
    return err as Error;
  }
}