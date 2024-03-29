// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./swiper-styles.css";
// import required modules
import { CalendarCard } from "./CalendarCard";
import React from "react";
import {BaseText, Variant } from "../../Components/BaseComponents/Outputs/BaseText";



export function dateRange(startDate, endDate, steps = 1) {
  const dateArray = [];
  let currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
    dateArray.push(new Date(currentDate));
    // Use UTC date to prevent problems with time zones and DST
    currentDate.setUTCDate(currentDate.getUTCDate() + steps);
  }

  return dateArray;
}

const date = new Date();
const dateToISO = date.toISOString();
const day = date.getDay()

function getWeekDay(date) {
  const weekDays = [
    'ВС',
    'ПН',
    'ВТ',
    'СР',
    'ЧТ',
    'ПТ',
    'СБ'
  ];
  
  return weekDays[date];
}


export  function Calendar() {

  // Передать в качестве второго аргумента дату последнего доступного билета
  const dates = dateRange(dateToISO.substr(0, 10), '2023-12-29');
const [swiper,setSwiper]=React.useState()

swiper&&console.log(swiper.activeIndex)

  // rest1c(
  //   'GET_SLOTS_CALENDAR', 
  //   {
  //     SESSION_ID: "",
  //     POST_ID: "",
  //     SKU_ID: "65a6c963-3400-11ec-8122-001999b9620c",
  //     BEGIN_DATE: "2022-11-18T00:00:00",
  //     END_DATE: "2023-01-17T00:00:00",
  //   },
  //   (response)=>{
  //     dates = response.SKU_LIST[0].DATE_LIST;
  //   }
  // )

  return (
    <>
      <BaseText
        {...{
          fontWeight: 600,
          variant: Variant.h6,
          text: 'Выберите доступную дату:',
        }}
      />
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={12}
        spaceBetween={3}
        isBeginning={true}
        onSlideChange={(swiper) =>setSwiper(swiper) }
        // pagination={{
        //   clickable: true,
        // }}
        // navigation
        // breakpoints={{
        //   "@0.00": {
        //     slidesPerView: 1,
        //     spaceBetween: 10,
        //   },
        //   "@0.75": {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   "@1.00": {
        //     slidesPerView: 3,
        //     spaceBetween: 40,
        //   },
        //   "@1.50": {
        //     slidesPerView: 4,
        //     spaceBetween: 50,
        //   },
        // }}
        // className="mySwiper"
      >
        {
          dates.map((dateItem, index) => 
            <SwiperSlide key={index}>   
              <CalendarCard { ...{index, date: dateItem.getDate(), weekDay: getWeekDay(dateItem.getDay()) } } ></CalendarCard>
            </SwiperSlide>
          )
        } 
      </Swiper>
    </>
  );
}