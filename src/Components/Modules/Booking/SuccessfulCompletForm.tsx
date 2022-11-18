import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { Text, Variant } from "../../BaseComponents/DisplayingComponents/Text";
import { DottedNameValue } from "../../BaseComponents/DisplayingComponents/DottedNameValue";
import { TOrder } from "./OrderConfirmationForm";
export const SuccessfulCompletForm = ({order}:{order:TOrder}) => {
  return (
    <Stack spacing={2} >
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
            text: order.bookingName,
          }}
        />
        <Box sx={{ minHeight: "3rem" }} />
        {[
          { name: "Время брони:", value: order.bookingTime },
          { name: "Количество билетов:", value:order.ticketAmount },
          { name: "Цена билета:", value: order.price },
          { name: "Сумма:", value:order.summ },
        ].map(({ name, value },key) => (
          <DottedNameValue {...{key, name, value }} />
        ))}

        <Box sx={{ minHeight: "2rem" }} />
        {[
          { name: "Имя:", value:order.name },
          { name: "Номер телефона:", value: order.phone },
          { name: "E-mail:", value: order.email },
        ].map(({ name, value },key) => (
          <DottedNameValue {...{key, name, value }} />
        ))}
        <Box sx={{ minHeight: "2rem" }} />

      </Grid>
    </Stack>
  );
};
