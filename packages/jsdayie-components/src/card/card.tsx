import React from "react";

interface CardProps {
    children: React.ReactNode;
}
      
export const Card: React.FC<CardProps> = props => {
    return (
        <div className="card">
            {props.children}
        </div>
    );
}

interface CardBodyProps {
    children: React.ReactNode;
}
      
export const CardBody: React.FC<CardBodyProps> = props => {
    return (
        <div className="card-body">
            {props.children}
        </div>
    );
}

interface CardHeaderProps {
    children: React.ReactNode;
}
      
export const CardHeader: React.FC<CardHeaderProps> = props => {
    return (
        <div className="card-header">
            {props.children}
        </div>
    );
}


interface CardFooterProps {
    children: React.ReactNode;
}
      
export const CardFooter: React.FC<CardFooterProps> = props => {
    return (
        <div className="card-footer">
            {props.children}
        </div>
    );
}
