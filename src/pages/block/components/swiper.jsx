import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles/styles.css";
import { EffectFade, Autoplay } from "swiper";

const swiperStyles = [
  {
    imgUrl: "url(./img/1.png)",
  },
  {
    imgUrl: "url(./img/2.png)",
  }
]

const BlockIQSwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        pagination={{
          clickable: false,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        {
          swiperStyles.map((item, index) => (
            <SwiperSlide key={index} style={{ backgroundImage: item.imgUrl }}>
              <div className="swiper-top">Mobile Offers</div>
              <div className="swiper-bottom">
                <div className="first-text">Top off on Mobile Minutes</div>
                <div className="second-text">
                  <span className="second-color">whenever </span>
                  <span className="third-color">wherever </span>
                </div>
                <div className="third-text flex row justify-space-between">
                  <div>DEUTSCHE TEL.</div>
                  <div>August 20 at 10:22 AM</div>
                </div>
              </div>
            </SwiperSlide>
          ))
        }

      </Swiper>
    </>
  );
}

export default BlockIQSwiper