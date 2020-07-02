import React from "react";
import Page from "../element/page";
import Header from "./header";
import Content from "./content";

export default function AboutView() {
    return <Page header={<Header />} content={<Content />} />;
}
