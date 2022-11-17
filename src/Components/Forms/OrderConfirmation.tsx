import { Text, Variant } from "../BaseComponents/DisplayingComponents/Text";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { BasicButton } from "../BaseComponents/Inputs/Buttons/BasicButton";
import { DottedNameValue } from "../BaseComponents/DisplayingComponents/DottedNameValue";

export const OrderConfirmation = () => {
  return (
    <Stack spacing={2} sx={{ width: "40%" }}>
      <Grid container justifyContent="center">
        <Text
          {...{
            fontWeight: 700,
            variant: Variant.h5,
            text: "Подтверждение заказа",
          }}
        />
        <Box sx={{ minHeight: "4rem" }} />
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

        <Box sx={{ display: "flex", width: "100%" }}>
          <Box sx={{ flexShrink: 0, color: "#F6B700" }}>
            <a style={{ fontSize: "12px", color: "#F6B700" }} href="#">
              У меня есть сертификат
            </a>
          </Box>
          <Box sx={{ width: "100%" }} />
          <Box sx={{ flexShrink: 0, color: "#F6B700" }}>
            <a style={{ fontSize: "12px", color: "#F6B700" }} href="#">
              Проверить наличие бонусов
            </a>
          </Box>
        </Box>
        <Box sx={{ minHeight: "2rem" }} />

        <Box sx={{ display: "flex", width: "100%" }}>
          <Box sx={{ flexShrink: 0 }}>
            <Text
              {...{
                fontWeight: 700,
                variant: Variant.subtitle1,
                text: "Вам доступно:",
              }}
            />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <Text {...{ variant: Variant.subtitle1, text: "1000 бонусов" }} />
          </Box>
          <Box sx={{ width: "100%" }} />
          <Box sx={{ flexShrink: 0, color: "#F6B700" }}>
            <a style={{ fontSize: "12px", color: "#F6B700" }} href="#">
              Списать бонусы
            </a>
          </Box>
        </Box>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box sx={{ flexShrink: 0 }}>
            <Text
              {...{
                fontWeight: 700,
                variant: Variant.subtitle1,
                text: "Остаток бонусов после списания:",
              }}
            />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <Text {...{ variant: Variant.subtitle1, text: "800" }} />
          </Box>
          <Box sx={{ width: "100%" }} />
        </Box>
        <Box sx={{ minHeight: "3rem" }} />
        {[
          { name: "Скидка за сертификат:", value: "1000 руб" },
          { name: "Скидка за бонусы:", value: "200 руб" },
        ].map(({ name, value }) => (
          <DottedNameValue {...{ name, value }} />
        ))}
        <Box sx={{ minHeight: "3rem" }} />
        <DottedNameValue
          {...{
            fontWeight: 700,
            variant: Variant.h5,
            name: "ИТОГО К ОПЛАТЕ",
            value: "900 руб",
          }}
        />
        <Box sx={{ minHeight: "5rem" }} />
        <Text
          {...{
            fontWeight: 700,
            variant: Variant.h6,
            text: "Выберите способ оплаты",
          }}
        />
        <Box sx={{ minHeight: "16rem" }} />
        <BasicButton {...{ onClick: () => {} }}>  
          <Box sx={{ display: "flex", width: "100%" }}>
            <Box sx={{ flexShrink: 0 }}>
              <Text
                {...{
                  fontWeight: 700,
                  variant: Variant.h6,
                  text: "ПЕРЕЙТИ К ОПЛАТЕ",
                }}
              />
            </Box>
            <Box sx={{ width: "100%" }} />
            <Box sx={{ flexShrink: 0 }}>
              <Text {...{fontWeight:700, variant: Variant.h6, text: "900 руб" }} />
            </Box>
          </Box>
        </BasicButton>
      </Grid>
    </Stack>
  );
};
