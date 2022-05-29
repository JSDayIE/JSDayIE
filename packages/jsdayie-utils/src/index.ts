import { Type } from "io-ts";
import ioReporter from "io-ts-reporters";
import fetch from "isomorphic-fetch";

async function getPage<T>(
  url: string,
  validator: Type<T, any, any>,
  init?: RequestInit
) {
  try {
    const response = await fetch(url, init);
    const json: T = await response.json();
    const result = validator.decode(json);
    const messages = ioReporter.report(result);
    if (messages.length > 0) {
      throw new Error(messages.join("\n"));
    } else {
      return json;
    }
  } catch (err) {
    return new Error((err as Error).message);
  }
}

export default getPage;
