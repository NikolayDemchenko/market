import TextField from "@mui/material/TextField";
import { Text, Variant } from "../DisplayingComponents/Text";
export default function NameInput({
  label,
  defaultValue,
  getText,
}: {
  label: string;
  defaultValue: string;
  getText: Function;
}) {
  const onChange = (event: { target: { value: any } }) => {
    getText(event.target.value);
  };
  return (
    <TextField
      sx={{
        color: "red",
        "&.Mui-focused": {
          color: "red",
        },
      }}
      onChange={onChange}
      label={label}
      // label={<Text {...{ variant: Variant.h6, text: label }} />}
      defaultValue={defaultValue}
      fullWidth
    />
  );
}
