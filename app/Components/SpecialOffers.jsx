"use client"
import { Navigation, Pagination, Scrollbar, A11y, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import slide2 from "../../public/Images/slide2.jpg";
import slide3 from "../../public/Images/slide3.jpg";
import slide4 from "../../public/Images/slide4.jpg";
import slide7 from "../../public/Images/slide7.jpg";
import slide12 from "../../public/Images/slide12.JPG";
import slide8 from "../../public/Images/slide8.jpg";
import sockets from "../../public/Images/Socket.jpg"

// Import Swiper styles
import 'swiper/css/grid';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react';
import Image from 'next/image';
import styles from './SpecialOffers.module.css';

export default function SpecialOffers() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y, Grid]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className={`flex flex-col items-center border-2 rounded ${styles.card}`}>
                    <Image src={slide2} className='object-cover' width={"70px"} style={{ height: "200px" }} alt='slides' />
                    <div className='mt-3 text-center p-2'>
                        <p>Electronic Tools <br />  Company: Changlu <br/> Origin: China <br /> <span className="font-bold" style={{ color: "#006429" }}>$0.00</span></p>
                    </div>
                    <br />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`flex flex-col items-center border-2 rounded ${styles.card}`}>
                    <Image src={slide7} className='object-cover' width={"70px"} style={{ height: "200px" }} alt='slides' />
                    <div className='mt-3 text-center p-2'>
                        <p>VDE Insulation Tools <br />  Company: Changlu <br/> Origin: China <br /> <span className="font-bold" style={{ color: "#006429" }}>$0.00</span></p>
                    </div>
                    <br />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`flex flex-col items-center border-2 rounded ${styles.card}`}>
                    <Image src={sockets} className='object-cover' width={"70px"} style={{ height: "200px" }} alt='slides' />
                    <div className='mt-3 text-center p-2'>
                        <p>Sockets Series <br />  Company: Changlu <br/> Origin: China <br /> <span className="font-bold" style={{ color: "#006429" }}>$0.00</span></p>
                    </div>
                    <br />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`flex flex-col items-center border-2 rounded ${styles.card}`}>
                    <Image src={slide4} className='object-cover' width={"70px"} style={{ height: "200px" }} alt='slides' />
                    <div className='mt-3 text-center p-2'>
                        <p>Pliers Series <br />  Company: Changlu <br/> Origin: China <br /> <span className="font-bold" style={{ color: "#006429" }}>$0.00</span></p>
                    </div>
                    <br />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`flex flex-col items-center border-2 rounded ${styles.card}`}>
                    <Image src={slide3} className='object-cover' width={"70px"} style={{ height: "200px" }} alt='slides' />
                    <div className='mt-3 text-center p-2'>
                        <p>Screwdrive Series <br />  Company: Changlu <br/> Origin: China <br /> <span className="font-bold" style={{ color: "#006429" }}>$0.00</span></p>
                    </div>
                    <br />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`flex flex-col items-center border-2 rounded ${styles.card}`}>
                    <Image src={slide12} className='object-cover' width={"70px"} style={{ height: "200px" }} alt='slides' />
                    <div className='mt-3 text-center p-2'>
                        <p>Cutting Tools<br />  Company: Changlu <br/> Origin: China <br /> <span className="font-bold" style={{ color: "#006429" }}>$0.00</span></p>
                    </div>
                    <br />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`flex flex-col items-center border-2 rounded ${styles.card}`}>
                    <Image src={slide8} className='object-cover' width={"70px"} style={{ height: "200px" }} alt='slides' />
                    <div className='mt-3 text-center p-2'>
                        <p>Wrench Series<br />  Company: Changlu <br/> Origin: China <br /> <span className="font-bold" style={{ color: "#006429" }}>$0.00</span></p>
                    </div>
                    <br />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};
