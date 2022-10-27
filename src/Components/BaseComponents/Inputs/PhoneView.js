import * as React from "react";
import TextField from "@mui/material/TextField";
import InputMask from "react-input-mask";

export default function PhoneView({ label, defaultValue, getPhoneNumber }) {
  
  return (
    <InputMask
      mask="+7 (999) 999-99-99"
      onChange={(el)=>getPhoneNumber(el.target.value)}
      defaultValue={defaultValue}
    >
      {() => (
        <TextField label={label}  />
      )}
    </InputMask>
  );
}
