import React from "react";
import { Route, Switch } from "react-router-dom";
import View from "./view";

export default function dashboardRouter() {
    return (
        <Switch>
            <Route path="/dashboard" component={View} />
        </Switch>
    );
}
