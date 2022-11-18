import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export  const CalendarCard=({ date, weekDay }: { date: number, weekDay: string }) =>{
  return (
    <Box sx={{ display: "flex", flexDirection: "column", pt: 2, pb: 1 }}>
        <Typography sx={{ mb: 1 }} variant="h5" component="div">
            {date}
        </Typography>
        <Typography sx={{ mb: 0.5, fontSize: 14, color: (weekDay === 'СБ' || weekDay === 'ВС') ? 'red' : 'gray' }} color="text.secondary">
            {weekDay}
        </Typography>
        <Typography sx={{ fontSize: 11 }} variant="body2">
            В продаже
            <br />
            {'10 шт.'}
        </Typography>
    </Box>
  );
}