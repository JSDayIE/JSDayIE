import { IActivity, ActivityArray, activityArrayValidator, activityValidator } from "./index";
import { Either, Right } from "fp-ts/lib/Either";
import { Errors, Validation } from "io-ts";
import ioReporter from "io-ts-reporters";

const validActivity: IActivity = {
    startTime: JSON.stringify(new Date()),
    duration: '25',
    title: 'Some activity',
    speaker: 'Mr Test'
};

const invalidActivity = {
    startTime: JSON.stringify(new Date()),
    duration: '25',
    title: null,
    speaker: 'Mr Test'
};

function throwIfInvalid<T>(ioResult: Validation<T>) {
    const errors = ioReporter.report(ioResult);
    if (errors.length > 0) {
        const error = errors.join("\n");
        throw new Error(error);
    }
}

test("should be able to validate Activity", async () => {
    const validResult = activityValidator.decode(validActivity);
    const invalidResult = activityValidator.decode(invalidActivity);
    expect(() => throwIfInvalid(validResult)).not.toThrow();
    expect(() => throwIfInvalid(invalidResult)).toThrow('Expecting string at title but instead got: null.');
});

test("should be able to validate Array<Activity>", async () => {
    const validResult = activityArrayValidator.decode([validActivity]);
    const invalidResult = activityArrayValidator.decode([validActivity, invalidActivity]);
    expect(() => throwIfInvalid(validResult)).not.toThrow();
    expect(() => throwIfInvalid(invalidResult)).toThrow('Expecting string at 1.title but instead got: null.');
});
