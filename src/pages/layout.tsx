import React from "react";
import { Switch, Route, RouteComponentProps } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Home from "./home/home";
import Talks from "./talks/talks";
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
    { title: "Talks", path: "/talks", component: Talks },
    { title: "Schedule", path: "/schedule", component: Schedule },
    { title: "Tickets", path: "/tickets", component: Tickets },
    { title: "Venue", path: "/venue", component: Venue },
    { title: "Sponsors", path: "/sponsors", component: Sponsors },
    { title: "Code of conduct", path: "/coc", component: CoC }
];

class Layout extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <Navbar
                    items={
                        routes.map(r => ({ href: r.path, title: r.title }))
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
