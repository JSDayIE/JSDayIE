import React from "react";
import "./section.css";

interface SectionProps {
    title: string;
}

export class Section extends React.Component<SectionProps> {
    public render() {
        return (
            <div className="section">
                <h1 className="section_h1">{this.props.title}</h1>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
