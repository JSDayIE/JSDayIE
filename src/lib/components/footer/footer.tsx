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
            <div>
                <div className="section mail-list">
                    <form
                        action="https://jsday.us18.list-manage.com/subscribe/post?u=b4348a611b9d5932915880916&amp;id=4c43f518fc"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        className="validate"
                        target="_blank"
                    >
                        <div id="mc_embed_signup_scroll">
                            <label>
                                Don"t miss any update about the conference Subscribe to our newsletter
                            </label>
                            <input
                                type="email"
                                value=""
                                name="EMAIL"
                                className="email"
                                id="mce-EMAIL"
                                placeholder="email address"
                                onChange={() => void(0)}
                            />
                            <div style={{position: "absolute", left: "-5000px" }} aria-hidden="true">
                                <input
                                    type="text"
                                    name="b_b4348a611b9d5932915880916_4c43f518fc"
                                    value=""
                                    onChange={() => void(0)}
                                />
                            </div>
                            <div className="clear">
                                <input
                                    type="submit"
                                    value="Subscribe"
                                    name="subscribe"
                                    id="mc-embedded-subscribe"
                                    className="button"
                                    onChange={() => void(0)}
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="footer">
                    <p>
                        Copyright &copy; {this.props.year} - {currentYear}&nbsp;
                        <a href={this.props.href}>{this.props.name}</a>
                    </p>
                </div>
            </div>
        );
    }
}
