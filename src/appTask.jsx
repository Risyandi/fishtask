import React from "react";

// component
import ErrorWrapper from "./components/element/errrorWrapper";
import ThemeWrapper from "./components/element/themeWrapper";
import NotifyWrapper from "./components/element/notifyWrapper";

// router
import Router from "./router/index";

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