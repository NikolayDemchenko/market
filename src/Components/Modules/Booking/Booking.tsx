import React from "react";
import { Calendar } from "../../../Calendar";
import { BonusesForm, TBonusesConfirmation } from "./BonusesForm";
import { CertificateForm, TCertificate } from "./CertificateForm";
import { OrderConfirmationForm } from "./OrderConfirmationForm";
import PhoneConfirmationForm, { TPhoneConfirmation } from "./PhoneConfirmationForm";
import { SuccessfulCompletForm } from "./SuccessfulCompletForm";
import { TicketDataForm, TTicketData } from "./TicketDataForm";






export function Booking() {
  const order = {
    bookingName: `Кино на крыше "Маленькая мисс Счастье"`,
    bookingTime: "21:00",
    ticketAmount: "5 шт",
    price: "500 руб.",
    summ: "1800 руб.",
    name: "Васян",
    phone: "+7(911)111-11-11",
    email: "info@hslon.ru",
    allBonuses: "5000 бонусов",
    remainingBonuses: "4800 бонусов",
    certificateDiscount: "1000 руб.",
    bonusDiscount: "1200 руб.",
    totalPay: "1100 руб.",
  };

  return (
    <>
      <Calendar></Calendar>
      <TicketDataForm
        {...{
          getTicketData: (ticketData: TTicketData): void => {
            console.log("ticketData :>> ", ticketData);
          },
        }}
      ></TicketDataForm>

      <CertificateForm
        {...{
          getCertificate: (certificate: TCertificate): void => {
            console.log("certificate :>> ", certificate);
          },
        }}
      ></CertificateForm>

      <PhoneConfirmationForm
        {...{
          getPhoneConfirmation: (
            phoneConfirmation: TPhoneConfirmation
          ): void => {
            console.log("phoneConfirmation :>> ", phoneConfirmation);
          },
        }}
      ></PhoneConfirmationForm>

      <BonusesForm
        {...{
          getBonus: (bonus: TBonusesConfirmation): void => {
            console.log("bonus :>> ", bonus);
          },
        }}
      ></BonusesForm>
      <OrderConfirmationForm
        {...{ order, goPayment: () => console.log("order :>> ", order) }}
      ></OrderConfirmationForm>
      <SuccessfulCompletForm {...{ order }}></SuccessfulCompletForm>
    </>
  );}


