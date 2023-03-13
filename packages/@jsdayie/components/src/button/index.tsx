import React from "react";

interface ButtonProps {
  href?: string;
  color?: "warning" | "dark";
  children: React.ReactNode;
  disabled?: boolean;
  title?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { color, href, children, disabled, title } = props;
  const className = `btn btn-outline-${color} btn-lg ${
    disabled ? "btn-disabled" : ""
  }`;
  if (href) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noreferrer"
        title={title}
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={className} title={title}>
      {children}
    </button>
  );
};
