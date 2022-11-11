import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import Box from "@mui/material/Box";
import { TAdventure } from '../../../Model/types';
import { styled } from '@mui/material';
import Paper from '@mui/material/Paper';

export default function AdvListItem({ adventure, labelId, onClickItem, checkAdventure }: { 
    adventure: TAdventure, 
    labelId: string,
    onClickItem: Function,
    checkAdventure: Function,
}) {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body1,
        padding: theme.spacing(0.5),
        textAlign: "center",
        color: theme.palette.text.primary,
      }));

    return (
        <Item  elevation={1}>
        <ListItem
            key={adventure.id}
            secondaryAction={    
                <Checkbox
                    edge="end"
                    onChange={()=>checkAdventure(adventure)}
                    checked={adventure.checked}
                    inputProps={{ 'aria-labelledby': labelId }}
                />  
            }   
            disablePadding
        >
            <ListItemButton onClick={()=> onClickItem(adventure)}>
                <ListItemAvatar>
                    <Avatar
                        alt={adventure.name}
                        src={adventure.images&&adventure.images[0].img}
                        variant="square"
                        sx={{ width: 100, height:"100%" }}
                    />
                </ListItemAvatar> 
                <Box
                    component="form"
                    sx={{ paddingLeft: 4 }}
                    noValidate
                    autoComplete="off"
                >
                  {adventure.name}             
                </Box>
            </ListItemButton>
        </ListItem>
        </Item>
    )
}