"use client"
import React, {  useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AddIcon from "@mui/icons-material/Add";
import { Movie } from "@/lib/types";
import { topMovies } from "@/lib/Json";

export default function ListSearch() {
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeCard, setActiveCard] = useState<number | null>(null);
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

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="cbox">


      {/* لیست کارت‌ها با CSS Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {topMovies.map((movie: Movie, index: number) => (
          <div key={index} className="relative flex flex-col items-center group">
            {/* اسکلتون در حالت لودینگ */}
            {(!imageLoaded[index] || isLoading) && (
              <div className="bg-gray-800 rounded-xl w-full h-[200px]  sm:h-[230px] md:h-[300px] relative overflow-hidden animate-pulse">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer"></div>
              </div>
            )}
            {/* تصویر و اطلاعات فیلم */}
            <div
              className={`relative w-full transition-transform duration-500 ease-in-out ${
                imageLoaded[index] && !isLoading ? "block" : "hidden"
              }`}
              onClick={() => handleCardClick(index)}
            >
              <img
                className="rounded-xl w-full h-[200px] sm:h-[230px] md:h-[300px]  object-cover transition-opacity duration-300"
                src={movie.image}
                alt={movie.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* اطلاعات اضافی */}
              <div
                className={`absolute bg-[#00000094] inset-0 flex flex-col justify-end p-4 transition-opacity duration-300 ${
                  activeCard === index
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
                      e.stopPropagation();
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
        ))}
      </div>
    </div>
  );
}