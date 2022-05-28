import React from "react";

interface ButtonProps {
    href?: string;
    color?: "warning" | "dark";
    children: React.ReactNode;
}
      
export const Button: React.FC<ButtonProps> = props => {
    const color = props.color ? props.color : "warning";
    const className= `btn btn-outline-${color} btn-lg`;
    if (props.href) {
        return (
            <a href={props.href} className={className} target="_blank">
                {props.children}
            </a>
        );
    } else {
        return (
            <button type="button" className={className}>
                {props.children}
            </button>
        );
    }
}
