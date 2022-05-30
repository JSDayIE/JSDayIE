import React from "react";

interface SectionTitleProps {
  title: string;
  size: 1 | 2;
}

const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  const { size, title } = props;
  const className = `section_h${size}`;
  if (size === 1) {
    return <h1 className={className}>{title}</h1>;
  }
  return <h2 className={className}>{title}</h2>;
};

interface SectionProps {
  title: string;
  size: 1 | 2;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = (props) => {
  const { size, children, title } = props;
  const className = `section_${size}`;
  return (
    <div className={className}>
      <SectionTitle title={title} size={size} />
      <div>{children}</div>
    </div>
  );
};
