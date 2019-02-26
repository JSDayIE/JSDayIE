import React from "react";
import { Link } from "react-router-dom";

interface NavBarItem {
    isIndex?: boolean;
    title: string;
    href: string;
}

interface NavbarProps {
    items: NavBarItem[];
}

export class Navbar extends React.Component<NavbarProps> {

    public render() {
        const indexItems = this.props.items.filter(i => i.isIndex === true);
        if (indexItems.length > 1) {
            throw new Error("Only one of the items can be the index route!");
        }
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-warning">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {
                        (indexItems.length === 1) ?
                            (
                                <Link className="navbar-brand" to={indexItems[0].href} >
                                    {indexItems[0].title}
                                </Link>
                            ) :
                            null
                    }
                    <div className="collapse navbar-collapse">
                        {this._renderItems(this.props.items)}
                        <form className="form-inline my-2 my-lg-0 hide">
                            <button className="btn btn-outline-light">
                                <i className="fas fa-shopping-cart"></i> GET TICKETS
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }

    private _renderItems(items: NavBarItem[]) {
        return (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                {
                    items.filter(i => i.isIndex !== true).map((item, key) => {
                        return (
                            <li className="nav-item" key={key}>
                                <Link className="nav-link" to={item.href} >
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }

}
