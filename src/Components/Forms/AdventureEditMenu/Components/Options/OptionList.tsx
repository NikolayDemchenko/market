import React from "react";
import {
  Text,
  Variant,
} from "../../../../BaseComponents/DisplayingComponents/Text";
import HSlon from "../../../../BaseComponents/StaticContentComponents/HSlon";
import RowText from "../../../../BaseComponents/Inputs/RowText";
import PhoneInput from "../../../../BaseComponents/Inputs/Phone";
import PasswordInput from "../../../../BaseComponents/Inputs/Password";
import Amount from "../../../../BaseComponents/Inputs/Amount";
import SelectInput from "../../../../BaseComponents/Inputs/Select";
import BasicButton from "../../../../BaseComponents/Buttons/BasicButton";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import MultilineInput from "../../../../BaseComponents/Inputs/MultilineText";
import TimeWithMinute from "../../../../BaseComponents/Inputs/TimeWithMinute";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { Adventure, Option } from "../../../../../types/provider";
import { List, Paper, styled } from "@mui/material";

// Запрос к бд -> Получить и передать массив данных;

export default function TestForm({options}:{options?:Option[]}) {
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
          {options&&options.map((option: Option, index:number) => {     
            return (
              <Item key={index} elevation={1}>
                {/* <ListItem key={adventure.id} disablePadding> */}
                  <Stack spacing={1}>
                    <Text {...{ variant: Variant.body1, text: "Опция" }} />

                    <RowText
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
                    <MultilineInput
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
