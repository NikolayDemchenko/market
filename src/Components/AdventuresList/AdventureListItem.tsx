import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import Box from "@mui/material/Box";
import { AdventureItem } from '../../types/provider';

export default function AdvListItem({ adventure, labelId }: { 
    adventure: AdventureItem, 
    labelId: string 
}) {
    const [checked, setChecked] = React.useState(['1']);

    const handleToggle = (value: string) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) newChecked.push(value);
        else newChecked.splice(currentIndex, 1);

        setChecked(newChecked);
    };

    return (
        <ListItem
            key={adventure.id}
            secondaryAction={
                <Checkbox
                    edge="end"
                    onChange={handleToggle(adventure.id)}
                    checked={checked.indexOf(adventure.id) !== -1}
                    inputProps={{ 'aria-labelledby': labelId }}
                />
            }   
            disablePadding
        >
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar
                        alt={adventure.advName}
                        src={adventure.img}
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
                  {adventure.advName}             
                </Box>
            </ListItemButton>
        </ListItem>
    )
}