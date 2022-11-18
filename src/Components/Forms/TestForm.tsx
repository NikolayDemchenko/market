import React from "react";
import { Text, Variant } from "../BaseComponents/DisplayingComponents/Text";
import HSlon from "../BaseComponents/StaticContentComponents/HSlon";
import {RowTextInput} from "../BaseComponents/Inputs/RowTextInput";
import PhoneInput from "../BaseComponents/Inputs/MaskedInputs";
import PasswordInput from "../BaseComponents/Inputs/Password";
import Amount from "../BaseComponents/Inputs/Amount";
import {SelectInput} from "../BaseComponents/Inputs/SelectInput";
import {BasicButton} from "../BaseComponents/Inputs/Buttons/BasicButton";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { MultilineText} from "../BaseComponents/Inputs/MultilineText";
import TimeWithMinute from "../BaseComponents/Inputs/TimeWithMinute";
// Запрос к бд -> Получить и передать массив данных;
let options = ["5 минут", "10 минут", "15 минут", "20 минут"];

export default function TestForm() {
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

  return (
    <Stack spacing={1}>
      <HSlon />
      <Grid container justifyContent="center">
        <Text {...{ variant: Variant.h5, text: "Вход для поставщиков" }} />
      </Grid>
      <Grid container justifyContent="center">
        <Text {...{ variant: Variant.body1, text: "Имя клиента" }} />
      </Grid>
      <RowTextInput
        {...{ label: "Введите Ваше имя", defaultValue: "", getText }}
      />
      <PhoneInput
        {...{
          label: "Введите номер телефона",
          defaultValue: "",
          getPhoneNumber,
        }}
      />
      <PasswordInput {...{ label: "Введите пароль", getPassword }} />
      <Amount
        {...{
          label: "Укажите количество билетов",
          max: 8,
          min: 1,
          defaultValue: 1,
          getAmount,
        }}
      />
      <SelectInput {...{ label: "Выберите характеристику",getSelect, options }} />
      <TimeWithMinute {...{getTime,label:"Продолжительность"}} />
      <MultilineText     
        {...{defaultValue:"", getText:getMultiText, label: "Введите текст" }}
      />
      <BasicButton {...{ btnText: "Подтвердить выбор", onClick:()=>{} }} />
    </Stack>
  );
}
