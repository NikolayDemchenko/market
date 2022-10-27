import TextField from "@mui/material/TextField";
export default function NameInput({label,
  defaultValue,
  getName,
}: {label:string,
  defaultValue: string;
  getName: Function;
}) {
  const onChange = (event: { target: { value: any } }) => {
    getName(event.target.value);
  };
  return (  
      <TextField
        onChange={onChange}
        id="outlined-required"
        label={label}
        // helperText="Введите имя"
        defaultValue={defaultValue}
      />
  );
}
