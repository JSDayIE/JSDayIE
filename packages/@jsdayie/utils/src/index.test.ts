import { getPage } from ".";
import { IActivity, activityValidator } from "@jsdayie/domain";
import fetch from "isomorphic-fetch";

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

test("getPage handle valid json", async () => {
    const mockedFetch = fetch as jest.MockedFn<() => Promise<Partial<Response>>>;
    mockedFetch.mockReturnValue(
        Promise.resolve({
            status: 200,
            json: async () => Promise.resolve(validActivity),
        })
    );
    const mockValidator: any = {
        decode: () => activityValidator.decode(validActivity)
    };
    const result = await getPage('/somepath', mockValidator, {});
    expect(result).toEqual(validActivity);
    expect(result).not.toBeInstanceOf(Error);
});

test("getPage handles invalid json", async () => {
    const mockedFetch = fetch as jest.MockedFn<() => Promise<Partial<Response>>>;
    mockedFetch.mockReturnValue(
        Promise.resolve({
            status: 200,
            json: async () => Promise.resolve(invalidActivity),
        })
    );
    const mockValidator: any = {
        decode: () => activityValidator.decode(invalidActivity)
    };
    const result = await getPage('/somepath', mockValidator, {});
    expect(result).not.toEqual(validActivity);
    expect(result).toBeInstanceOf(Error);
});


test("getPage handles errors", async () => {
    const mockedFetch = fetch as jest.MockedFn<() => Promise<Partial<Response>>>;
    mockedFetch.mockReturnValue(
        Promise.resolve({
            status: 500,
            json: async () => Promise.resolve(validActivity),
        })
    );
    const mockValidator: any = {
        decode: () => activityValidator.decode(validActivity)
    };
    const result = await getPage('/somepath', mockValidator, {});
    expect(result).not.toEqual(validActivity);
    expect(result).toBeInstanceOf(Error);
});

