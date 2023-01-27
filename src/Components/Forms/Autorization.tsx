import React from "react";
import Grid from "@mui/material/Grid";
import { BaseText, Variant } from "../BaseComponents/Outputs/BaseText";
import {SignedCheckBox} from "../BaseComponents/Inputs/SignedCheckBox";

import HSlon from "../../Modules/Adventures/Content/HSlon";
import {PasswordInput} from "../BaseComponents/Inputs/Password";
import {PhoneInput} from "../BaseComponents/Inputs/MaskedInputs";
import Stack from "@mui/material/Stack";
import { BasicButton } from "../BaseComponents/Inputs/Buttons/Buttons";

export type TAutorizData = {
  phone: string;
  password: string;
  checked: boolean;
};
export default function Autorization({autorization}:{autorization:(adata:TAutorizData)=>void}) {
  const [state, setState] = React.useState<TAutorizData>({
    checked: false,
    password: "",
    phone: "",
  });

  const getPassword = (password: string) => {
    setState({ ...state, password });
    console.log("password :>> ", password);
  };
  const getCheck = (checked: boolean) => {
    setState({ ...state, checked });
    console.log("checked :>> ", checked);
  };
  function getPhone(phone: string) {
    setState({ ...state, phone });
    console.log("phone :>> ", phone);
  }
  return (
    <Stack spacing={1}>
      <HSlon />
      <Grid container justifyContent="center">
        <BaseText {...{ variant: Variant.h5, text: "Вход для поставщиков" }} />
      </Grid>
      <PhoneInput
        {...{
          label: "Введите номер телефона",
          defaultValue: "",
          getPhone: getPhone,
        }}
      />
      <PasswordInput {...{ label: "Введите пароль", getPassword }} />
      <SignedCheckBox
        {...{
          getCheck,
          checked: state.checked,
          checkBoxText: "Запомнить меня",
        }}
      />
      <BasicButton
        {...{
          onClick: () => {
            if (
              state.password &&
              state.phone &&
              state.phone.replace(/[^0-9]/g, "").length === 11
            ) {              
              autorization(state)            
            } else {
              alert("Не все поля заполнены!");
            }
          },
        }}
      >
        Войти
      </BasicButton>
      <BasicButton {...{ onClick: () => {} }}>Зарегистрироваться</BasicButton>
      <BasicButton {...{ onClick: () => {} }}>Забыли пароль?</BasicButton>
    </Stack>
  );
}
