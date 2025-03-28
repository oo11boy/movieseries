"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import "./MovieSliderCount.css";
import Link from "next/link";
import { VisibilityOutlined } from "@mui/icons-material";
// Define Movie interface
interface Movie {
  title: string;
  image: string;
}
export const topMovies: Movie[] = [
  {
    title: "Toddler",
    image:
      "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/toddler-portrait.webp",
  },
  {
    title: "Frozen",
    image:
      "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/frzzen.webp",
  },
  {
    title: "Champions’ War",
    image:
      "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2025/02/gameofhero-portrait.webp",
  },
  {
    title: "Titanic",
    image:
      "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/tianic.webp",
  },
  {
    title: "Little Krishna",
    image:
      "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/krishna-portrait-.webp",
  },
  {
    title: "Red Dog",
    image:
      "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/reed-dog.webp",
  },
  {
    title: "Adventure",
    image:
      "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/Adventure-1.webp",
  },
  {
    title: "The Crew",
    image:
      "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/the-crew.webp",
  },
  {
    title: "Synchronic",
    image:
      "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/synchronic-portrait.webp",
  },
  {
    title: "Guilty",
    image:
      "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/guilty-portrait.webp",
  },
];

export default function MovieSliderCount({
  title,
  icon,
}: {
  title: string;
  icon: ReactNode;
}) {
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});
  const [isLoading, setIsLoading] = useState<boolean>(true); // حالت لودینگ اولیه

  // چک کردن لود شدن تصاویر
  const checkImageLoaded = (src: string, index: number): void => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageLoaded((prev) => ({ ...prev, [index]: true }));
    };
  };

  // لود اولیه تصاویر
  useEffect(() => {
    topMovies.forEach((movie, index) => {
      if (!imageLoaded[index]) {
        checkImageLoaded(movie.image, index);
      }
    });

    // وقتی همه تصاویر لود شدند، لودینگ را غیرفعال می‌کنیم
    const allLoaded = topMovies.every((_, index) => imageLoaded[index]);
    if (allLoaded) {
      setIsLoading(false);
    }
  }, [imageLoaded]);

  return (
    <div className="movie-slider">
      <div className="flex items-center justify-between mb-6">
        <div className="flex text-white font-bold  yekanh items-center space-x-2 text-md md:text-3xl ">
          {icon}
          <h2>{title}</h2>
        </div>

        <div className="flex-1 mx-4 h-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-70 rounded-full animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-300 to-transparent opacity-30 scale-95 rounded-full"></div>
        </div>
        <Link
          href="#"
          className="group flex items-center gap-2 text-teal-400 text-sm md:text-lg font-medium bg-teal-900/20 px-4 py-1.5 rounded-full hover:bg-teal-800 hover:text-teal-200 transition-all duration-300 shadow-md"
        >
          <VisibilityOutlined className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
          بیشتر ببینید
        </Link>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={2}
        navigation
        slidesPerGroup={2} 
        initialSlide={10}
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
            <Link href="#" className="slide-content relative">
              {/* نمایش اسکلتون در حالت لودینگ یا وقتی تصویر هنوز لود نشده */}
              {(!imageLoaded[index] || isLoading) && (
                <div className="skeleton rounded-xl w-full h-[290px]  sm:h-[450px] md:h-[400px] lg:h-[400px]"></div>
              )}
              {/* نمایش تصویر وقتی لود شده باشد */}
              <img
                className={`rounded-xl mix-blend-overlay w-full h-[290px]  sm:h-[450px] md:h-[400px] lg:h-[400px] object-cover ${
                  imageLoaded[index] && !isLoading ? "block" : "hidden"
                }`}
                src={movie.image}
                alt={movie.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl"></div>
              <span className="top_ten_numbers iransans">{1 + index}</span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
