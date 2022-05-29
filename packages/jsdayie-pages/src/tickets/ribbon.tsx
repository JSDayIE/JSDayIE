import React from "react";

interface RibbonProps {
  title: string;
}

export const Ribbon: React.FC<RibbonProps> = (props) => {
  const { title } = props;
  return (
    <div className="ribbon ribbon-top-right">
      <span>{title}</span>
    </div>
  );
};
