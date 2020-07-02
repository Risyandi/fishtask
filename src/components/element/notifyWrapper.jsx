import React, { createRef } from "react";
import { SnackbarProvider } from "notistack";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const notistackRef = createRef();

export default function({ children }) {
  const handleDismiss = key => () => notistackRef.current.closeSnackbar(key);

  return (
    <SnackbarProvider
      ref={notistackRef}
      maxSnack={2}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      autoHideDuration={1000}
      action={key => (
        <IconButton
          color="inherit"
          title="Dismiss"
          onClick={handleDismiss(key)}
        >
          <CloseIcon />
        </IconButton>
      )}
    >
      {children}
    </SnackbarProvider>
  );
}