import React from "react";
import { Text, Variant } from "../../../BaseComponents/DisplayingComponents/Text";
import HSlon from "../../../BaseComponents/StaticContentComponents/HSlon";
import RowText from "../../../BaseComponents/Inputs/RowText";
import PhoneInput from "../../../BaseComponents/Inputs/Phone";
import PasswordInput from "../../../BaseComponents/Inputs/Password";
import Amount from "../../../BaseComponents/Inputs/Amount";
import SelectInput from "../../../BaseComponents/Inputs/Select";
import BasicButton from "../../../BaseComponents/Buttons/BasicButton";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import MultilineInput from "../../../BaseComponents/Inputs/MultilineText";
import TimeWithMinute from "../../../BaseComponents/Inputs/TimeWithMinute";
import SignedCheckBox from "../../../BaseComponents/Inputs/SignedCheckBox";
import { TDescription } from "../../../../types/provider";
import Box from "@mui/material/Box";
import Tooltip from "../../../BaseComponents/Inputs/Tooltip";


export default function Description({description, setDescription}:{description?:TDescription,setDescription:Function}) {
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
      {/* <Grid container justifyContent="center"> */}
        <Text {...{ variant: Variant.body1, text: "Описание" }} />
      {/* </Grid> */}
    
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <MultilineInput
          {...{ defaultValue: "", getText: getMultiText, label: "Программа" }}
        />
        <Tooltip title="Программа приключения"></Tooltip>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <MultilineInput
          {...{ defaultValue: "", getText: getMultiText, label: "Важная информация" }}
        />
        <Tooltip title="Важная информация о приключении" />
      </Box>
        <SignedCheckBox
        {...{
          getCheck:()=>{console.log("Предварительная запись");},
          checked: false,
          checkBoxText: "Предварительная запись",
        }}
      />
              <MultilineInput
          {...{ defaultValue: "", getText: getMultiText, label: "Адрес" }}
        />
        <PhoneInput
          {...{
            label: "Контакты",
            defaultValue: "",
            getPhoneNumber,
          }}
        />
      {/* <PhoneInput
        {...{
          label: "Введите номер телефона",
          defaultValue: "",
          getPhoneNumber,
        }}
      /> */}
      {/* <PasswordInput {...{ label: "Введите пароль", getPassword }} /> */}
      {/* <Amount
        {...{
          label: "Укажите количество билетов",
          max: 8,
          min: 1,
          defaultValue: 1,
          getAmount,
        }}
      /> */}
      {/* <SelectInput
        {...{ label: "Выберите характеристику", getSelect, options }}
      /> */} 
      {/* <TimeWithMinute {...{ getTime, label: "Минимальная продолжительность" }} /> */}
      {/* <BasicButton {...{ btnText: "Подтвердить выбор", onClick: () => {} }} /> */}
    </Stack>
  );
}
