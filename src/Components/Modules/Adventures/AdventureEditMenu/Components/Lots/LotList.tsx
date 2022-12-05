import React from "react";

import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { List, Paper, styled } from "@mui/material";
import { TAdventureLot } from "../../../../../../Model/types";
import { Text, Variant } from "../../../../../BaseComponents/Outputs/Text";
import Amount from "../../../../../BaseComponents/Inputs/Amount";
import { RowTextInput } from "../../../../../BaseComponents/Inputs/RowTextInput";
import { MultilineText } from "../../../../../BaseComponents/Inputs/MultilineText";
// Запрос к бд -> Получить и передать массив данных;
let options = ["5 минут", "10 минут", "15 минут", "20 минут"];

export default function LotList({ lots }: { lots?: TAdventureLot[] }) {
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
          {lots &&
            lots.map((lot: TAdventureLot, index: number) => {
              return (
                <Item key={index} elevation={1}>
                  <Stack spacing={1}>                    
                    <Text {...{ variant: Variant.h5, text: "Лот" }} />
                    {/* <Grid container justifyContent="center">
        <Text {...{ variant: Variant.body1, text: "Имя клиента" }} />
      </Grid> */}
                    <RowTextInput
                      {...{ label: "Название", defaultValue: lot.name, getText }}
                    />
                    <MultilineText
                      {...{
                        defaultValue: lot.description,
                        getText: getMultiText,
                        label: "Описание",
                      }}
                    />
                    <Amount
                      {...{
                        label: "Количество участников",
                        // max: 8,
                        min: 1,
                        defaultValue: lot.personAmount,
                        getAmount,
                      }}
                    />
                    {/* <PasswordInput {...{ label: "Введите пароль", getPassword }} /> */}
                    {/* <SelectInput
        {...{ label: "Выберите характеристику", getSelect, options }}
      /> */}
                    {/* <TimeWithMinute {...{ getTime, label: "Продолжительность" }} /> */}
                    {/* <BasicButton {...{ btnText: "Подтвердить выбор", onClick: () => {} }} /> */}
                  </Stack>
                </Item>
              );
            })}
        </Stack>
      </List>
    </Box>
  );
}
