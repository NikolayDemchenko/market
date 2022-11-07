import * as React from "react";
import List from "@mui/material/List";
import AdvListItem from "./AdventureListItem";
import { TAdventure, TSetState } from "../../../Model/types";
import { Text, Variant } from "../../BaseComponents/DisplayingComponents/Text";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AddIcon from "@mui/icons-material/Add";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DeleteIcon from "@mui/icons-material/Delete";
import { AppBar, Grid, Stack, TableContainer, Toolbar } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import Box from "@mui/material/Box";
import { removeAdventureById } from "../../../REST/AdventureMongoREST";

export default function AdventureList({
  adventures,
  setState,
}: {
  adventures: TAdventure[];
  setState: TSetState;
}) {
  // function getAdventureData() {
  //   return adventures;
  // }

  function onClickBtn(value: any) {
    console.log(value);
  }

  const setAdventure = (adventure: TAdventure) =>
    setState((state) => ({ list: state.list, adventure }));
  function onClickItem(adventure: TAdventure) {
    setAdventure(adventure);
    console.log("Нажали на приключение в списке.");
    // getAdventureById()
  }

  function checkAdventure(adventure: TAdventure) {
    setState({
      list: adventures.map((_adventure) =>
        _adventure === adventure
          ? { ..._adventure, checked: !_adventure.checked }
          : _adventure
      ),
    });
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>

          {/* <AppBar position="static" color="inherit"> */}
            <Toolbar sx={{position:"static", color:"inherit"}} >
              <Box sx={{ minWidth: "100%" }}>
                <Text {...{ variant: Variant.h4, text: "Приключения" }} />
                <BottomNavigation
                  showLabels
                  onChange={(event: React.SyntheticEvent, value: any) => {
                    value();
                  }}
                >                  <BottomNavigationAction
                    label="Добавить"
                    icon={<AddIcon />}
                    value={() => {
                      setState((state) => ({
                        list: [...state.list],
                        adventure: { name: "", status: false, id: "" },
                      }));
                      onClickBtn("Добавить");
                    }}
                  />
                  <BottomNavigationAction
                    label="Опубликовать"
                    icon={<AddTaskIcon />}
                    value={() => onClickBtn("Опубликовать")}
                  />
                  <BottomNavigationAction
                    label="Снять с публикации"
                    icon={<RemoveCircleOutlineIcon />}
                    value={() => onClickBtn("Снять публикацию")}
                  />
                  <BottomNavigationAction
                    label="Удалить"
                    icon={<DeleteIcon />}
                    value={() => {
                      adventures.forEach((adv) => {
                        console.log("adv.checked :>> ", adv.checked);
                        adv.checked && removeAdventureById(adv.id, setState);
                      });
                      onClickBtn("Удалить");
                    }}
                  />
                </BottomNavigation>
              </Box>
            </Toolbar>
          {/* </AppBar>  */}
      </Grid>
      <Grid item xs={12}>
        <TableContainer        
        sx={{ height: 600 }}
        >
        <Box
          component="main"
          sx={{ p: 0.5, bgcolor: "rgba(0, 0, 0, 0.12)" }}
        >
          <Stack spacing={0.6}>
            {adventures.map((adventure: TAdventure, key) => {
              const labelId = `checkbox-list-secondary-label-${adventure.id}`;
              return (
                <AdvListItem
                  {...{
                    adventure,
                    labelId,
                    onClickItem,
                    checkAdventure,
                    key,
                  }}
                />
              );
            })}
          </Stack>
        </Box>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
