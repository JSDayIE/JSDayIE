import React from "react";

interface RibbonProps {
  title: string;
}

export function Ribbon(props: RibbonProps) {
  return (
    <div className="ribbon ribbon-top-right">
      <span>{props.title}</span>
    </div>
  );
}
