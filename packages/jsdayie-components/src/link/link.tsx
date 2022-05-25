import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface LinkProps {
    to: string;
}

export class Link extends React.Component<LinkProps> {
    public render() {
        return (
            <RouterLink className="btn btn-outline-warning btn-lg" to={this.props.to}>
                {this.props.children}
            </RouterLink>
        );
    }
}
