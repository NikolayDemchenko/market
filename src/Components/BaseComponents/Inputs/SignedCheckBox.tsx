import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function SignedCheckBox({
  getCheck, 
  checkBoxText,
}: {
  getCheck: Function;
  checkBoxText: string;
}) {
  const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    getCheck(event.target.checked);
  };
  return (
    <FormControlLabel
      sx={{ marginLeft: 1, width: "40ch" }}
      control={<Checkbox {...{onChange}}/>}
      label={checkBoxText}
    />
  );
}
