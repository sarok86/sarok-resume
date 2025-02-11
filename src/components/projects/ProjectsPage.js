"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import project1 from "@/app/image/project1.jpg";
import project2 from "@/app/image/project2.jpg";
import project3 from "@/app/image/project3.jpg";

import "@/i18n";
import { useTranslation } from "react-i18next";

// import React, { useState } from 'react';
import { Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { FaArrowRightLong } from "react-icons/fa6";

export default function ProjectsPage() {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full  absolute  flex flex-col justify-center items-start text-start px-12 mb-10  ">
      <h1 className="text-7xl my-12 text-[gray] max-[630px]:text-5xl ">
        {t("projectPage.title")}
      </h1>

      <div className=" w-full h-full grid-flow-col grid-rows-3 grid grid-cols-3 pb-12 ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          className="bg-[gray] w-full h-full static col-span-3 row-span-3 "
        >
          <SwiperSlide>
            <Link href="https://demo.inic.ac/" target="_blank">
              <Image
                src={project1}
                alt="Picture of the author"
                className="w-full h-full flex  justify-between items-center text-center"
              />
              <p
                className="max-[760px]:text-3xl absolute bottom-12 max-[600px]:bottom-8 left-14 text-5xl text-[red] flex  justify-between items-center text-center
            "
              >
                Inic
                <FaArrowRightLong className="p-1 m-3   transition delay-150 duration-500 ease-in-out hover:translate-x-2 hover:scale-110 " />
              </p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Link href="https://lmh.clinic/" target="_blank">
              <Image
                src={project2}
                alt="Picture of the author"
                className="w-full h-full  "
              />
              <p className=" max-[760px]:text-3xl  max-[600px]:bottom-8 absolute bottom-12 left-12 text-5xl text-[red] flex  justify-between items-center text-center">
                Lmh-Clinic
                <FaArrowRightLong className="p-1 m-3   transition delay-150 duration-500 ease-in-out hover:translate-x-2 hover:scale-110 " />
              </p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="https://test.xcuts.co.uk/" target="_blank">
              <Image
                src={project3}
                alt="Picture of the author"
                className="w-full h-full "
              />
              <p className=" max-[760px]:text-3xl max-[600px]:bottom-8 absolute bottom-12 left-12 text-5xl text-[red] flex  justify-between items-center text-center">
                Xcuts
                <FaArrowRightLong className="p-1 m-3   transition delay-150 duration-500 ease-in-out hover:translate-x-2 hover:scale-110 " />
              </p>
            </Link>
          </SwiperSlide>
        </Swiper>

        {/* <div className="w-full col-span-3 ">
          <Link href="https://demo.inic.ac/" target="_blank">
            <Image
              src={project1}
              alt="Picture of the author"
              className="w-full h-90 p-2 max-[630px]:h-40"
            />
          </Link>
        </div>
        <div className="w-full col-span-3" target="_blank">
          <Link href="https://lmh.clinic/">
            <Image
              src={project2}
              alt="Picture of the author"
              className="w-full h-90 p-2 max-[630px]:h-40"
            />
          </Link>
        </div>
        <div className="w-full col-span-3 ">
          <Link href="https://test.xcuts.co.uk/" target="_blank">
            <Image
              src={project3}
              alt="Picture of the author"
              className="w-full h-90 p-2 max-[630px]:h-40"
            />
          </Link>
        </div> */}
      </div>
    </div>
  );
}
