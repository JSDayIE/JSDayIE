import * as io from "io-ts";
import React from "react";
import { Either, Left } from "fp-ts/lib/Either";
import { fetchJson } from "../../http/client";
import { Fetchable } from "./fetchable";

interface RemoteProps<T, O, I> {
    url: string;
    init?: RequestInit,
    validator: io.Type<T, O, I>
    loading: () => JSX.Element,
    error: (error: Error) => JSX.Element,
    success: (data: T) => JSX.Element
}

interface RemoteState<T> {
    data: Either<Error | null, T>;
}

export class Remote<T, O, I> extends React.Component<RemoteProps<T, O, I>, RemoteState<T>> {

    public constructor(props: RemoteProps<T, O, I>) {
        super(props);
        this.state = {
            data: new Left<null, T>(null)
        }
    }

    public componentDidMount() {
        (async () => {
            const result = await fetchJson(
                this.props.url,
                this.props.validator,
                this.props.init
            );
            this.setState({
                data: result
            });
        })();
    }

    public render() {
        return (
            <Fetchable<T>
                loading={this.props.loading}
                error={this.props.error}
                data={this.state.data}
                success={this.props.success}
            />
        );
    }

}
