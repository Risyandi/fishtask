import React, { useState } from "react";
import propTypes from "prop-types";
import { Grid, TextField } from "@material-ui/core";
import Button from "./loadingButton";
import PasswordField from "./passwordField";

export default function loginForm({
    onLogin = () => {},
    usernameProps = {},
    passwordProps = {},
    buttonProps = {},
    buttonLabel = "Login"
}) {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginClick = () => {
        setLoading(true);
        onLogin(username, password)
            .catch(err => {
                console.error(err);
            })
            .then(() => setLoading(false));
    };

    return (
        <Grid container direction="column" spacing={1}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Username"
              value={username}
              onChange={({ target: { value } }) => setUsername(value)}
              {...usernameProps}
            />
          </Grid>
          <Grid item xs={12}>
            <PasswordField
              fullWidth
              variant="outlined"
              label="Password"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
              {...passwordProps}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLoginClick}
              loading={loading}
              {...buttonProps}
            >
              {buttonLabel}
            </Button>
          </Grid>
        </Grid>
      );
}

loginForm.propTypes = {
    onLogin: propTypes.func,
    usernameProps: propTypes.object,
    passwordProps: propTypes.object,
    buttonProps: propTypes.object,
    buttonLabel: propTypes.node
};