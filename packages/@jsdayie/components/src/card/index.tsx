import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = (props) => {
  const { children } = props;
  return <div className="card">{children}</div>;
};

interface CardBodyProps {
  children: React.ReactNode;
}

export const CardBody: React.FC<CardBodyProps> = (props) => {
  const { children } = props;
  return <div className="card-body">{children}</div>;
};

interface CardHeaderProps {
  children: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = (props) => {
  const { children } = props;
  return <div className="card-header">{children}</div>;
};

interface CardFooterProps {
  children: React.ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = (props) => {
  const { children } = props;
  return <div className="card-footer">{children}</div>;
};
