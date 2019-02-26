import React from "react";
import "./button.css";

interface ButtonProps {
    href?: string;
}

export class Button extends React.Component<ButtonProps> {
    public render() {
        const className= "btn btn-outline-warning btn-lg";
        if (this.props.href) {
            return (
                <a href={this.props.href} className={className} target="_blank">
                    {this.props.children}
                </a>
            );
        } else {
            return (
                <button type="button" className={className}>
                    {this.props.children}
                </button>
            );
        }
    }
}
