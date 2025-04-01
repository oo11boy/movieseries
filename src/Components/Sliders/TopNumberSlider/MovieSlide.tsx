// این کامپوننت هر اسلاید فیلم را نمایش می‌دهد، شامل تصویر، شماره رتبه و استایل‌های مربوط به لودینگ
import React from "react";
import { Movie } from "@/lib/types";
import Link from "next/link";

interface MovieSlideProps {
  movie: Movie;
  index: number;
  isLoading: boolean;
  imageLoaded: boolean;
}

function MovieSlide({ movie, index, isLoading, imageLoaded }: MovieSlideProps) {
  return (
    <Link href="#" className="slide-content relative">
      {(isLoading || !imageLoaded) && (
        <div className="skeleton rounded-xl w-full h-[290px] sm:h-[450px] md:h-[400px] lg:h-[400px]"></div>
      )}
      <img
        className={`rounded-xl mix-blend-overlay w-full h-[290px] sm:h-[450px] md:h-[400px] lg:h-[400px] object-cover ${imageLoaded && !isLoading ? "block" : "hidden"}`}
        src={movie.image}
        alt={movie.title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl"></div>
      <span className="top_ten_numbers iransans">{1 + index}</span>
    </Link>
  );
}

export default MovieSlide;