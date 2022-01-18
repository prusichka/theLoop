import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Slide from "./Slide";
import { slideDescription } from '../../models.js'

const Slider = () => {
  return (
    <>
      <section className="slider">
        <div className="inner">
          <Swiper
            spaceBetween={50}
            modules={[ Pagination ]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            loop
          >
            {slideDescription.map((slide, id) => {
              return (
                <SwiperSlide key={id}>
                  <Slide slideDescription={slide}/>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Slider;