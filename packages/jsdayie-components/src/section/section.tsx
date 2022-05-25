import React from "react";
import "./section.css";

interface SectionProps {
    title: string;
    size: 1 | 2;
}

export class Section extends React.Component<SectionProps> {
    public render() {
        const className = `section_${this.props.size}`;
        return (
            <div className={className}>
                {this._renderTitle(this.props)}
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
    private _renderTitle(props: SectionProps) {
        const className = `section_h${this.props.size}`;
        if (props.size === 1) {
            return <h1 className={className}>{this.props.title}</h1>;
        } else {
            return <h2 className={className}>{this.props.title}</h2>;
        }
    }
}
