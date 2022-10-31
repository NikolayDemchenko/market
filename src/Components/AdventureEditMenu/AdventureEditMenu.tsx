import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Text, Variant } from '../BaseComponents/DisplayingComponents/Text';
import RowText from '../BaseComponents/Inputs/RowText';
import Amount from '../BaseComponents/Inputs/Amount';
import SignedCheckBox from '../BaseComponents/Inputs/SignedCheckBox';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <Text {...{ variant: Variant.h5, text: "Редактирование приключения" }} />
        </Grid>        
        <Grid container justifyContent="center" item xs={8}>
      <Box sx={{ '& .MuiTextField-root ': { my: 0.6 } ,'& .MuiButton-root': { my: 0.4 } }}>
        <RowText {...{ label: "Название", defaultValue: "", getText:()=>{} }} />
        <RowText {...{ label: "Программа", defaultValue: "", getText:()=>{} }} />
        <RowText {...{ label: "Важная информация", defaultValue: "", getText:()=>{} }} />
        <RowText {...{ label: "Ограничения", defaultValue: "", getText:()=>{} }} />
        <Amount {...{ label:"Количество участников", max:10, min:1, defaultValue: 1, getAmount: () => { } }} />      
        <Amount {...{ label:"Продолжительность", max:10, min:1, defaultValue: 1, getAmount: () => { } }} />    
        <SignedCheckBox
          {...{
            getCheck:()=>{},
            checked: false,
            checkBoxText: "Предварительная запись",
          }}
        />  
      </Box>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
