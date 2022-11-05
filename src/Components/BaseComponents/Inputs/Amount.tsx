import * as React from "react";
import TextField from "@mui/material/TextField";

export default function Amount({label,
  min,
  max,
  defaultValue,
  getAmount,
}: {
  label:string;
  max?: number;
  min?: number;
  defaultValue?: number;
  getAmount: Function;
}) {

  const onChange = (event: { target: { value: any; }; }) => {
    getAmount(event.target.value);
  };
  return (   
      <TextField
      fullWidth 
      // color="warning"
        onChange={onChange}
        id="outlined-number"
        label={label}
        type="number"
        InputProps={{
          inputProps: {
            max,
            min,
            defaultValue:defaultValue||"",
          },
        }}
        // helperText="Укажите количество билетов"
      />
  
  );
}
