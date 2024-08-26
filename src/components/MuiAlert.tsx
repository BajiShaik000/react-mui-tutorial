import React from "react";
import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import { Check } from "@mui/icons-material";

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This is Error alert</Alert>
      <Alert severity="warning">This is Warning alert</Alert>
      <Alert severity="info">This is Info alert</Alert>
      <Alert severity="success">This is Success alert</Alert>

      <Alert variant="outlined" severity="error">
        This is Error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is Warning alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is Info alert
      </Alert>
      <Alert variant="outlined" severity="success">
        This is Success alert
      </Alert>

      <Alert
        variant="filled"
        severity="error"
        onClose={() => alert("Close Alert")}
      >
        <AlertTitle>Error</AlertTitle>
        This is Error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is Warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is Info alert
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<Check />}
        action={
          <Button color="inherit" size="small">
            Undo
          </Button>
        }
      >
        <AlertTitle>Success</AlertTitle>
        This is Success alert
      </Alert>
    </Stack>
  );
};
