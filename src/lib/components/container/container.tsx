import React from "react";

export class Container extends React.Component {
    public render() {
        return (
            <div className="container content">
                {this.props.children}
            </div>
        );
    }
}
