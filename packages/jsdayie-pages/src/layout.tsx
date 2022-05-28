import React from "react";
import { Navbar, Footer } from "@jsdayie/components";
import { routes } from "@jsdayie/config";

class Layout extends React.Component {
    public render() {
        return (
            <>
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
                <React.Fragment>
                    <div className="pageBody">
                        //
                    </div>
                </React.Fragment>
                <Footer
                    name="Wolk Software Limited"
                    href="http://www.wolksoftware.com"
                    year={2018}
                />
            </>
        );
    }
}

export default Layout;
