// این کامپوننت اصلی است که اسلایدر ژانرها را مدیریت می‌کند، شامل تنظیمات Swiper و رندر اسلایدها
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import './SelectGenre.css';
import GenreHeader from "./GenreHeader";
import GenreSlide from "./GenreSlide";

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

export default function SelectGenreContainer() {
  return (
    <div className="py-5 cbox bg-black">
      <GenreHeader />
      <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={3.4}
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
        className="px-5 genreSwiper"
      >
        {Genres.map((genre) => (
          <SwiperSlide key={genre.id}>
            <GenreSlide genre={genre} />
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
}