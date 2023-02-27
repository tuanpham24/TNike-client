import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Slide() {

  const [slideItems, setSlideItems] = useState([]);

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="slider"
      >
        <SwiperSlide>
          <p>slide 1</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>slide 1</p>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
