import React from "react";
import "./button.css";

interface ButtonProps {}

export class Button extends React.Component<ButtonProps> {
    public render() {
        return (
            <button type="button" className="btn btn-outline-warning btn-lg">
                {this.props.children}
            </button>
        );
    }
}
