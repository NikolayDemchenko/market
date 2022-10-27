import React from "react";
import Box from "@mui/material/Box";
import { Text, Variant } from "../BaseComponents/DisplayingComponents/Text";
import HSlon from "../BaseComponents/StaticContentComponents/HSlon";
import NameInput from "../BaseComponents/Inputs/Name";
import PhoneInput from "../BaseComponents/Inputs/Phone";
import PasswordInput from "../BaseComponents/Inputs/Password";
import Amount from "../BaseComponents/Inputs/Amount";
import SelectInput from "../BaseComponents/Inputs/Select";
import BasicButton from "../BaseComponents/Buttons/BasicButton";


// Запрос к бд -> Получить и передать массив данных;
let options = ["5 минут", "10 минут", "15 минут", "20 минут"];

export default function TestForm() {
  function getSelect(value: string) {
    console.log(value);
  }
  function getAmount(value: number) {
    console.log(value);
  }
  function getPassworg(value: string) {
    console.log(value);
  }
  function getName(value: string) {
    console.log(value);
  }
  function getPhoneNumber(value:string) {
    console.log(value);
  }

  return (
    <div>
      <Box     
        sx={{ m: 1, width: "35ch" }
       }
 
      >
        <HSlon />
        <Text {...{ variant: Variant.h5, text: "Вход для поставщиков" }} />
        <Text {...{ variant: Variant.body1, text: "Имя клиента" }} />
        <NameInput {...{ label: "Введите Ваше имя", defaultValue: "", getName }} />
        <PhoneInput
          {...{
            label: "Введите номер телефона",
            defaultValue: "",
            getPhoneNumber,
          }}
        />
        <PasswordInput {...{ label: "Введите пароль", getPassworg }} />
        <Amount {...{label: "Укажите количество билетов", max: 8, min: 1, defaultValue: 1, getAmount }} />
        <SelectInput {...{ getSelect, options }} />
        <BasicButton {...{ btnText: "Подтвердить выбор", width: "40ch" }} />
      </Box>
    </div>
  );
}
