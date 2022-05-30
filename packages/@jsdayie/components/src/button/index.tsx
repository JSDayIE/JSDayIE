import React from "react";

interface ButtonProps {
  href?: string;
  color?: "warning" | "dark";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { color, href, children } = props;
  const className = `btn btn-outline-${color} btn-lg`;
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
