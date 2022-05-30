import React from "react";
import Link from "next/link";

interface ButtonLinkProps {
  to: string;
  children: React.ReactNode;
}

export const ButtonLink: React.FC<ButtonLinkProps> = (props) => {
  const { children, to } = props;
  return (
    <Link href={to}>
      <a className="btn btn-outline-warning btn-lg">{children}</a>
    </Link>
  );
};
