import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { BaseText, Variant } from "../Outputs/BaseText";

export function SignedCheckBox({
  getCheck,
  checkBoxText,
  checked,
}: {
  getCheck: Function;
  checkBoxText: string;
  checked?: boolean;
}) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    getCheck(event.target.checked);
  };
  return (
    <FormControlLabel
      sx={{ pl: 1 }}
      control={<Checkbox {...{ checked,value:checked, onChange }} />}
      label={<BaseText {...{ variant: Variant.body1, text: checkBoxText }} />}
    />
  );
}
