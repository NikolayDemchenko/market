import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { InputLabel } from "@mui/material";

export  const SelectInput=({
  getSelect,
  options,
  label,
}: {
  getSelect: Function;
  options: string[];
  label: string;
})=> {
  const [charact, setCharact] = React.useState(options[0]);
  const handleChange = (event: SelectChangeEvent) => {
    setCharact(event.target.value);
    getSelect(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        fullWidth
        value={charact}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        label={label}
      >
        {options.map((charact: string, index: number) => (
          <MenuItem key={index} value={charact}>
            {charact}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
