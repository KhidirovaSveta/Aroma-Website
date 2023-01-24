import React, { useEffect } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import axios from 'axios';
import "swiper/css";
import "swiper/css/pagination";

import "./styles.scss";

import { Pagination } from "swiper";
import { useState } from 'react';

const Carousel = () => {
    const [carousel, setCarousel] = useState([])

    useEffect(() => {
       axios.get(`http://localhost:8080/`).then((data) => setCarousel(data.data))
    }, [])
    
  return (
      <div id='Carousel'>
        <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
        {carousel.map((carus) => {
            return(
                <SwiperSlide> 
                    <div className="img">
                    <img src={carus.img} alt="" />
                    <div className="text">
                        <p>{carus.type}</p>
                        <h2>{carus.name}</h2>
                        <span>{`$${carus.price}`}</span>
                    </div>
                    </div>
                
                </SwiperSlide>
            )
        })}

      </Swiper>
    </>
    </div>
  )
}

export default Carousel