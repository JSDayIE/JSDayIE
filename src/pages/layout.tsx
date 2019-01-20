import React from "react";
import { Switch, Route, RouteComponentProps } from "react-router-dom";
import Navbar from "../lib/components/navbar/navbar";
import Footer from "../lib/components/footer/footer";
import Home from "./home/home";
import Speakers from "./speakers/speakers";
import Schedule from "./schedule/schedule";
import Tickets from "./tickets/tickets";
import Venue from "./venue/venue";
import Sponsors from "./sponsors/sponsors";
import CoC from "./coc/coc";

interface RouteConf {
    isIndex?: boolean;
    title: string;
    path: string;
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

const routes: RouteConf[] = [
    { isIndex: true, title: "JSDayIE 2019", path: "/", component: Home },
    { title: "Speakers", path: "/speakers", component: Speakers },
    { title: "Schedule", path: "/schedule", component: Schedule },
    { title: "Venue", path: "/venue", component: Venue },
    { title: "Tickets", path: "/tickets", component: Tickets },
    { title: "Sponsors", path: "/sponsors", component: Sponsors },
    { title: "Code of conduct", path: "/coc", component: CoC }
];

class Layout extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <Navbar
                    items={
                        routes.map(r => {
                            return {
                                href: r.path,
                                isIndex: r.isIndex,
                                title: r.title
                            };
                        })
                    }
                />
                <Switch>
                    {
                        routes.map((r, i) => <Route exact path={r.path} component={r.component} key={i} />)
                    }
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
