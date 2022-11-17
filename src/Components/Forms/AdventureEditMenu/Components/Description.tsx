import React from "react";
import {
  Text,
  Variant,
} from "../../../BaseComponents/DisplayingComponents/Text";
import PhoneInput, {
  DurationInput,
} from "../../../BaseComponents/Inputs/MaskedInputs";
import Stack from "@mui/material/Stack";
import MultilineInput from "../../../BaseComponents/Inputs/MultilineText";
import SignedCheckBox from "../../../BaseComponents/Inputs/SignedCheckBox";
import { TDescription } from "../../../../Model/types";
import Box from "@mui/material/Box";
import Tooltip from "../../../BaseComponents/DisplayingComponents/Tooltip";
import { Toolbar } from "@mui/material";
import Amount from "../../../BaseComponents/Inputs/Amount";
import { MonthsSelect } from "../../../BaseComponents/Inputs/MonthsSelect";
import SelectInput from "../../../BaseComponents/Inputs/Select";

export default function Description({
  description,
  setDescription,
}: {
  description: TDescription;
  setDescription: (description: TDescription) => void;
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
      <DurationInput
        {...{
          label: "Продолжительность",
          defaultValue: description?.duration,
          getData: (duration: string) =>
            setDescription({
              ...description,
              duration,
            }),
        }}
      />
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
            placeholder: `
Пример:
Минимальный возраст от ___ ;
Ограничение 2;
Ограничение 3;
            `
          }}
        />
        <Tooltip title="Ограничения" />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Amount
          {...{
            label: "Количество участников в билете",
            // max: 8,
            min: 1,
            defaultValue: description?.participantsQuantity,
            getAmount: (participantsQuantity: number) =>
              setDescription({
                ...description,
                participantsQuantity,
              }),
          }}
        />
        <Tooltip title="Например, у квадроцикла может быть два места, но сам квадроцикл это один билет" />
      </Box>
      <SelectInput { ...{  // Стартовый регион добавляется из информации в личном кабинете;
          getSelect: (value: string)=>{console.log(value)},
          options: ["Воронеж", "Челябинск", "Екатеринбург"], 
          label: "Регион" 
        }} 
      />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <MultilineInput
          {...{
            defaultValue: description?.address,
            getText: (address: string) =>
              setDescription({ ...description, address }),
            label: "Адрес",
          }}
        />
        <Tooltip title="Введите адрес или координаты для навигатора" />
      </Box>
      <PhoneInput
        {...{
          label: "Телефон",
          defaultValue: description?.phone,
          getPhoneNumber: (phone: string) =>
            setDescription({ ...description, phone }),
        }}
      />
      <Amount
        {...{
          defaultValue: description?.slotVolume,
          min:1,
          label: "Максимальное количество билетов",
          getAmount: (slotVolume: number) =>
            setDescription({
              ...description,
              slotVolume,
            }),
        }}
      />
      <Amount
        {...{
          defaultValue: description?.slotSize < 0 ? 1:description?.slotSize,
          min:1,
          label: "Размер слота в минутах",
          getAmount: (slotSize: number) =>
            setDescription({
              ...description,
              slotSize,
            }),
        }}
      />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <MonthsSelect
          {...{
            months: description.seasonality,
            getMonts: (seasonality: string) =>
              setDescription({
                ...description,
                seasonality,
              }),
          }}
        />
        <Tooltip title="Нажмите и выберите месяцы" />
      </Box>
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
      {/* <SignedCheckBox
        {...{
          getCheck: () =>
            setDescription({
              ...description,
              indivisibleVolume: !description?.indivisibleVolume,
            }),
          checked: description?.indivisibleVolume,
          checkBoxText: "Не делимый объем",
        }}
      /> */}
      <SignedCheckBox
        {...{
          getCheck: () =>
            setDescription({
              ...description,
              possibilitySellingCertificate:
                !description?.possibilitySellingCertificate,
            }),
          checked: description?.possibilitySellingCertificate,
          checkBoxText: "Возможность продажи сертификата",
        }}
      />
      
      {/* <SignedCheckBox
        {...{
          getCheck: () =>
            setDescription({
              ...description,
              autofill: !description?.autofill,
            }),
          checked: description?.autofill,
          checkBoxText:
            "Автоматическое заполнение календаря регламентным заданием",// Разобраться в ближайшие две недели
        }}
      /> */}
    </Stack>
  );
}
