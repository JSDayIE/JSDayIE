import React from "react";
import "./button.css";

interface ButtonProps {
    href?: string;
    color?: "warning" | "dark";
}

export class Button extends React.Component<ButtonProps> {
    public render() {
        const color = this.props.color ? this.props.color : "warning";
        const className= `btn btn-outline-${color} btn-lg`;
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
