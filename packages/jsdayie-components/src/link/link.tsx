import React from "react";
import Link from 'next/link';

interface ButtonLinkProps {
    to: string;
    children: React.ReactNode;
}
  
export const ButtonLink: React.FC<ButtonLinkProps> = props => {
    return (
        <Link href={props.to}>
            <a className="btn btn-outline-warning btn-lg">{props.children}</a>
        </Link>
    );
}
