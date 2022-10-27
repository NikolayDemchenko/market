import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Text, Variant } from '../BaseComponents/DisplayingComponents/Text';
import NameInput from '../BaseComponents/Inputs/Name';
import Amount from '../BaseComponents/Inputs/Amount';

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
        <Grid item xs={8}>
        <NameInput {...{ label: "Название", defaultValue: "", getName:()=>{} }} />
        <NameInput {...{ label: "Программа", defaultValue: "", getName:()=>{} }} />
        <NameInput {...{ label: "Важная информация", defaultValue: "", getName:()=>{} }} />
        <NameInput {...{ label: "Ограничения", defaultValue: "", getName:()=>{} }} />
        <Amount {...{ label:"Количество участников", max:10, min:1, defaultValue: 1, getAmount: () => { } }} />


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
