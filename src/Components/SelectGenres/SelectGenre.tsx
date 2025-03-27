"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import './SelectGenre.css'
import Link from "next/link";
const Genres = [
    { id: 1, en: "action", fa: "اکشن" },
    { id: 2, en: "adventure", fa: "ماجراجویی" },
    { id: 3, en: "comedy", fa: "کمدی" },
    { id: 4, en: "drama", fa: "درام" },
    { id: 5, en: "horror", fa: "ترسناک" },
    { id: 6, en: "romance", fa: "عاشقانه" },
    { id: 7, en: "science fiction", fa: "علمی-تخیلی" },
    { id: 8, en: "fantasy", fa: "فانتزی" },
    { id: 9, en: "thriller", fa: "هیجان‌انگیز" },
    { id: 10, en: "mystery", fa: "معمایی" },
    { id: 11, en: "animation", fa: "انیمیشن" },
    { id: 12, en: "documentary", fa: "مستند" },
    { id: 13, en: "crime", fa: "جنایی" },
    { id: 14, en: "historical", fa: "تاریخی" },
    { id: 15, en: "musical", fa: "موزیکال" },
  ];

export default function SelectGenre() {
  return (
    <div className="p-5 bg-black">
      <h2 className="text-white text-2xl md:text-3xl mb-6 font-yekan">
     
        ژانرها
      </h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={3}
        navigation={{
          nextEl: `.genreSwiper .swiper-button-next`,
          prevEl: `.genreSwiper .swiper-button-prev`,
        }}
        breakpoints={{
          480: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 5, spaceBetween: 20 },
          1024: { slidesPerView: 8, spaceBetween: 25 },
          1280: { slidesPerView: 8, spaceBetween: 30 },
        }}
        className={`px-5 genreSwiper`}
      >
        {Genres.map((genre) => (
          <SwiperSlide key={genre.id}>
            <Link href={'#'} className="bg-[#1a1a1a] rounded-lg p-2 text-center text-white h-[60px] flex items-center justify-center transition-colors duration-300 cursor-pointer hover:bg-[#333]">
              <h3 className="m-0 text-sm font-normal text-white">
                {genre.fa}
              </h3>
            </Link>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
}