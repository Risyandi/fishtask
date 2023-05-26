import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import GrowTypography from "../element/growTypography";

function aboutHeader({ history: { goBack } }) {
    return (
        <Fragment>
            <AppBar>
                <Toolbar>
                    <GrowTypography variant="h6" color="inherit">
                        Fishtask Management
                    </GrowTypography>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Fragment>
    );
}

export default withRouter(aboutHeader);
