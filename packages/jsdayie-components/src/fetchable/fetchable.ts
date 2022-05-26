import { Type } from "io-ts";
import { usePage } from "@jsdayie/utils";

interface FetchableProps<T, O, I> {
    url: string;
    init?: RequestInit,
    validator: Type<T, O, I>
    loading: () => JSX.Element,
    error: (error: Error) => JSX.Element,
    success: (data: T) => JSX.Element
}

export const Fetchable = <T, O, I>(props: FetchableProps<T, O, I>) => {
    const page = usePage<T, O, I>(props.url, props.validator, props.init);
    if (page === undefined) {
        return props.loading();
    } else if (page === Error) {
        return props.loading();
    } else {
        return props.success(page);
    }
}
