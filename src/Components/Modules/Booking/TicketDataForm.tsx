import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import React from "react";
import { Text, Variant } from "../../BaseComponents/DisplayingComponents/Text";
import { BasicButton } from "../../BaseComponents/Inputs/Buttons/BasicButton";
import PhoneInput from "../../BaseComponents/Inputs/MaskedInputs";
import { RowTextInput } from "../../BaseComponents/Inputs/RowTextInput";

export const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
export type TTicketData = {
  name: string;
  phone: string;
  email: string;
};
export function TicketDataForm({
  getTicketData,
}: {
  getTicketData: (ticketData: TTicketData) => void;
}) {
  const [state, setState] = React.useState<TTicketData>({
    name: "",
    phone: "",
    email: "",
  });

  const getName = (name: string) => {
    setState({ ...state, name });
    console.log("name :>> ", name);
  };
  const getEmail = (email: string) => {
    setState({ ...state, email });
    console.log("email :>> ", validateEmail(email)?.input);
  };
  const getPhone = (phone: string) => {
    setState({ ...state, phone });
    console.log("phone :>> ", phone);
  };

  return (
    <Stack spacing={2} >
      <Grid container justifyContent="center">
        <Text
          {...{
            variant: Variant.h6,
            text: "Введите данные для получения билета",
          }}
        />
      </Grid>
      <RowTextInput
        {...{ label: "Ваше имя", defaultValue: "", getText: getName }}
      />
      <PhoneInput
        {...{
          label: "Номер телефона",
          defaultValue: "",
          getPhoneNumber: getPhone,
        }}
      />
      <RowTextInput
        {...{ label: "E-mail", defaultValue: "", getText: getEmail }}
      />
      <BasicButton
        {...{
          onClick: () => {
            if (
              state.name &&
              validateEmail(state.email) &&
              state.phone &&
              state.phone.replace(/[^0-9]/g, "").length === 11
            ) {
              getTicketData(state);
            } else {
              alert("Не все поля заполнены!");
            }
          },
        }}
      >
        ДАЛЕЕ
      </BasicButton>
      <Grid container justifyContent="center">
        <div style={{ fontSize: "12px" }}>
          Нажимая "Далее", вы соглашаетесь с{" "}
          <a href="#">условиями приобретения</a> и <a href="#">офертой</a>
        </div>
      </Grid>
    </Stack>
  );
}
