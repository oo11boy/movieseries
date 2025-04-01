// این کامپوننت اصلی است که اسلایدر فیلم‌ها و سریال‌ها را مدیریت می‌کند، شامل منطق لود تصاویر، حالت‌ها و نویگیشن
"use client";
import React, { useState, useEffect, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { useRouter } from "next/navigation";
import { Movie } from "@/lib/types";
import SliderHeader from "./SliderHeader";
import MovieSlide from "./MovieSlide";


export default function MovieSeriesSliderContainer({
  title,
  topMovies,
  icon,
}: {
  title: string;
  topMovies: Movie[];
  icon: ReactNode;
}) {
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeSlide, setActiveSlide] = useState<number | null>(null);
  const router = useRouter();

  const checkImageLoaded = (src: string, index: number): void => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageLoaded((prev) => ({ ...prev, [index]: true }));
    };
    img.onerror = () => {
      setImageLoaded((prev) => ({ ...prev, [index]: true }));
    };
  };

  useEffect(() => {
    topMovies.forEach((movie, index) => {
      if (!imageLoaded[index]) {
        checkImageLoaded(movie.image, index);
      }
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    const allLoaded = topMovies.every((_, index) => imageLoaded[index]);
    if (allLoaded) {
      setIsLoading(false);
    }

    return () => clearTimeout(timer);
  }, [imageLoaded, topMovies]);

  const handlePlayClick = (movieTitle: string) => {
    router.push(`../movie/${movieTitle}`);
  };

  const handleImageClick = (index: number) => {
    setActiveSlide(activeSlide === index ? null : index);
  };

  return (
    <div className="py-5 cbox">
      <SliderHeader title={title} icon={icon} onMoreClick={() => router.push("#")} />
      <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={2.2}
        slidesPerGroup={2}
        navigation
        initialSlide={0}
        className="overflow-visible"
        breakpoints={{
          640: { slidesPerView: 2.2, slidesPerGroup: 2, spaceBetween: 15 },
          768: { slidesPerView: 3.2, slidesPerGroup: 3, spaceBetween: 15 },
          1024: { slidesPerView: 4.2, slidesPerGroup: 4, spaceBetween: 15 },
          1200: { slidesPerView: 5.2, slidesPerGroup: 5, spaceBetween: 15 },
          1324: { slidesPerView: 6.2, slidesPerGroup: 6, spaceBetween: 15 },
        }}
      >
        {topMovies.map((movie: Movie, index: number) => (
          <SwiperSlide key={index} className="overflow-visible">
            <MovieSlide
              movie={movie}
              index={index}
              isLoading={isLoading}
              imageLoaded={imageLoaded[index] || false}
              isActive={activeSlide === index}
              onImageClick={handleImageClick}
              onPlayClick={handlePlayClick}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}