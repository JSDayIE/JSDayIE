import React from "react";

interface SectionTitleProps {
    title: string;
    size: 1 | 2;
}

const SectionTitle: React.FC<SectionTitleProps> = props => {
    const className = `section_h${props.size}`;
    if (props.size === 1) {
        return <h1 className={className}>{props.title}</h1>;
    } else {
        return <h2 className={className}>{props.title}</h2>;
    }
}

interface SectionProps {
    title: string;
    size: 1 | 2;
    children: React.ReactNode;
}
  
export const Section: React.FC<SectionProps> = props => {
    const className = `section_${props.size}`;
    return (
        <div className={className}>
            <SectionTitle {...props} />
            <div>
                {props.children}
            </div>
        </div>
    );
}
