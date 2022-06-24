import { Type } from "io-ts";
import ioReporter from "io-ts-reporters";
import { promisify } from "util";
import { readFile } from "fs";
import { join } from "path";

export async function getData<T>(url: string, validator: Type<T, any, any>) {
  try {
    const filePath = join(process.cwd(), url);
    const jsonData = await promisify(readFile)(filePath);
    const objectData: T = JSON.parse(jsonData.toString("utf8"));
    const result = validator.decode(objectData);
    const messages = ioReporter.report(result);
    if (messages.length > 0) {
      throw new Error(messages.join("\n"));
    } else {
      return objectData;
    }
  } catch (err) {
    return new Error((err as Error).message);
  }
}

export async function getText(url: string) {
  try {
    const filePath = join(process.cwd(), url);
    const buffer = await promisify(readFile)(filePath);
    return buffer.toString("utf8");
  } catch (err) {
    return new Error((err as Error).message);
  }
}
