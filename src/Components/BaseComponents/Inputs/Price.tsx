import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
export default function NameInput({
  label,
  defaultValue,
  getPrice,
}: {
  label: string;
  defaultValue?: number;
  getPrice: Function;
}) {
  const onChange = (event: { target: { value: any } }) => {
    getPrice(event.target.value);
  };
  return (
    <TextField
      sx={{
        color: "red",
        "&.Mui-focused": {
          color: "red",
        },
      }}
      type="number"
      onChange={onChange}
      label={label}
      InputProps={{
        endAdornment: <InputAdornment position="end">Руб</InputAdornment>,
        inputProps: {
          min: 0,
        },
      }}
      defaultValue={defaultValue}
      fullWidth
    />
  );
}
