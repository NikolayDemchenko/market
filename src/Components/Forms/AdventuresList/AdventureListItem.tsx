import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import Box from "@mui/material/Box";
import { TAdventure } from '../../../types/provider';
import { styled } from '@mui/material';
import Paper from '@mui/material/Paper';

export default function AdvListItem({ adventure, labelId, onClickItem, checkedToggle }: { 
    adventure: TAdventure, 
    labelId: string,
    onClickItem: Function,
    checkedToggle: Function,
}) {
    const [checked, setChecked] = React.useState(['1']);

    const handleToggle = (value: any) => () => {
        const currentIndex = checked.indexOf(value.id);
        const newChecked = [...checked];

        if (currentIndex === -1) newChecked.push(value.id);
        else newChecked.splice(currentIndex, 1);

        setChecked(newChecked);

        if (newChecked.length === 1) {
            checkedToggle({
                adventure: value,
                checked: false
            });
        } else {
            checkedToggle({
                adventure: value,
                checked: true
            }); 
        }
    };

    const onClickItemHandler = () => {
        onClickItem();
    }


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
                    onChange={handleToggle(adventure)}
                    checked={checked.indexOf(adventure.id) !== -1}
                    inputProps={{ 'aria-labelledby': labelId }}
                />  
            }   
            disablePadding
        >
            <ListItemButton onClick={onClickItemHandler}>
                <ListItemAvatar>
                    <Avatar
                        alt={adventure.name}
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
                  {adventure.name}             
                </Box>
            </ListItemButton>
        </ListItem>
        </Item>
    )
}