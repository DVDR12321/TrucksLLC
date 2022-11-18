import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DefaultButton from "./Button";

const InputFields = [
  {
    id: 1,
    string: "",
    label: "example@domain.com",
    variant: "outlined",
    required: true,
    focused: false,
    helperText: "Please, enter your email",
  },
  {
    id: 2,
    string: "",
    label: "?",
    variant: "outlined",
    required: true,
    focused: false,
    helperText: "Please, enter your quesion",
  },
];

export default function QuerryField() {
  return (
    <Box
      alignItems="center"
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        alignItems: "center",
        borderBottom: "3px solid red",
      }}
      noValidate
      autoComplete="off"
    >
      <h2>Ask us a question!</h2>
      {InputFields.map(
        ({ id, string, label, variant, required, focused, helperText }) => (
          <TextField
            id={id}
            string={string}
            label={label}
            variant={variant}
            required={required}
            focused={focused}
            helperText={helperText}
          />
        )
      )}
      <DefaultButton />
    </Box>
  );
}
