import * as React from "react";
import TextField from "@mui/material/TextField";

export default function MultilineText({
  label,
  defaultValue,
  getText,
  placeholder,
}: {
  label: string;
  defaultValue?: string;
  getText: Function;
  placeholder?: string;
}) {
  const onChange = (event: { target: { value: string } }) => {
    getText(event.target.value);
  };
  return (
    <TextField
      onChange={onChange}
      label={label}     
      defaultValue={defaultValue}
      fullWidth
      multiline
      placeholder={placeholder}
    />
  );
}
