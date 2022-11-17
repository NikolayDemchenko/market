import { Text, Variant } from "../BaseComponents/DisplayingComponents/Text";
import {RowTextInput} from "../BaseComponents/Inputs/RowTextInput";
import PhoneInput from "../BaseComponents/Inputs/MaskedInputs";

import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { BasicButton } from "../BaseComponents/Inputs/Buttons/BasicButton";
export default function Registr() {
  function getPhoneNumber(value: string) {
    console.log(value);
  }
  function getText(value: string) {
    console.log(value);
  }

  return (
    <Stack spacing={2} sx={{ width: "30%" }}>
      <Grid container justifyContent="center">
        <Text {...{ variant: Variant.h6, text: "Введите данные для получения билета" }} />
      </Grid>
      <RowTextInput
        {...{ label: "Ваше имя", defaultValue: "", getText }}
      />
      <PhoneInput
        {...{
          label: "Номер телефона",
          defaultValue: "",
          getPhoneNumber,
        }}
      />
      <RowTextInput
        {...{ label: "E-mail", defaultValue: "", getText }}
      />
      <BasicButton {...{ onClick:()=>{} }} >ДАЛЕЕ</BasicButton>
      <Grid container justifyContent="center">
        <div style={{ fontSize: "12px" }}>
            Нажимая "Далее", вы соглашаетесь с <a href="#">условиями приобретения</a> и <a href="#">офертой</a>
        </div>
      </Grid>
    </Stack>
  );
}