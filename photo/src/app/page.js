"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar,Autoplay, Navigation,  } from "swiper/modules";
import "swiper/css/navigation"
import "swiper/css/scrollbar"
import "swiper/css";
import image1c from "../../public/img/homepageimages/image1c.jpg";
import shots from "../../public/img/homepageimages/shots.jpg";
import baba from "../../public/img/homepageimages/baba.jpg";
import short from "../../public/img/events/short.jpg"
import babyshowershot2 from "../../public/img/homepageimages/babyshowershot2.jpg";
import thirtythbirdthay from "../../public/img/homepageimages/thirtythbirdthay.jpg";
import thirtybirthday from "../../public/img/homepageimages/thirtybirthday.jpg";
import babyshowershot1 from "../../public/img/homepageimages/babyshowershot1.jpg";
import remembrance from "../../public/img/homepageimages/remembrance.jpg";
import zoe2 from "../../public/img/Grad/zoe2.jpg";
import brandphotoshoot from "../../public/img/studio/brandphotoshoot.jpg";
import sal from "../../public/img/lifestyles/sal.jpg";

import long from "../../public/img/homepageimages/long.jpg";
import ContactLink from "@/Component/ContactLink";
const element = (
  <svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 448 512">
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
);

export default function Home() {
  return (
    <>
      <Swiper
      scrollbar={{
        hide: false,
      }}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Scrollbar, Autoplay,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
          <Image className="w-screen" src={long} alt="wedding photography" />
        </SwiperSlide>
        <SwiperSlide >
          <Image className="w-screen" src={short} alt="Event photography" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-screen" src={thirtybirthday} alt="Event photography" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-screen" src={thirtythbirdthay} alt="Event photography" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image  className="w-full absolute flex flex-col items-center mt- justify-center" src={image1c} alt="" />
          {/* <div className="absolute m-auto bottom flex items-center justify-center text-center">
            <div className="color-white text-center">
              <p className="text-xl font-bold text-white w-4/5 mx-auto">
                Treasure your moments forever with our quality portrait, family,
                lifestyle, and event photography services. We cater to
                individuals and local businesses around New York and New Jersey.
              </p>
              <Link
                onClick={() => {
                  navigate("/contact");
                }}
              >
                <button className="border">Book A session</button>
              </Link>
            </div>
          </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-screen" src={shots} alt="Wedding photoshoot" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-screen" src={babyshowershot1} alt="BabyShower photoShoot" />
        </SwiperSlide>
       
        <SwiperSlide>
          <Image className="w-screen" src={babyshowershot2} alt="BabyShower photoshoot" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-screen" src={remembrance} alt="Family photoshoot" />
        </SwiperSlide>
       
      </Swiper>

      <div className="w-100%  absolute -z-[1] md:relative md:z-[1] justify-center m-auto h-[75rem]">
 
        <h3 className="text-center  text-bold text-3xl mt-5 mb-10">
          A Glimpse Into My Artistic Narrative
        </h3>

        <div className="md:flex  justify-center m-auto">
          <div className=" md:relative   md:top-36 ">
            <div className="container">
              <Image
               
                className=" rounded-lg w-screen md:w-96 md:h-auto  image h-auto"
                src={sal}
                alt="Lifestlye Photography"
              />

              <div className="middle">
                <Link
                  className="text-4xl hover:underline text-bold"
                  href="/Lifestyle"
                >
                  Lifestyle
                </Link>
              </div>
            </div>

            <div className="container  ">
              <Image
               
                className="rounded-lg w-screen  mt-4   md:w-96 md:h-auto image h-auto"
                src={baba}
                alt="Event Photography"
              />
              <div className="middle">
                <Link
                  className="text-4xl hover:underline text-bold"
                  href="/Events"
                
                >
                  Event
                </Link>
              </div>
            </div>
          </div>
          <div className="md:ml-6 ">
            <div className="container">
              <Image
               
                className="rounded-lg w-screen mt-2 md:mt-0 image md:w-96 md:h-auto h-auto"
                src={brandphotoshoot}
                alt="Studio photography"
              />
              <div className="middle">
                <Link
                  className="text-4xl hover:underline text-bold"
                  href="/Studio"
                >
                  Studio
                </Link>
              </div>
            </div>

            <div className="container">
              <Image
               
                className="rounded-lg w-screen  mt-4 md:w-96 md:h-auto image h-auto"
                src={zoe2}
                alt="Buisness photography"
              />
              <div className="middle">
                <Link
                  className="text-4xl hover:underline text-bold"
                  href="/Graduation"
                >
                  Graduation And Prom
                </Link>
              </div>
            </div>
          </div>
        </div>
        <ContactLink/>
        <footer className=" mt-2 md:relative p-4  md:top-40 flex  bg-blue-300  ">
          <div className="justify-center self-center m-auto text-center w-auto ">
            <p>kennyStudios © 2023 by. All rights Reserved.</p>
            <p>kennyStudio is located in Orange Nj and Shoots in NJ/NYC area</p>
            <a
              href="https://www.instagram.com/kennys_studio/"
              className="  flex justify-center mt-3 text-3xl "
              target="blank"
            >
              {element}
            </a>
          </div>
        </footer>
        
      </div>
    </>
  );
}
