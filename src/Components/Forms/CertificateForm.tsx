import { Text, Variant } from "../BaseComponents/DisplayingComponents/Text";
import {RowTextInput} from "../BaseComponents/Inputs/RowTextInput";

import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { BasicButton } from "../BaseComponents/Inputs/Buttons/BasicButton";
export default function Registr() {
  function getText(value: string) {
    console.log(value);
  }

  return (
    <Stack spacing={2} sx={{ width: "30%" }}>
      <Grid container justifyContent="center">
        <Text {...{ variant: Variant.h6, text: "Сертификат" }} />
      </Grid>
      <RowTextInput
        {...{ label: "Номер сертификата", defaultValue: "", getText }}
      />
      <RowTextInput
        {...{ label: "Секретный код сертификата", defaultValue: "", getText }}
      />
      <BasicButton {...{  onClick:()=>{} }} >ПРИМЕНИТЬ</BasicButton>
    </Stack>
  );
}