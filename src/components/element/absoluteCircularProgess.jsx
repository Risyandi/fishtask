import React from "react";
import {styled} from "@material-ui/core/styles";
import circularProgress from "@material-ui/core/CircularProgress";

const absoluteCircularProgress = styled(circularProgress)({
    position: "absolute"
});

export default props => <absoluteCircularProgress color="inherit" {...props}/>;