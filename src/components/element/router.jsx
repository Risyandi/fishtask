import React from "react";
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import About from "../about/router";
import Dashboard from "../dashboard/router";

const ROUTES = [
    { path: "/about", component: About },
    { path: "/dashboard", component: Dashboard, exact: true }
];

export default function (props) {
    return (
        <Router>
            <Switch>
                {ROUTES.map((route, i) => (
                    <Route key={i} {...route} />
                ))}
                <Redirect to="/dashboard" />
            </Switch>
        </Router>
    );
}
