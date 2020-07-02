import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import { Button, IconButton } from "@material-ui/core";
import AbsoluteCircularProgress from "./absoluteCircularProgess";

export default function loadingButton({
children,
delay = 1000,
disabled = false,
isIcon = false,
loading = false,
...others
}) {
    // display circularProgress if innerLoading is true
    const [innerLoading, setInnerLoading] = useState(false);

    useEffect(() => {
        // delay setting innerLoading
        if (loading) {
            const to = setTimeout(setInnerLoading. delay, true);
            return () => clearTimeout(to);
        } else setInnerLoading(false);
    }, [delay, loading]);

    // use button or iconButton
    const Component = isIcon ? IconButton : Button;

    return (
        <Component color="inherit" disabled={loading || disabled} {...others}>
            {children}
            {innerLoading && <AbsoluteCircularProgress/>}
        </Component>
    );
}

loadingButton.prototype = {
    delay: propTypes.number,
    disabled: propTypes.bool,
    isIcon: propTypes.bool,
    loading: propTypes.bool
};