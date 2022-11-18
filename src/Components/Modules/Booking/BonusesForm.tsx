import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { Text, Variant } from "../../BaseComponents/DisplayingComponents/Text";
import { BasicButton } from "../../BaseComponents/Inputs/Buttons/BasicButton";
import { RowTextInput } from "../../BaseComponents/Inputs/RowTextInput";
import React from "react";
export type TBonusesConfirmation = {
  bonusesConfirmation: string;
};
export const BonusesForm = ({getBonus}:{getBonus:(bonus:TBonusesConfirmation)=>void}) => {
  const [state, setState] = React.useState<TBonusesConfirmation>({
    bonusesConfirmation: "",
  });

  const getBonusesfirmation = (bonusesConfirmation: string) => {
    setState({ ...state, bonusesConfirmation });
    console.log("bonusesConfirmation :>> ", bonusesConfirmation);
  };
  return (
    <Stack spacing={2}>
      <Grid container justifyContent="center">
        <Text {...{ variant: Variant.h6, text: "Ваши бонусы" }} />
      </Grid>
      <RowTextInput
        {...{
          label: "Укажите какое количество бонусов необходимо будет списать",
          defaultValue: "",
          getText: getBonusesfirmation,
        }}
      />
      <BasicButton
        {...{
          onClick: () => {
            if (state.bonusesConfirmation) {        
              getBonus(state)
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
};
