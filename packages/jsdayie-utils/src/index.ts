import { Either, Left, Right } from "fp-ts/lib/Either";
import { Type, Errors} from "io-ts";
import { reporter } from "io-ts-reporters";
import { useState } from "react";
import fetch from "isomorphic-fetch";

export default function throwIfNever(x: never) {
  if (x !== undefined) {
    throw new Error("This should never happen!");
  }
}

async function getResource<T, O, I>(url: string, validator: Type<T, O, I>, init?: RequestInit) {
      try {
        const response = await fetch(url, init);
        const json: I = await response.json();
        const result = validator.decode(json);
        return result.fold<Either<Error, T>>(
            (errors: Errors) => {
                const messages = reporter(result);
                return new Left<Error, T>(new Error(messages.join("\n")));
            },
            (value: T) => {
                return new Right<Error, T>(value);
            }
        );
    } catch (err) {
        return Promise.resolve(new Left<Error, T>(err as Error));
    }
}

export function usePage<T, O, I>(url: string, validator: Type<T, O, I>, init?: RequestInit) {
  const [resource, setResource] = useState<Error | T>();
  (async () => {
    const value = (await getResource(url, validator, init)).value;
    setResource(value); 
  })();
  return resource;
}
