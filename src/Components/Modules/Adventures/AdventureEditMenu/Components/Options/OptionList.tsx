import React from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { List, Paper, styled } from "@mui/material";
import { Text, Variant } from "../../../../../BaseComponents/Outputs/Text";
import { TOption } from "../../../../../../Model/types";
import { BasicButton } from "../../../../../BaseComponents/Inputs/Buttons/Buttons";
import { RowTextInput } from "../../../../../BaseComponents/Inputs/RowTextInput";
import TimeWithMinute from "../../../../../BaseComponents/Inputs/TimeWithMinute";
import { MultilineText } from "../../../../../BaseComponents/Inputs/MultilineText";

// Запрос к бд -> Получить и передать массив данных;

export default function TestForm({options}:{options?:TOption[]}) {
  function getSelect(value: string) {
    console.log(value);
  }
  function getAmount(value: number) {
    console.log(value);
  }
  function getPassword(value: string) {
    console.log(value);
  }
  function getMultiText(value: string) {
    console.log(value);
  }
  function getPhoneNumber(value: string) {
    console.log(value);
  }
  function getText(value: string) {
    console.log(value);
  }
  function getTime(value: string) {
    console.log(value);
  }
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body1,
    padding: theme.spacing(0.5),
    textAlign: "center",
    color: theme.palette.text.primary,
  }));
  return (
    <Box sx={{ bgcolor: "rgba(0, 0, 0, 0.12)" }}>
      <List dense sx={{ width: "100%" }}>
        <Stack spacing={0.6}>
          {options&&options.map((option: TOption, index:number) => {     
            return (
              <Item key={index} elevation={1}>
                {/* <ListItem key={adventure.id} disablePadding> */}
                  <Stack spacing={1}>
                    <Text {...{ variant: Variant.body1, text: "Опция" }} />

                    <RowTextInput
                      {...{
                        label: "Введите Ваше имя",
                        defaultValue: "",
                        getText,
                      }}
                    />        
          
     
                    {/* <SelectInput
                      {...{
                        label: "Выберите характеристику",
                        getSelect,
                        options,
                      }}
                    /> */}
                    <TimeWithMinute
                      {...{ getTime, label: "Продолжительность" }}
                    />
                    <MultilineText
                      {...{
                        defaultValue: "",
                        getText: getMultiText,
                        label: "Введите текст",
                      }}
                    />
                    <BasicButton
                      {...{ btnText: "Подтвердить выбор", onClick: () => {} }}
                    />
                  </Stack>
                {/* </ListItem> */}
              </Item>
            );
          })}
        </Stack>
      </List>
    </Box>
  );
}
