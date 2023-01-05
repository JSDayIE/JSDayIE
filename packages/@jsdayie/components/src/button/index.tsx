import React from "react";

interface ButtonProps {
  href?: string;
  color?: "warning" | "dark";
  children: React.ReactNode;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { color, href, children, disabled } = props;
  const className = `btn btn-outline-${color} btn-lg ${
    disabled ? "btn-disabled" : ""
  }`;
  if (href) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
};
