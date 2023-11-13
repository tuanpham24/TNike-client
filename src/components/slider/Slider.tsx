import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

const slideData = [
  {
    id: 1,
    path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwVDFMK3B2Oo-Hni4AEshVsXCus2uPkjMqxt38qg4k0OSv8my8Rc1AO2qwIqtdj4w55HU&usqp=CAU",
    text: "Slide 1",
  },
  {
    id: 2,
    path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknbMqRuGUatoBrsp00ivvrzffqpiJaLUHZr1_27aq6nOKgab4SNZOFyPHCjI8ZUj8pFY&usqp=CAU",
    text: "Slide 2",
  },
  {
    id: 3,
    path: "https://img.freepik.com/fotos-premium/roupas-esportivas-com-fumaca-magica-girando-em-torno-de-sapatos-individuais-em-designs-criativos-e-imprevisiveis_124507-142121.jpg",
    text: "Slide 3",
  },
];

const Slider: React.FC = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slideData.map((data) => {
          return (
            <SwiperSlide>
              <img src={data.path} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
