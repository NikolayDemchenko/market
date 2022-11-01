import * as React from 'react';
import List from "@mui/material/List";
import AdvListItem from "./AdventureListItem";
import { Adventure } from "../../../types/provider";
import { Text, Variant } from "../../BaseComponents/DisplayingComponents/Text";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AddIcon from "@mui/icons-material/Add";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DeleteIcon from "@mui/icons-material/Delete";
import { AppBar, Paper, Stack, Toolbar } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export default function AdventureListView({
  adventures, onClickBtn, onClickItem, checkedToggle
}: {
  adventures: Adventure[];
  onClickBtn: Function;
  onClickItem: Function;
  checkedToggle: Function;
}) {
  
  const onClickBtnHandler = (event: React.SyntheticEvent, value: any) => {
    onClickBtn(value);
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body1,
    padding: theme.spacing(0.5),
    textAlign: "center",
    color: theme.palette.text.primary,
  }));

  return (
    <>
      <AppBar color="inherit">
        <Toolbar>
          <Box sx={{ minWidth: "100%" }}>
            <Text {...{ variant: Variant.h4, text: "Приключения" }} />
            <BottomNavigation showLabels onChange={onClickBtnHandler}>
              <BottomNavigationAction 
                label="Добавить" 
                icon={<AddIcon />}
                value={'Добавить'} 
              />
              <BottomNavigationAction
                label="Опубликовать"
                icon={<AddTaskIcon />}
                value={'Опубликовать'} 
              />
              <BottomNavigationAction
                label="Снять с публикации"
                icon={<RemoveCircleOutlineIcon />}
                value={'Снять публикацию'} 
              />
              <BottomNavigationAction 
                label="Удалить" 
                icon={<DeleteIcon />} 
                value={'Удалить'}
              />
            </BottomNavigation>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ bgcolor: "rgba(0, 0, 0, 0.12)" }}>
        <List dense sx={{ width: "100%" }}>
          <Stack spacing={0.6}>
            {adventures.map((adventure: Adventure, index) => {
              const labelId = `checkbox-list-secondary-label-${adventure.id}`;
              return (
                <Item key={index} elevation={1}>
                  <AdvListItem {...{ adventure, labelId, onClickItem, checkedToggle }} />
                </Item>
              );
            })}
          </Stack>
        </List>
      </Box>
    </>
  );
}
