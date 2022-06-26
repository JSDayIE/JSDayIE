import { IActivity, activityValidator } from "@jsdayie/domain";
import { promisify } from "util";
import { getData } from ".";

jest.mock("util", () => ({
  promisify: jest.fn(),
}));

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
  const mockedPromisify = promisify as any as jest.MockedFn<any>;
  mockedPromisify.mockReturnValue(() =>
    Promise.resolve({
      toString: () => JSON.stringify(validActivity),
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
  const mockedPromisify = promisify as any as jest.MockedFn<any>;
  mockedPromisify.mockReturnValue(() =>
    Promise.resolve({
      toString: () => JSON.stringify(invalidActivity),
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
  const mockedPromisify = promisify as any as jest.MockedFn<any>;
  mockedPromisify.mockReturnValue(() =>
    Promise.resolve({
      toString: () => "*invalid*json*",
    })
  );
  const mockValidator: any = {
    decode: () => activityValidator.decode(validActivity),
  };
  const result = await getData("/somepath", mockValidator);
  expect(result).not.toEqual(validActivity);
  expect(result).toBeInstanceOf(Error);
});
