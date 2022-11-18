import React from "react";
import Swiper from "./Swiper";
import { OrderConfirmationForm } from "./Components/Modules/Booking/OrderConfirmationForm";
import Autorization, { TAutorizData } from "./Components/Forms/Autorization";
import { Adventures } from "./Components/Modules/Adventures/Adventures";
import {
  BonusesForm,
  TBonusesConfirmation,
} from "./Components/Modules/Booking/BonusesForm";
import {
  CertificateForm,
  TCertificate,
} from "./Components/Modules/Booking/CertificateForm";
import PhoneConfirmationForm, {
  TPhoneConfirmation,
} from "./Components/Modules/Booking/PhoneConfirmationForm";
import { SuccessfulCompletForm } from "./Components/Modules/Booking/SuccessfulCompletForm";
import {
  TicketDataForm,
  TTicketData,
} from "./Components/Modules/Booking/TicketDataForm";

function App() {
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
      <Swiper></Swiper>
      <Autorization
        {...{
          autorization: (adata: TAutorizData): void => {
            console.log("autorization :>> ", adata);
          },
        }}
      ></Autorization>
      <TicketDataForm
        {...{
          getTicketData: (ticketData: TTicketData): void => {
            console.log("ticketData :>> ", ticketData);
          },
        }}
      ></TicketDataForm>
      <br></br>
      <br></br>
      <br></br>
      <CertificateForm
        {...{
          getCertificate: (certificate: TCertificate): void => {
            console.log("certificate :>> ", certificate);
          },
        }}
      ></CertificateForm>
      <br></br>
      <br></br>
      <br></br>
      <PhoneConfirmationForm
        {...{
          getPhoneConfirmation: (
            phoneConfirmation: TPhoneConfirmation
          ): void => {
            console.log("phoneConfirmation :>> ", phoneConfirmation);
          },
        }}
      ></PhoneConfirmationForm>
      <br></br>
      <br></br>
      <br></br>
      <BonusesForm
        {...{
          getBonus: (bonus: TBonusesConfirmation): void => {
            console.log("bonus :>> ", bonus);
          },
        }}
      ></BonusesForm>
      <br></br>
      <br></br>
      <br></br>
      <OrderConfirmationForm
        {...{ order, goPayment: () => console.log("order :>> ", order) }}
      ></OrderConfirmationForm>
      <br></br>
      <br></br>
      <br></br>
      <SuccessfulCompletForm {...{ order }}></SuccessfulCompletForm>
      {/* <Adventures></Adventures> */}
    </>
  );
}

export default App;
