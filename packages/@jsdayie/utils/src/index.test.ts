import { IActivity, activityValidator } from "@jsdayie/domain";
import fetch from "isomorphic-fetch";
import { getData } from ".";

jest.mock("isomorphic-fetch", () => jest.fn());

const validActivity: IActivity = {
  startTime: JSON.stringify(new Date()),
  duration: "25",
  title: "Some activity",
  speaker: "Mr Test",
};

const invalidActivity = {
  startTime: JSON.stringify(new Date()),
  duration: "25",
  title: null,
  speaker: "Mr Test",
};

test("getData handle valid json", async () => {
  const mockedFetch = fetch as jest.MockedFn<() => Promise<Partial<Response>>>;
  mockedFetch.mockReturnValue(
    Promise.resolve({
      status: 200,
      json: async () => Promise.resolve(validActivity),
    })
  );
  const mockValidator: any = {
    decode: () => activityValidator.decode(validActivity),
  };
  const result = await getData("/somepath", mockValidator);
  expect(result).toEqual(validActivity);
  expect(result).not.toBeInstanceOf(Error);
});

test("getData handles invalid json", async () => {
  const mockedFetch = fetch as jest.MockedFn<() => Promise<Partial<Response>>>;
  mockedFetch.mockReturnValue(
    Promise.resolve({
      status: 200,
      json: async () => Promise.resolve(invalidActivity),
    })
  );
  const mockValidator: any = {
    decode: () => activityValidator.decode(invalidActivity),
  };
  const result = await getData("/somepath", mockValidator);
  expect(result).not.toEqual(validActivity);
  expect(result).toBeInstanceOf(Error);
});

test("getData handles errors", async () => {
  const mockedFetch = fetch as jest.MockedFn<() => Promise<Partial<Response>>>;
  mockedFetch.mockReturnValue(
    Promise.resolve({
      status: 500,
      json: async () => Promise.resolve(validActivity),
    })
  );
  const mockValidator: any = {
    decode: () => activityValidator.decode(validActivity),
  };
  const result = await getData("/somepath", mockValidator);
  expect(result).not.toEqual(validActivity);
  expect(result).toBeInstanceOf(Error);
});
