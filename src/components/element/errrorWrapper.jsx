import React, { Component, Fragment} from "react";
import { AppBar, Container, IconButton, Toolbar, Typography } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import GrowTypography from "./growTypography";

export default class errorWrapper extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidCatch(error, info) {
        console.log("console error", error, info, this.props);
    }

    static getDerivedStateFromError(error){
        return { error };
    }

    render() {
        const { error } = this.state;
        if (error) {
            return(
                <Fragment>
                    <AppBar>
                    <Toolbar>
                        <GrowTypography variant="h6">An error occurred</GrowTypography>
                        <IconButton
                            color="inherit"
                            title="Refresh"
                            onClick={window.location.reload}
                        >
                            <RefreshIcon />
                        </IconButton>
                        </Toolbar>
                        <Container>
                        <Typography variant="h3" gutterBottom>
                            {error.message}
                            </Typography>
                            <Typography component="ul">
                            {error.stack.split("\n").map((line, i) => (
                                <Typography key={i} component="li" variant="body2" gutterBottom>
                                {line}
                                </Typography>
                            ))}
                            </Typography>
                        </Container>
                    </AppBar>
                </Fragment>
            )
        }
        return this.props.children;
    }
}