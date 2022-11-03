import * as React from "react";
import List from "@mui/material/List";
import AdvListItem from "./AdventureListItem";
import { TAdventure } from "../../../types/provider";
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
  adventures,
  onClickBtn,
  onClickItem,
  checkedToggle,
}: {
  adventures: TAdventure[];
  onClickBtn: Function;
  onClickItem: Function;
  checkedToggle: Function;
}) {
  const onClickBtnHandler = (event: React.SyntheticEvent, value: any) => {
    onClickBtn(value);
  };



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
                value={"Добавить"}
              />
              <BottomNavigationAction
                label="Опубликовать"
                icon={<AddTaskIcon />}
                value={"Опубликовать"}
              />
              <BottomNavigationAction
                label="Снять с публикации"
                icon={<RemoveCircleOutlineIcon />}
                value={"Снять публикацию"}
              />
              <BottomNavigationAction
                label="Удалить"
                icon={<DeleteIcon />}
                value={"Удалить"}
              />
            </BottomNavigation>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ bgcolor: "rgba(0, 0, 0, 0.12)" }}>
        <List dense sx={{ width: "100%" }}>
          <Stack spacing={0.6}>
            {adventures.map((adventure: TAdventure, key) => {
              const labelId = `checkbox-list-secondary-label-${adventure.id}`;
              return (
                <AdvListItem
                  {...{ adventure, labelId, onClickItem, checkedToggle, key }}
                />
              );
            })}
          </Stack>
        </List>
      </Box>
    </>
  );
}
