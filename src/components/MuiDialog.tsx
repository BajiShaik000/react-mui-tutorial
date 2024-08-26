import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

export const MuiDialog = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-content"
      >
        <DialogTitle id="dialog-title">Submit the Test ?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-content">
            Are you really want to submit the test ? You can't edit it once
            submitted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            variant="outlined"
            size="small"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            size="small"
            color="primary"
            autoFocus
            onClick={() => setOpen(false)}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
