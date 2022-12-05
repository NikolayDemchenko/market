import * as React from "react";
import TextField from "@mui/material/TextField";
import InputMask from "react-input-mask";

export function PhoneMask({ label, defaultValue, getPhone }) {
  return (
    <InputMask
      mask="+7 (999) 999-99-99"
      onChange={(el) => getPhone(el.target.value)}
      defaultValue={defaultValue}
    >
      {() => <TextField label={label} />}
    </InputMask>
  );
}
export function DurationMask({ label, defaultValue, getData }) {
  return (
    <InputMask
      mask="12:34"
      formatChars={{
        1: "[0-9]",
        2: "[0-9]",
        3: "[0-5]",
        4: "[0-9]",
      }}
      onChange={(el) => getData(el.target.value)}
      defaultValue={defaultValue}
    >
      {() => <TextField label={label} />} 
    </InputMask>
  );
}
export function DateMask({ label, defaultValue, getData }) {


  let mask="12:34:5678";
  let formatChars = {
    1: "[0-3]",
    2: "[0-9]",
    3: "[0-1]",
    4: "[0-9]",
    5: "2",
    6: "0",
    7: "[0-9]",
    8: "[0-9]",
  }

  let beforeMaskedValueChange = (newState, oldState, userInput) => {
    let { value } = newState;
    if(value[0]==='3')
      formatChars['2'] = '[0-1]';
    else
      formatChars['2'] = '[0-9]'; 
    if(value[3]==='1')
      formatChars['4'] = '[0-2]';
    else
      formatChars['4'] = '[0-9]'; 
    return {value, selection: newState.selection};
  }

  return (
    <InputMask
      mask={mask}
      placeholder='DD-MM-YYYY'
      formatChars={formatChars}
      onChange={(el) => getData(el.target.value)}
      defaultValue={defaultValue}
      beforeMaskedValueChange={beforeMaskedValueChange}
    >
      {() => <TextField label={label} />}
    </InputMask>
  );
}
