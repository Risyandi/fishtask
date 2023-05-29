import React from "react";
import {
    Route,
    Switch,
    BrowserRouter,
} from "react-router-dom";

import Homepage from "../components/homepage/index";
import About from "../components/about/index";
import Dashboard from "../components/dashboard/index";
import Pouchy from "../components/pouchy";

const routes = [
    {
        path: "/",
        component: Homepage,
        exact: true,
        name: 'Homepage',
        typeLayout: 'full-layout'
    },
    {
        path: "/about",
        component: About,
        exact: true,
        name: 'About',
        typeLayout: 'full-layout'
    },
    {
        path: "/dashboard",
        component: Dashboard,
        exact: true,
        name: 'Dashboard',
        typeLayout: 'full-layout'
    },
    {
        path: "/pouchy",
        component: Pouchy,
        exact: true,
        name: 'App Pouchy Store',
        typeLayout: 'full-layout'
    }
];

export default function (props) {
    return (
        <BrowserRouter>
            <Switch>
                {
                    routes.map((route, index) => 
                    route.component ?
                    (
                    <Route 
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => <route.component {...props}/>} />
                    ) : null)
                }
            </Switch>
        </BrowserRouter>
    );
}
