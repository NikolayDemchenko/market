import TextField from "@mui/material/TextField";
export default function NameInput({label,
  defaultValue,
  getText,
}: {label:string,
  defaultValue: string;
  getText: Function;
}) {
  const onChange = (event: { target: { value: any } }) => {
    getText(event.target.value);
  };
  return (  
      <TextField
        onChange={onChange}   
        label={label}    
        defaultValue={defaultValue}
      />
  );
}
