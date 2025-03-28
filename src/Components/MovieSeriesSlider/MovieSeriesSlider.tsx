"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { useRouter } from "next/navigation"; // برای App Router
import AddIcon from "@mui/icons-material/Add";
import { VisibilityOutlined } from "@mui/icons-material";
import { Movie } from "@/lib/types";

export default function MovieSeriesSlider({
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

  // فانکشن برای نمایش/مخفی کردن اطلاعات با کلیک روی تصویر
  const handleImageClick = (index: number) => {
    setActiveSlide(activeSlide === index ? null : index);
  };

  return (
    <div className="py-5 cbox">
      {/* عنوان، خط تیره و دکمه بیشتر ببینید */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex text-white font-bold yekanh items-center space-x-2 text-md md:text-3xl">
          {icon}
          <h2>{title}</h2>
        </div>

        <div className="flex-1 mx-4 h-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-70 rounded-full animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-300 to-transparent opacity-30 scale-95 rounded-full"></div>
        </div>
        <button
          onClick={() => router.push("#")}
          className="group flex items-center gap-2 text-teal-400 text-sm md:text-lg font-medium bg-teal-900/20 px-4 py-1.5 rounded-full hover:bg-teal-800 hover:text-teal-200 transition-all duration-300 shadow-md"
        >
          <VisibilityOutlined className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
          بیشتر ببینید
        </button>
      </div>

      {/* اسلایدر */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={2}
        slidesPerGroup={2}
        navigation
        initialSlide={0}
        className="overflow-visible"
        breakpoints={{
          640: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
          1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 10 },
          1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 10 },
          1324: { slidesPerView: 6, slidesPerGroup: 6, spaceBetween: 10 },
        }}
      >
        {topMovies.map((movie: Movie, index: number) => (
          <SwiperSlide key={index} className="overflow-visible">
            <div className="relative flex flex-col items-center group">
              {/* اسکلتون در حالت لودینگ */}
              {(!imageLoaded[index] || isLoading) && (
                <div className="bg-gray-800 rounded-xl w-full h-[290px] sm:h-[450px] md:h-[400px] lg:h-[400px] relative overflow-hidden animate-pulse">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer"></div>
                </div>
              )}
              {/* تصویر و اطلاعات فیلم */}
              <div
                className={`relative w-full transition-transform duration-500 ease-in-out ${
                  imageLoaded[index] && !isLoading ? "block" : "hidden"
                }`}
                onClick={() => handleImageClick(index)} // اضافه کردن کلیک روی کل کارت
              >
                <img
                  className="rounded-xl w-full h-[290px] sm:h-[450px] md:h-[400px] lg:h-[400px] object-cover transition-opacity duration-300"
                  src={movie.image}
                  alt={movie.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* اطلاعات اضافی */}
                <div
                  className={`absolute bg-[#00000094] inset-0 flex flex-col justify-end p-4 transition-opacity duration-300 ${
                    activeSlide === index
                      ? "opacity-100"
                      : "opacity-0 md:group-hover:opacity-100"
                  }`}
                >
                  <h3 className="text-sm md:text-xl my-2 font-bold text-white">{movie.title}</h3>
                  <ul className="flex gap-2 text-sm my-2 text-gray-300">
                    <li>{movie.genre}</li>
                    <li>•</li>
                    <li>{movie.year}</li>
                  </ul>
                  <p className="text-sm hidden md:flex text-gray-400 my-2">{movie.description}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <button className="bg-[#444] p-1 sm:p-2 text-white rounded-lg">
                      <AddIcon />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // جلوگیری از فعال شدن handleImageClick
                        handlePlayClick(movie.title);
                      }}
                      className="flex-1 bg-red-600 text-[10px] md:text-lg text-white py-2 rounded hover:bg-red-700 transition-colors duration-200"
                    >
                      پخش کن
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}