import { blogEntryArrayValidator, BlogEntryArray } from "@jsdayie/domain";
import { getPage }  from "@jsdayie/utils";
import { RESOURCES }  from "@jsdayie/config";

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
