import React from "react";
import { Route, Switch } from "react-router-dom";
import View from "./view";

export default function aboutRouter() {
    return (
        <Switch>
            <Route path="/about" component={View} />
        </Switch>
    );
}
