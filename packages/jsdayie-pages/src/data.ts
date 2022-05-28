import { blogEntryArrayValidator, BlogEntryArray } from "@jsdayie/domain";
import { getPage }  from "@jsdayie/utils";
import { RESOURCES }  from "@jsdayie/config";
import fetch from "isomorphic-fetch";

export async function getBlogData(): Promise<BlogEntryArray | Error> {
  try {
    const data = getPage<BlogEntryArray>(RESOURCES.blogEntries, blogEntryArrayValidator);
    return data;
  } catch(err) {
    return err as Error;
  }
}

export async function getGalleryData(): Promise<BlogEntryArray | Error> {
  try {
    const data = getPage<BlogEntryArray>(RESOURCES.blogEntries, blogEntryArrayValidator);
    return data;
  } catch(err) {
    return err as Error;
  }
}

export async function getBlogPostDate(id: string): Promise<string | Error> {
  const url =  RESOURCES.blogEntry(id);
  const response = await fetch(url);
  const markdown = await response.text();
  return markdown;
}
