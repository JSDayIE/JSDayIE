import React from "react";

interface ContainerProps {
    children: React.ReactNode;
}
  
export const Container: React.FC<ContainerProps> = props => {
    return (
        <div className="container content">
            {props.children}
        </div>
    );
}
