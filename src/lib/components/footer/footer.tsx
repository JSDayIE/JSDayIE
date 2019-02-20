import React from "react";

interface FooterProps {
    year: number;
    name: string;
    href: string;
}

export class Footer extends React.Component<FooterProps> {
    public render() {
        const currentYear = new Date().getFullYear();
        return (
            <div className="footer">
                <p>
                    Copyright &copy; {this.props.year} - {currentYear}&nbsp;
                    <a href={this.props.href}>{this.props.name}</a>
                </p>
            </div>
        );
    }
}
