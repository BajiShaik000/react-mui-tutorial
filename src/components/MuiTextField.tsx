import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "Required" : "Do not share"}
        />
        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password with anyone"
          disabled
        />
        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        <TextField
          label="Password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};
