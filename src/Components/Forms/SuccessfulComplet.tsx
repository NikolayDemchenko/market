import { Text, Variant } from "../BaseComponents/DisplayingComponents/Text";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { BasicButton } from "../BaseComponents/Inputs/Buttons/BasicButton";
import { DottedNameValue } from "../BaseComponents/DisplayingComponents/DottedNameValue";

export const SuccessfulComplet = () => {
  return (
    <Stack spacing={2} sx={{ width: "40%" }}>
      <Grid container justifyContent="center">
        <Text
          {...{
            fontWeight: 700,
            variant: Variant.h6,
            text: "Ваш заказ №1231231 успешно оформлен",
          }}
        />   
        <Text
          {...{
            fontWeight: 700,
            variant: Variant.body1,
            text: 'Ваши билеты будут отправлены на Ваш номер телефона и E-mail',
          }}
        />
            <Box sx={{ minHeight: "3rem" }} />
        <Text
          {...{
            fontWeight: 700,
            variant: Variant.h6,
            text: 'Кино на крыше "Маленькая мисс Счастье"',
          }}
        />
        <Box sx={{ minHeight: "3rem" }} />
        {[
          { name: "Время брони:", value: "20:00" },
          { name: "Количество билетов:", value: "2 шт" },
          { name: "Цена билета:", value: "800 руб" },
          { name: "Сумма:", value: "1600 руб" },
        ].map(({ name, value }) => (
          <DottedNameValue {...{ name, value }} />
        ))}

        <Box sx={{ minHeight: "2rem" }} />
        {[
          { name: "Имя:", value: "Иван" },
          { name: "Номер телефона:", value: "+7 (911) 111-11-11" },
          { name: "E-mail:", value: "info@hslon.ru" },
        ].map(({ name, value }) => (
          <DottedNameValue {...{ name, value }} />
        ))}
        <Box sx={{ minHeight: "2rem" }} />

      </Grid>
    </Stack>
  );
};
