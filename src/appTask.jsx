import React from "react";
import ErrorWrapper from "./components/element/errrorWrapper";
import ThemeWrapper from "./components/element/themeWrapper";
import NotifyWrapper from "./components/element/notifyWrapper";
import Router from "./components/element/router";

export default function AppTask() {
    return (
        <ThemeWrapper>
            <ErrorWrapper>
                <NotifyWrapper>
                    <Router />
                </NotifyWrapper>
            </ErrorWrapper>
        </ThemeWrapper>
    );
}