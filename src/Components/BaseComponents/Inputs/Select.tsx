import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormHelperText } from "@mui/material";

export default function SelectInput({
  getSelect,
  options,
}: {
  getSelect: Function;
  options: string[];
}) {
  const [charact, setCharact] = React.useState(options[0]);
  const handleChange = (event: SelectChangeEvent) => {
    setCharact(event.target.value);
    getSelect(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: "35ch" }}>
        <Select
          value={charact}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          {options.map((charact: string, index: number) => (
            <MenuItem key={index} value={charact}>
              {charact}
            </MenuItem>
          ))}
        </Select>
        {/* <FormHelperText sx={{ marginLeft: 2 }}>
          Выберите характеристику
        </FormHelperText> */}
      </FormControl>
    </div>
  );
}
