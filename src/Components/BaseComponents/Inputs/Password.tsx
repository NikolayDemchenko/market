import * as React from "react";
import TextField from "@mui/material/TextField";

export default function PasswordInput({label,getPassworg}:{label:string,getPassworg:Function}) {
  const onChange = (event: { target: { value: string; }; }) => {
    getPassworg(event.target.value);
  };
  return (
      <div>
        <TextField   
          label={label}
          type="password"
          autoComplete="current-password"
          // helperText="Введите пароль"
          onChange={onChange}
        />
      </div>  
  );
}

