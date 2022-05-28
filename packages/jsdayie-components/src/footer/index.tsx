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
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <p>
                                JSDayIE is presented by <a href="http://www.wolksoftware.com/">Wolk Software Limited</a> with ❤️ for
                                the JavaScript community. It is made possible thanks to the support of our sponsors and the collaboration
                                of many of the members of the JavaScript community in Ireland.
                            </p>
                            <p>
                                Copyright &copy; {this.props.year} - {currentYear}&nbsp;
                                <a href={this.props.href}>{this.props.name}</a>.
                            </p>
                        </div>
                        <div className="col-md-3">
                            <h1>Follow us!</h1>
                            <div className="row">
                                <div className="col-3">
                                    <a target="_blank" href="https://twitter.com/JSDayIE">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a target="_blank" href="https://www.youtube.com/channel/UCUPILOYOw8pbBWuKEaqI1EQ">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a target="_blank" href="https://www.facebook.com/Jsdayie-336263463661254">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a target="_blank" href="https://www.linkedin.com/company/jsdayie">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
