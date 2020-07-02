import React, { Fragment } from "react";
import propTypes from "prop-types";
import {
  AppBar,
  CircularProgress,
  IconButton,
  Toolbar
} from "@material-ui/core";
import GrowTypography from "./growTypography";

export default function loadingHeader({ title = "Loading" }) {
    return (
        <Fragment>
            <AppBar>
                <Toolbar>
                    <IconButton color="inherit">
                        <CircularProgress color="inherit" size={20} />
                    </IconButton>
                    <GrowTypography variant="h6" color="inherit">
                        {title}
                    </GrowTypography>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Fragment>
    );
}

loadingHeader.propTypes = {
    title: propTypes.string
};