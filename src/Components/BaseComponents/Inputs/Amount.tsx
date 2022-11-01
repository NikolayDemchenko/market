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
      // sx={{minWidth:"100%"}}
        onChange={onChange}
        id="outlined-number"
        label={label}
        type="number"
        InputProps={{
          inputProps: {
            max,
            min,
            defaultValue,
          },
        }}
        // helperText="Укажите количество билетов"
      />
  
  );
}
