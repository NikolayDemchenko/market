import React from "react";
import {Calendar} from "./Calendar";
import { OrderConfirmationForm } from "./Components/Modules/Booking/OrderConfirmationForm";
import Autorization, { TAutorizData } from "./Components/Forms/Autorization";
import { Catalog } from "./Components/Modules/Catalog/Catalog";
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
import { Booking } from "./Components/Modules/Booking/Booking";

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
      {/* <Booking></Booking>      */}
      <Catalog></Catalog>
    </>
  );
}

export default App;
