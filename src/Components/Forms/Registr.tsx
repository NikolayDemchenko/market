import { Text, Variant } from "../BaseComponents/DisplayingComponents/Text";
import HSlon from "../BaseComponents/StaticContentComponents/HSlon";
import {RowText} from "../BaseComponents/Inputs/RowText";
import PhoneInput from "../BaseComponents/Inputs/MaskedInputs";
import PasswordInput from "../BaseComponents/Inputs/Password";
import BasicButton from "../BaseComponents/Buttons/BasicButton";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
export default function Registr() {
  const getPassword = (value: string) => {
    console.log(value);
  };
  function getPhoneNumber(value: string) {
    console.log(value);
  }
  function getText(value: string) {
    console.log(value);
  }
  return (
    <Stack spacing={1}>
      <HSlon />
      <Grid container justifyContent="center">
        <Text {...{ variant: Variant.h5, text: "Регистрация" }} />
      </Grid>
      <RowText
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
      <PasswordInput {...{ label: "Подтвердите пароль", getPassword }} />
      <BasicButton {...{ btnText: "Зарегистрироваться", onClick:()=>{} }} />
      <BasicButton {...{ btnText: "Войти", onClick:()=>{} }} />
    </Stack>
  );
}
