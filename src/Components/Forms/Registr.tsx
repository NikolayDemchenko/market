import { BaseText, Variant } from "../BaseComponents/Outputs/BaseText";
import HSlon from "../../Modules/Adventures/Content/HSlon";
import {RowTextInput} from "../BaseComponents/Inputs/RowTextInput";
import {PhoneInput} from "../BaseComponents/Inputs/MaskedInputs";
import {PasswordInput} from "../BaseComponents/Inputs/Password";
import {BasicButton} from "../BaseComponents/Inputs/Buttons/Buttons";
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
        <BaseText {...{ variant: Variant.h5, text: "Регистрация" }} />
      </Grid>
      <RowTextInput
        {...{ label: "Введите Ваше имя", defaultValue: "", getText }}
      />
      <PhoneInput
        {...{
          label: "Введите номер телефона",
          defaultValue: "",
          getPhone: getPhoneNumber,
        }}
      />
      <PasswordInput {...{ label: "Введите пароль", getPassword }} />
      <PasswordInput {...{ label: "Подтвердите пароль", getPassword }} />
      <BasicButton {...{ btnText: "Зарегистрироваться", onClick:()=>{} }} />
      <BasicButton {...{ btnText: "Войти", onClick:()=>{} }} />
    </Stack>
  );
}
