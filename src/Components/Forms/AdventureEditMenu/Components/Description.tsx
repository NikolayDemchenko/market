import React from "react";
import {
  Text,
  Variant,
} from "../../../BaseComponents/DisplayingComponents/Text";
import PhoneInput from "../../../BaseComponents/Inputs/MaskedInputs";
import Stack from "@mui/material/Stack";
import MultilineInput from "../../../BaseComponents/Inputs/MultilineText";
import SignedCheckBox from "../../../BaseComponents/Inputs/SignedCheckBox";
import { TDescription } from "../../../../Model/types";
import Box from "@mui/material/Box";
import Tooltip from "../../../BaseComponents/DisplayingComponents/Tooltip";
import { Toolbar } from "@mui/material";
import Amount from "../../../BaseComponents/Inputs/Amount";

export default function Description({
  description,
  setDescription,
}: {
  description?: TDescription;
  setDescription: Function;
}) {
  // const {slotSize}:TDescription=description
  return (
    <Stack spacing={1}>
      <Toolbar>
        <Text {...{ variant: Variant.h6, text: "Описание" }} />
      </Toolbar>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <MultilineInput
          {...{
            defaultValue: description?.program,
            getText: (program: string) =>
              setDescription({ ...description, program }),
            label: "Программа",
          }}
        />
        <Tooltip title="Программа приключения"></Tooltip>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <MultilineInput
          {...{
            defaultValue: description?.info,
            getText: (info: string) =>
              setDescription({
                ...description,
                info,
              }),
            label: "Важная информация",
          }}
        />
        <Tooltip title="Важная информация о приключении" />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <MultilineInput
          {...{
            defaultValue: description?.limitations,
            getText: (limitations: string) =>
              setDescription({
                ...description,
                limitations,
              }),
            label: "Ограничения",
          }}
        />
        <Tooltip title="Ограничения" />
      </Box>
      <Amount
        {...{
          label: "Количество участников",
          // max: 8,
          // min: 1,
          defaultValue: description?.peopleAmount,
          getAmount: (peopleAmount: number) =>
            setDescription({
              ...description,
              peopleAmount,
            }),
        }}
      />
      <SignedCheckBox
        {...{
          getCheck: () =>
            setDescription({
              ...description,
              preRegistration: !description?.preRegistration,
            }),
          checked: description?.preRegistration,
          checkBoxText: "Предварительная запись",
        }}
      />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <MultilineInput
          {...{
            defaultValue: description?.seasonality,
            getText: (seasonality: string) =>
              setDescription({ ...description, seasonality }),
            label: "Сезонность",
          }}
        />
        <Tooltip title="Укажите месяцы через запятую" />
      </Box>

      <MultilineInput
        {...{
          defaultValue: description?.address,
          getText: (address: string) =>
            setDescription({ ...description, address }),
          label: "Адрес",
        }}
      />
      <PhoneInput
        {...{
          label: "Контакты",
          defaultValue: description?.phone,
          getPhoneNumber: (phone: string) =>
            setDescription({ ...description, phone }),
        }}
      />
      <Amount
        {...{
          defaultValue: description?.slotVolume,
          label: "Объём слота",
          getAmount: (slotVolume: number) =>
            setDescription({
              ...description,
              slotVolume,
            }),
        }}
      />
      <Amount
        {...{
          defaultValue: description?.slotSize,
          label: "Размер слота",
          getAmount: (slotSize: number) =>
            setDescription({
              ...description,
              slotSize,
            }),
        }}
      />
            <SignedCheckBox
        {...{
          getCheck: () =>
            setDescription({
              ...description,
              indivisibleVolume: !description?.indivisibleVolume,
            }),
          checked: description?.indivisibleVolume,
          checkBoxText: "Не делимый объем",
        }}
      />
    </Stack>
  );
}
