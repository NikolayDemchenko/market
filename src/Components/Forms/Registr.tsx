import Box from "@mui/material/Box";
import { Text, Variant } from "../BaseComponents/DisplayingComponents/Text";
import HSlon from "../BaseComponents/StaticContentComponents/HSlon";
import NameInput from "../BaseComponents/Inputs/Name";
import PhoneInput from "../BaseComponents/Inputs/Phone";
import PasswordInput from "../BaseComponents/Inputs/Password";
import BasicButton from "../BaseComponents/Buttons/BasicButton";

export default function Registr() {
  const getPassworg = (value: string) => {
    console.log(value);
  };
  function getPhoneNumber(value: string) {
    console.log(value);
  }
  function getName(value: string) {
    console.log(value);
  }
  return (
    <Box sx={{ p: 5, m: 5, width: "40ch" }}>
      <HSlon />
      <Text {...{ variant: Variant.h5, text: "Регистрация" }} />
      <NameInput
        {...{ label: "Введите Ваше имя", defaultValue: "", getName }}
      />
      <PhoneInput
        {...{
          label: "Введите номер телефона",
          defaultValue: "",
          getPhoneNumber,
        }}
      />
      <PasswordInput {...{ label: "Введите пароль", getPassworg }} />
      <PasswordInput {...{ label: "Подтвердите пароль", getPassworg }} />
      <BasicButton {...{ btnText: "Зарегистрироваться", width: "40ch" }} />
      <BasicButton {...{ btnText: "Войти", width: "40ch" }} />
    </Box>
  );
}
