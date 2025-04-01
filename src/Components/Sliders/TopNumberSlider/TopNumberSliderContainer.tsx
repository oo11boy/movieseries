// این کامپوننت اصلی است که اسلایدر برتر فیلم‌ها را مدیریت می‌کند، شامل منطق لود تصاویر، حالت‌ها و نویگیشن
"use client";
import React, { useState, useEffect, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import "./TopNumberSlider.css";
import { Movie } from "@/lib/types";
import { topMovies } from "@/lib/Json";
import SliderHeader from "./SliderHeader";
import MovieSlide from "./MovieSlide";

export default function TopNumberSliderContainer({
  title,
  icon,
}: {
  title: string;
  icon: ReactNode;
}) {
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const checkImageLoaded = (src: string, index: number): void => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageLoaded((prev) => ({ ...prev, [index]: true }));
    };
  };

  useEffect(() => {
    topMovies.forEach((movie, index) => {
      if (!imageLoaded[index]) {
        checkImageLoaded(movie.image, index);
      }
    });

    const allLoaded = topMovies.every((_, index) => imageLoaded[index]);
    if (allLoaded) {
      setIsLoading(false);
    }
  }, [imageLoaded]);

  return (
    <div className="py-5 cbox">
      <SliderHeader title={title} icon={icon} />
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={2}
        navigation
        slidesPerGroup={2}
        initialSlide={0}
        breakpoints={{
          640: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
          1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
          1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
          1324: { slidesPerView: 6, slidesPerGroup: 6, spaceBetween: 10 },
        }}
      >
        {topMovies.map((movie: Movie, index: number) => (
          <SwiperSlide key={index}>
            <MovieSlide movie={movie} index={index} isLoading={isLoading} imageLoaded={imageLoaded[index] || false} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}