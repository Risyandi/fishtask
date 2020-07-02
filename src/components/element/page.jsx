import React, { Fragment } from "react";
import propTypes from "prop-types";
import { Print, NoPrint } from "./print";
import TopFab from "./topFab";

export default function page({
    content = null,
    drawer = null,
    header = null,
    print = null,
    topFab = true
}) {
    return (
        <Fragment>
            <NoPrint>
                {topFab && <TopFab />}
                {!!drawer && drawer}
                {!!header && header}
                {!!content && content}
            </NoPrint>
            <Print>{!!print && print}</Print>
        </Fragment>
    );
}

page.propTypes = {
    topFab: propTypes.bool,
    content: propTypes.element,
    drawer: propTypes.element,
    header: propTypes.element,
    print: propTypes.element
};
