"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './style.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';
import slide1 from "../../public/Images/slide1.jpg";
import slide2 from "../../public/Images/slide2.jpg";
import slide3 from "../../public/Images/slide3.jpg";
import slide4 from "../../public/Images/slide4.jpg";
import slide5 from "../../public/Images/slide5.JPG";
import slide6 from "../../public/Images/slide6.JPG";
import slide7 from "../../public/Images/slide7.jpg";
import slide8 from "../../public/Images/slide8.jpg";
import slide9 from "../../public/Images/slide9.jpg";
import slide10 from "../../public/Images/slide10.JPG";
import slide11 from "../../public/Images/slide11.JPG";

import Link from 'next/link';



export default function CateSliders() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        initialSlide={3}
      >
        <SwiperSlide>
          <Link href={"/category"}>
            <Image src={slide1}
              className='object-cover'
              width={"100px"}
              style={{ "height": "400px" }}
              alt="slides"
            />
          </Link>

        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/product"}>

            <Image src={slide2}
              alt="slides"
              width={"100px"}
              style={{ "height": "400px" }}
            />
          </Link>

        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/product"}>

            <Image src={slide3}
              alt="slides"
              width={"100px"}
              style={{ "height": "400px" }}
            />
          </Link>

        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/product"}>

            <Image src={slide4}
              alt="slides"
              width={"100px"}
              style={{ "height": "400px" }}
            />
          </Link>

        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/product"}>

            <Image src={slide5}
              alt="slides"
              width={"100px"}
              style={{ "height": "400px" }}
            />
          </Link>

        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/product"}>

            <Image src={slide6}
              alt="slides"
              width={"100px"}
              style={{ "height": "400px" }}
            />
          </Link>

        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/product"}>

            <Image src={slide7}
              alt="slides"
              width={"100px"}
              style={{ "height": "400px" }}
            />
          </Link>

        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/product"}>

            <Image src={slide8}
              alt="slides"
              width={"100px"}
              style={{ "height": "400px" }}
            />
          </Link>

        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/product"}>

            <Image src={slide9}

              width={"100px"}
              style={{ "height": "400px" }}
              alt="slides"
            />
          </Link>

        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/product"}>

            <Image src={slide10}

              className='object-cover'
              width={"100px"}
              style={{ "height": "400px" }}
              alt="slides"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/product"}>

            <Image src={slide11}

              className='object-cover'
              width={"100px"}
              style={{ "height": "400px" }}
              alt="slides"
            />
          </Link>
        </SwiperSlide>
      
       
      </Swiper>
    </>
  );
}
