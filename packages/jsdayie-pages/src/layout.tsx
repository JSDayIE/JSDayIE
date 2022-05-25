import React from "react";
import { Switch, Route } from "react-router-dom";
import { Navbar, Footer } from "../../lib/components";
import { routes } from "../../../../config/routing";

class Layout extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <Navbar
                    items={
                        routes.filter(r => r.displayInNavBar !== false)
                            .map(r => {
                                return {
                                    href: r.path,
                                    isIndex: r.isIndex,
                                    title: r.title
                                };
                            })
                    }
                />
                <Switch>
                    <React.Fragment>
                        <div className="pageBody">
                            {
                                routes.map((r, i) => <Route exact path={r.path} component={r.component} key={i} />)
                            }
                        </div>
                    </React.Fragment>
                </Switch>
                <Footer
                    name="Wolk Software Limited"
                    href="http://www.wolksoftware.com"
                    year={2018}
                />
            </React.Fragment>
        );
    }
}

export default Layout;
