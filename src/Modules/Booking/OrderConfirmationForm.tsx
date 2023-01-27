import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { BaseText, Variant } from "../../Components/BaseComponents/Outputs/BaseText";
import { DottedNameValue } from "../../Components/BaseComponents/Outputs/DottedNameValue";
import { BasicButton } from "../../Components/BaseComponents/Inputs/Buttons/Buttons";


export type TOrder = {
  bookingName: string;
  bookingTime: string;
  ticketAmount: string;
  price: string;
  summ: string;
  name: string;
  phone: string;
  email: string;
  allBonuses: string;
  remainingBonuses: string;
  certificateDiscount: string;
  bonusDiscount: string;
  totalPay: string;
};
export const OrderConfirmationForm = ({
  order,
  goPayment,
}: {
  order: TOrder;
  goPayment: () => void;
}) => {
  return (
    <Stack spacing={2} >
      <Grid container justifyContent="center">
        <BaseText
          {...{
            fontWeight: 700,
            variant: Variant.h5,
            text: "Подтверждение заказа",
          }}
        />
        <Box sx={{ minHeight: "4rem" }} />
        <BaseText
          {...{
            fontWeight: 700,
            variant: Variant.h6,
            text: order.bookingName,
          }}
        />
        <Box sx={{ minHeight: "3rem" }} />
        {[
          { name: "Время брони:", value: order.bookingTime },
          { name: "Количество билетов:", value: order.ticketAmount },
          { name: "Цена билета:", value: order.price },
          { name: "Сумма:", value: order.summ },
        ].map(({ name, value }, key) => (
          <DottedNameValue {...{ key, name, value }} />
        ))}

        <Box sx={{ minHeight: "2rem" }} />
        {[
          { name: "Имя:", value: order.name },
          { name: "Номер телефона:", value: order.phone },
          { name: "E-mail:", value: order.email },
        ].map(({ name, value }, key) => (
          <DottedNameValue key={key} {...{ name, value }} />
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
            <BaseText
              {...{
                fontWeight: 700,
                variant: Variant.subtitle1,
                text: "Вам доступно:",
              }}
            />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <BaseText {...{ variant: Variant.subtitle1, text: order.allBonuses }} />
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
            <BaseText
              {...{
                fontWeight: 700,
                variant: Variant.subtitle1,
                text: "Остаток бонусов после списания:",
              }}
            />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <BaseText
              {...{ variant: Variant.subtitle1, text: order.remainingBonuses }}
            />
          </Box>
          <Box sx={{ width: "100%" }} />
        </Box>
        <Box sx={{ minHeight: "3rem" }} />
        {[
          { name: "Скидка за сертификат:", value: order.certificateDiscount },
          { name: "Скидка за бонусы:", value: order.bonusDiscount },
        ].map(({ name, value }, key) => (
          <DottedNameValue {...{ key, name, value }} />
        ))}
        <Box sx={{ minHeight: "3rem" }} />
        <DottedNameValue
          {...{
            fontWeight: 700,
            variant: Variant.h5,
            name: "ИТОГО К ОПЛАТЕ",
            value: order.totalPay,
          }}
        />
        <Box sx={{ minHeight: "5rem" }} />
        <BaseText
          {...{
            fontWeight: 700,
            variant: Variant.h6,
            text: "Выберите способ оплаты",
          }}
        />
        <Box sx={{ minHeight: "16rem" }} />
        <BasicButton {...{ onClick: goPayment }}>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Box sx={{ flexShrink: 0 }}>
              <BaseText
                {...{
                  fontWeight: 700,
                  variant: Variant.h6,
                  text: "ПЕРЕЙТИ К ОПЛАТЕ",
                }}
              />
            </Box>
            <Box sx={{ width: "100%" }} />
            <Box sx={{ flexShrink: 0 }}>
              <BaseText
                {...{
                  fontWeight: 700,
                  variant: Variant.h6,
                  text: order.totalPay,
                }}
              />
            </Box>
          </Box>
        </BasicButton>
      </Grid>
    </Stack>
  );
};
