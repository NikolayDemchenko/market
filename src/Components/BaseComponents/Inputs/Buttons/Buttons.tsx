import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

export type TFCButton = (props:{ onClick: () => void }) => JSX.Element;
export  const BasicButton:TFCButton=(props)=> <Button  fullWidth variant="contained" size="large" {...props} onClick={()=>props.onClick()} /> 

export  const BootstrapButton:TFCButton=(props)=><BootstrapBtn  fullWidth variant="contained" size="large" {...props} onClick={()=>props.onClick()} /> 


export  const ColorButton:TFCButton=(props)=><ColorBtn  fullWidth variant="contained" size="large" {...props} onClick={()=>props.onClick()} /> 


 const BootstrapBtn = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

 const ColorBtn = styled(Button)<ButtonProps>(({ theme }) => ({
  // color: theme.palette.getContrastText(purple[500]),
  // backgroundColor: purple[500],
  // '&:hover': {
  //   backgroundColor: purple[700],
  color: theme.palette.getContrastText("#F6B700"),
  backgroundColor: "#F6B700",
  '&:hover': {
    backgroundColor: "#F6B700",
  }, fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
}));

