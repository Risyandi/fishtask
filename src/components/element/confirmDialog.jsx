import React from "react";
import propTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText
} from "@material-ui/core";

export default function confirmDialog({
  // Content of `DialogTitle`
  title = "",
  // If array each element is the content of a different `DialogContentText`
  content = "",
  // Content of confirm button
  confirm = "",
  // Content of cancel button
  cancel = "",
  // Confirm callback
  onConfirm = () => {},
  // Cancel callback
  onCancel = () => {},
  // Buttons props
  confirmButtonProps = {},
  cancelButtonProps = {},
  // Other props are passed to `Dialog`
  ...other
}) {
  return (
    <Dialog {...other}>
      {!!title && <DialogTitle>{title}</DialogTitle>}
      {!!content && (
        <DialogContent>
          {typeof content === "object" && content.map ? (
            content.map((item, i) => (
              <DialogContentText key={i}>{item}</DialogContentText>
            ))
          ) : (
            <DialogContentText>{content}</DialogContentText>
          )}
        </DialogContent>
      )}
      {(!!confirm || !!cancel) && (
        <DialogActions>
          {!!confirm && (
            <Button
              color="primary"
              variant="contained"
              title="Confirm"
              onClick={onConfirm}
              {...confirmButtonProps}
            >
              {confirm}
            </Button>
          )}
          {!!cancel && (
            <Button
              color="secondary"
              title="Cancel"
              onClick={onCancel}
              {...cancelButtonProps}
            >
              {cancel}
            </Button>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
}

confirmDialog.propTypes = {
  title: propTypes.node,
  content: propTypes.node,
  confirm: propTypes.node,
  cancel: propTypes.node,
  onConfirm: propTypes.func,
  onCancel: propTypes.func,
  confirmButtonProps: propTypes.object,
  cancelButtonProps: propTypes.object
};
