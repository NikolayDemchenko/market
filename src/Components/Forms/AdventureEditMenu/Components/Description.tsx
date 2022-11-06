import React from "react";
import {
  Text,
  Variant,
} from "../../../BaseComponents/DisplayingComponents/Text";
import PhoneInput from "../../../BaseComponents/Inputs/MaskedInputs";
import Stack from "@mui/material/Stack";
import MultilineInput from "../../../BaseComponents/Inputs/MultilineText";
import SignedCheckBox from "../../../BaseComponents/Inputs/SignedCheckBox";
import { TDescription } from "../../../../types/provider";
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
            defaultValue: "",
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
            defaultValue: "",
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
            defaultValue: "",
            getText: (limitation: string) =>
              setDescription({
                ...description,
                limitation,
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
          // defaultValue: description?.peopleAmount,
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
          checked: false,
          checkBoxText: "Предварительная запись",
        }}
      />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <MultilineInput
          {...{
            defaultValue: "",
            getText: (seasonality: string) =>
              setDescription({ ...description, seasonality }),
            label: "Сезонность",
          }}
        />
        <Tooltip title="Укажите месяцы через запятую" />
      </Box>

      <MultilineInput
        {...{
          defaultValue: "",
          getText: (address: string) =>
            setDescription({ ...description, address }),
          label: "Адрес",
        }}
      />
      <PhoneInput
        {...{
          label: "Контакты",
          defaultValue: "",
          getPhoneNumber: (phone: string) =>
            setDescription({ ...description, phone }),
        }}
      />
      <Amount
        {...{
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
          label: "Размер слота",
          getAmount: (slotSize: number) =>
            setDescription({
              ...description,
              slotSize,
            }),
        }}
      />
    </Stack>
  );
}
