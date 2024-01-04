import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "./style.css";

const Slider: React.FC = () => {
  const slidesData = [
    {
      title: "Just do it.",
      text: "Move, Shop, Customise & Celebrate With Us.No matter what you feel like doing today, It’s better as a Member.Join Us",
      thumbnail: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_434,c_limit/3df1f8e5-5ece-4e81-87e6-f8a30c8a3fab/nike-just-do-it.jpg"
    },
    {
      title: "Your Personal Guide to Greatness",
      text: "Get started on your journey with 10% off your favourite gear today when you buy 2 items or more on the Nike App.",
      thumbnail: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_434,c_limit/3df1f8e5-5ece-4e81-87e6-f8a30c8a3fab/nike-just-do-it.jpg"
    },
    {
      title: "Join the Community",
      text: "Once you’re in the app, you’re a Nike Member. So you’ll have first access to the latest gear - plus a front-row seat to Nike experiences.",
      thumbnail: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_434,c_limit/3df1f8e5-5ece-4e81-87e6-f8a30c8a3fab/nike-just-do-it.jpg"
    },
  ];
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        centeredSlides={true}
        navigation={true}
        pagination={true}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="home-slider"
      >
        {slidesData.map((item) => {
          return (
            <SwiperSlide>
              <div className="slide__banner container px-12 flex justify-between items-center">
                <div className="slide__text w-1/2">
                  <h2 className="text-2xl relative inline-block">
                    {item.title}
                    <span className="absolute w-1/2 h-0.5 left-0 bottom-0 bg-black-950"></span>
                  </h2>
                  <h3 className="mt-4">{item.text}</h3>
                </div>
                <div className={"slide__thumbnail w-full"}>
                  <img className="w-full" src={item.thumbnail} alt="Thumbnail" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
