import React from "react";
import "./card.css";

export class Card extends React.Component {
    public render() {
        return (
            <div className="card">
                {this.props.children}
            </div>
        );
    }
}

export class CardBody extends React.Component {
    public render() {
        return (
            <div className="card-body">
                {this.props.children}
            </div>
        );
    }
}

export class CardHeader extends React.Component {
    public render() {
        return (
            <div className="card-header">
                {this.props.children}
            </div>
        );
    }
}

export class CardFooter extends React.Component {
    public render() {
        return (
            <div className="card-footer">
                {this.props.children}
            </div>
        );
    }
}
