import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Text, Variant } from '../../BaseComponents/DisplayingComponents/Text';
import RowText from '../../BaseComponents/Inputs/RowText';
import Amount from '../../BaseComponents/Inputs/Amount';
import SignedCheckBox from '../../BaseComponents/Inputs/SignedCheckBox';
import Adventure from './Components/Adventure';
import AdventureLot from './Components/Lots/LotList';
import LotOption from './Components/Options/OptionList';
import VideoListView from './Components/VideoListView';
import ImageListView from './Components/ImageListView';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AdventureEditMenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <Grid container spacing={2}> */}
       <Adventure></Adventure> 
       <ImageListView></ImageListView> 
       <VideoListView></VideoListView> 
        <AdventureLot></AdventureLot>
        <LotOption ></LotOption>
      {/* </Grid> */}
    </Box>
  );
}
