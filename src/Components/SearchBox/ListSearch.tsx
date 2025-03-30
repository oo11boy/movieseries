"use client"
import React, {  act, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AddIcon from "@mui/icons-material/Add";
import { Movie } from "@/lib/types";
import { topMovies } from "@/lib/Json";
import { MovieOutlined } from "@mui/icons-material";

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
           <div className="relative flex flex-col items-center group">
           {/* بقیه کدها بدون تغییر */}
           {(!imageLoaded[index] || isLoading) && (
             <div className="bg-gray-800 rounded-xl w-full h-[290px] sm:h-[450px] md:h-[400px] lg:h-[400px] relative overflow-hidden animate-pulse">
               <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-shimmer"></div>
             </div>
           )}
           <div
             className={`relative w-full transition-transform duration-500 ease-in-out ${
               imageLoaded[index] && !isLoading ? "block" : "hidden"
             }`}
             onClick={() => handleCardClick(index)}
           >
             <img
               className="rounded-xl w-full h-[290px] sm:h-[450px] md:h-[400px] lg:h-[400px] object-cover transition-opacity duration-300"
               src={movie.image}
               alt={movie.title}
             />
            {activeCard!==index &&  <h3 className="text-[1rem] header p-1 rounded-2x yekanh absolute bottom-0 right-2 md:text-[1em] my-1 font-bold text-white">
                  {movie.title}
                </h3>} 
             <h3 className="absolute top-2 right-2 text-[0.8em] text-white bg-[#1a1a1a] px-2 py-1 rounded-xl">{movie.genre}</h3>

             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>
             <div
               className={`absolute bg-[#00000094] inset-0 flex flex-col justify-end p-4 transition-opacity duration-300 ${
                 activeCard === index
                   ? "opacity-100"
                   : "opacity-0 md:group-hover:opacity-100"
               }`}
             >
               <h3 className="text-sm flex justify-start items-center md:text-lg gap-2 my-1 font-bold text-white">
               <MovieOutlined/>  {movie.title}
               </h3>

               <p className="text-[10px] sm:text-[0.8rem] flex text-gray-200 my-1">
                 {movie.description}
               </p>
               <ul className="flex flex-col gap-2 text-sm my-1 text-gray-300">
              
                 <li>{movie.year}</li>
               </ul>
               <div className="flex items-center gap-3 mt-3">
                 <button className="bg-[#444] p-1 sm:p-2 text-white rounded-lg">
                   <AddIcon />
                 </button>
                 <button
                   onClick={(e) => {
                     e.stopPropagation();
                     handlePlayClick(movie.title);
                   }}
                   className="flex-1 bg-gradient-to-r from-red-600 to-teal-600 text-[10px] md:text-lg text-white py-2 rounded hover:bg-red-700 transition-colors duration-200"
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