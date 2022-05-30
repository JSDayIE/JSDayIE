import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = (props) => {
  const { children } = props;
  return <div className="container content">{children}</div>;
};
