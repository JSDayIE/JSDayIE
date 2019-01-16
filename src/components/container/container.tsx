import React from "react";

class Container extends React.Component {
    public render() {
        return (
            <div className="container content">
                {this.props.children}
            </div>
        );
    }
}

export default Container;
