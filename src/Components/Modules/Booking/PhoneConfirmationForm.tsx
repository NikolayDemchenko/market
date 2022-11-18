import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { Text, Variant } from "../../BaseComponents/DisplayingComponents/Text";
import { RowTextInput } from "../../BaseComponents/Inputs/RowTextInput";
import { BasicButton } from "../../BaseComponents/Inputs/Buttons/BasicButton";
import React from "react";

export type TPhoneConfirmation = {
  phoneConfirmation: string;
};
export default function PhoneConfirmationForm({getPhoneConfirmation}:{getPhoneConfirmation:(phoneConfirmation:TPhoneConfirmation)=>void}) {
  const [state, setState] = React.useState<TPhoneConfirmation>({
    phoneConfirmation: "",
  });

  const getPhoneConfirmationText = (phoneConfirmation: string) => {
    setState({ ...state, phoneConfirmation });
    console.log("confirmation :>> ", phoneConfirmation);
  };

  return (
    <Stack spacing={2} >
      <Grid container justifyContent="center">
        <Text
          {...{ variant: Variant.h6, text: "Подтвердите номер телефона" }}
        />
      </Grid>
      <RowTextInput
        {...{
          label: "Укажите секретный код из SMS",
          defaultValue: "",
          getText: getPhoneConfirmationText,
        }}
      />
      <BasicButton
        {...{
          onClick: () => {
            if (state.phoneConfirmation) {
              getPhoneConfirmation(state)
            } else {
              alert("Не все поля заполнены!");
            }
          },
        }}
      >
        ПРИМЕНИТЬ
      </BasicButton>
    </Stack>
  );
}
