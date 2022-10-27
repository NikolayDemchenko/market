import React from "react";
import Box from "@mui/material/Box";
import { Text, Variant } from "../BaseComponents/DisplayingComponents/Text";
import SignedCheckBox from "../BaseComponents/Inputs/SignedCheckBox";
import BasicButton from "../BaseComponents/Buttons/BasicButton";
import HSlon from "../BaseComponents/StaticContentComponents/HSlon";
import PasswordInput from "../BaseComponents/Inputs/Password";
import PhoneInput from "../BaseComponents/Inputs/Phone";

export default function Autorization() {
  const getPassworg = (value: string) => {
    console.log(value);
  };
  const getCheck = (val: boolean) => {
    console.log("val :>> ", val);
  };
  function getPhoneNumber(value: string) {
    console.log(value);
  }
  return (
    <div>
      <Box sx={{ m: 2, minWidth: "40ch" }}>
        <HSlon />
        <Text {...{ variant: Variant.h5, text: "Вход для поставщиков" }} />
        <PhoneInput
          {...{
            label: "Введите номер телефона",
            defaultValue: "",
            getPhoneNumber,
          }}
        />
        <PasswordInput {...{ label: "Введите пароль", getPassworg }} />
        <SignedCheckBox
          {...{
            getCheck,
            checked: false,
            checkBoxText: "Запомнить меня",
          }}
        />
        <BasicButton {...{ btnText: "Войти", width: "40ch" }} />
        <BasicButton {...{ btnText: "Зарегистрироваться", width: "40ch" }} />
        <BasicButton {...{ btnText: "Забыли пароль?", width: "40ch" }} />
      </Box>
    </div>
  );
}
