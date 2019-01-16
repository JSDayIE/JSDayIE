import React from "react";
import "./button.css";

interface ButtonProps {}

class Button extends React.Component<ButtonProps> {
    public render() {
        return (
            <button type="button" className="btn btn-outline-warning btn-lg">
                {this.props.children}
            </button>
        );
    }
}

export default Button;
