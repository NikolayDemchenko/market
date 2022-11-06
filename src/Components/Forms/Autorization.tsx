import React from "react";
import Grid from "@mui/material/Grid";
import { Text, Variant } from "../BaseComponents/DisplayingComponents/Text";
import SignedCheckBox from "../BaseComponents/Inputs/SignedCheckBox";
import BasicButton from "../BaseComponents/Buttons/BasicButton";
import HSlon from "../BaseComponents/StaticContentComponents/HSlon";
import PasswordInput from "../BaseComponents/Inputs/Password";
import PhoneInput from "../BaseComponents/Inputs/MaskedInputs";
import Stack from "@mui/material/Stack";


export default function Autorization() {
  const getPassword = (value: string) => {
    console.log(value);
  };
  const getCheck = (val: boolean) => {
    console.log("val :>> ", val);
  };
  function getPhoneNumber(value: string) {
    console.log(value);
  }
  return (  
    <Stack spacing={1}>    
      <HSlon />
      <Grid container justifyContent="center">

      <Text {...{ variant: Variant.h5, text: "Вход для поставщиков" }} />
      </Grid>
      <PhoneInput
        {...{
          label: "Введите номер телефона",
          defaultValue: "",
          getPhoneNumber,
        }}
      />
      <PasswordInput {...{ label: "Введите пароль", getPassword }} />
      <SignedCheckBox
        {...{
          getCheck,
          checked: false,
          checkBoxText: "Запомнить меня",
        }}
      />
      <BasicButton {...{ btnText: "Войти", onClick:()=>{} }} />
      <BasicButton {...{ btnText: "Зарегистрироваться", onClick:()=>{} }} />
      <BasicButton {...{ btnText: "Забыли пароль?", onClick:()=>{} }} />
    </Stack>
  );
}
