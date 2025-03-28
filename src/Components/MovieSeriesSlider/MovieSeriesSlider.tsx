"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import { AddCircleOutlineRounded } from "@mui/icons-material";

// تعریف رابط Movie
interface Movie {
    title: string;
    genre: string;
    year: number;
    description: string;
    image: string;
  }
  

export default function MovieSeriesSlider({title,topMovies}:{title:string,topMovies:Movie[]}) {
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeSlide, setActiveSlide] = useState<number | null>(null);

  const checkImageLoaded = (src: string, index: number): void => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageLoaded((prev) => ({ ...prev, [index]: true }));
    };
    img.onerror = () => {
      setImageLoaded((prev) => ({ ...prev, [index]: true })); // حتی اگه خطا بده، لودینگ متوقف بشه
    };
  };

  useEffect(() => {
    topMovies.forEach((movie, index) => {
      if (!imageLoaded[index]) {
        checkImageLoaded(movie.image, index);
      }
    });

    const timer = setTimeout(() => {
      setIsLoading(false); // فال‌بک بعد از 5 ثانیه
    }, 5000);

    const allLoaded = topMovies.every((_, index) => imageLoaded[index]);
    if (allLoaded) {
      setIsLoading(false);
    }

    return () => clearTimeout(timer);
  }, [imageLoaded]);

  return (
    <div className="p-5">
      <h2 className="text-white text-2xl md:text-3xl mb-6 yekanh">
       {title}
      </h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={2}
        navigation
        initialSlide={0}
        className="overflow-visible"
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 10 },
          1200: { slidesPerView: 5, spaceBetween: 10 },
          1324: { slidesPerView: 6, spaceBetween: 10 },
        }}
      >
        {topMovies.map((movie: Movie, index: number) => (
          <SwiperSlide key={index} className="overflow-visible">
            <Link
              href="#"
              className="relative flex flex-col items-center group"
              onClick={(e) => {
                e.preventDefault(); // جلوگیری از رفتن به لینک در موبایل
                setActiveSlide(activeSlide === index ? null : index);
              }}
            >
              {/* اسکلتون در حالت لودینگ */}
              {(!imageLoaded[index] || isLoading) && (
                <div className="bg-gray-800 rounded-xl w-full h-[200px] sm:h-[400px] md:h-[350px] lg:h-[400px] relative overflow-hidden animate-pulse">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer"></div>
                </div>
              )}
              {/* تصویر و اطلاعات فیلم */}
              <div
                className={`relative transition-transform duration-500 ease-in-out ${
                  imageLoaded[index] && !isLoading ? "block" : "hidden"
                }`}
              >
                <img
                  className="rounded-xl w-full h-[200px] sm:h-[400px] md:h-[350px] lg:h-[400px] object-cover transition-opacity duration-300"
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
                  <p className="text-sm hidden md:flex  text-gray-400 my-2">{movie.description}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <button className=" bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-200">
                    <AddCircleOutlineRounded fontSize="large" className="text-white"/>
                    </button>
                    <button className="flex-1 bg-red-600 text-[10px] md:text-lg text-white py-2 rounded hover:bg-red-700 transition-colors duration-200">
                      پخش کن
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}