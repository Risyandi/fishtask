import React, { useState } from "react";
import Page from "../element/page";
import Header from "./header";
import Content from "./content";
import Drawer from "./drawer";

export default function DashboardView() {
    const [open, setOpen] = useState(false);

    return (
        <Page
            header={<Header onOpen={() => setOpen(true)} />}
            content={<Content />}
            drawer={
                <Drawer
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                />
            }
        />
    );
}
