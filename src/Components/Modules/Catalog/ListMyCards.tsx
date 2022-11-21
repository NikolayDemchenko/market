import * as React from "react";
import List from "@mui/material/List";
import {SmallCard} from "./SmallCard";
import {
  TAdventure,
  TCharacteristic,
  TDescription,
  TSetState,
  TState,
} from "../../../Model/types";
import {
  Text,
  Variant,
} from "../../BaseComponents/DisplayingComponents/Text";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AddIcon from "@mui/icons-material/Add";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DeleteIcon from "@mui/icons-material/Delete";
import { Grid, Stack, TableContainer, Toolbar } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import Box from "@mui/material/Box";
import {  getItemById } from "../../../REST/rest";

export const ListMyCards = ({
  state: { list },
  setState,
}: {
  state: TState;
  setState: TSetState;
}) => {
  function onClickLog(value: string) {
    console.log(value);
  }

  function onClickItem(adventure: TAdventure) {
    getItemById(adventure.id, setState);
    console.log(`Нажали на ${adventure.name}`);
    // getAdventureById()
  }

  function checkAdventure(adventure: TAdventure) {
    setState({
      list: list.map((_adventure) =>
        _adventure === adventure
          ? { ..._adventure, checked: !_adventure.checked }
          : _adventure
      ),
    });
  }
  const newAdventure: TAdventure = {
    name: "",
    status: false,
    id: "",
    providerId: list[0] ? list[0].providerId : "",
    description: {
      program: "",
      info: "",
      limitations: "",
      participantsQuantity: 0,
      preRegistration: false,
      seasonality: "",
      address: "",
      phone: "",
      slotVolume: 0,
      slotSize: 0,
      connectedСalendar: false,
      indivisibleVolume: false,
      possibilitySellingCertificate: false,
      autofill: false,
      duration: "",
    },
    characteristics: [
      {
        id: "",
        name: "",
        description: "",
        slotQuantity: 0,
        price: 0,
        priceDate: "",
      },
    ],
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {/* <AppBar position="static" color="inherit"> */}
        <Toolbar sx={{ position: "static", color: "inherit" }}>
          <Box sx={{ minWidth: "100%" }}>
            <Text {...{ variant: Variant.h4, text: "Каталог" }} />
            <BottomNavigation
              showLabels
              onChange={(event: React.SyntheticEvent, value: Function) => {
                value();
              }}
            >
              <BottomNavigationAction
                label="Добавить"
                icon={<AddIcon />}
                value={() => {
                  setState((state) => ({
                    list: [...state!.list],
                    adventure: newAdventure,
                  }));
                  onClickLog("Добавить");
                }}
              />
              {/* <BottomNavigationAction
                label="Опубликовать"
                icon={<AddTaskIcon />}
                value={() => onClickLog("Опубликовать")}
              />
              <BottomNavigationAction
                label="Снять с публикации"
                icon={<RemoveCircleOutlineIcon />}
                value={() => onClickLog("Снять публикацию")}
              />
              <BottomNavigationAction
                label="Удалить"
                icon={<DeleteIcon />}
                value={() => {
                  list.forEach((adv) => {
                    console.log("adv.checked :>> ", adv.checked);
                    adv.checked && removeAdventureById(adv.id, setState);
                  });
                  onClickLog("Удалить");
                }}
              /> */}
            </BottomNavigation>
          </Box>
        </Toolbar>
        {/* </AppBar>  */}
      </Grid>
      <Grid item xs={12}>
        {/* <TableContainer sx={{ height: 600 }}> */}
        <Box component="main" sx={{     display: "flex",   justifyContent: 'center', p: 0.5, bgcolor: "rgba(0, 0, 0, 0.12)" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              p: 1,
              m: 1,
              bgcolor: "background.paper",
              maxWidth: 1200,            
              borderRadius: 1,
            }}
          >
            {/* <Stack spacing={0.6}> */}
            {list.map((adventure: TAdventure, key) => {
              const labelId = `checkbox-list-secondary-label-${adventure.id}`;
              return (
                <SmallCard
                  {...{
                    card: {
                      ...adventure,
                      description: adventure.description.info,
                    },
                    labelId,
                    onClickItem,
                    checkAdventure,
                    key,
                  }}
                />
              );
            })}
            {/* </Stack> */}
          </Box>
        </Box>
        {/* </TableContainer> */}
      </Grid>
    </Grid>
  );
};
