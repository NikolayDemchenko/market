import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function TimeWithMinute({getTime,label}:{getTime:Function,label:string}) {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'));
  const onChange = (value:any) => {
    setValue(value)
    value&&getTime({hours:value.$H,minutes:value.$m});
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          ampm={false}
          openTo="hours"
          views={['hours', 'minutes']}
          inputFormat="HH:mm"
          mask="__:__"
          label={label}
          value={value}
          onChange={onChange}
          renderInput={(params) => <TextField {...params} />} 
          />    
    </LocalizationProvider>
  );
}
