import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swiper-styles.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>        
            Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1
        </SwiperSlide>
        <SwiperSlide>        
            Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1
        </SwiperSlide>
        <SwiperSlide>        
            Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1
        </SwiperSlide>
        <SwiperSlide>        
            Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1
        </SwiperSlide>
        <SwiperSlide>        
            Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1
        </SwiperSlide>
        <SwiperSlide>        
            Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1
        </SwiperSlide>
        <SwiperSlide>        
            Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1
        </SwiperSlide>
        <SwiperSlide>        
            Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1
        </SwiperSlide>
        <SwiperSlide>        
            Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1Slide 1
        </SwiperSlide>
      </Swiper>
    </>
  );
}