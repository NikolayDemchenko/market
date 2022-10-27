import Button from '@mui/material/Button';
import { FormControl } from '@mui/material';

export default function BasicButton({btnText, width }:
  {
    btnText: string, 
    width: string,
}) {
  return (
    <FormControl sx={{ marginRight:10, width: {width} }} >
      <Button variant="contained" size="large">{btnText}</Button>
    </FormControl>  
  );
}