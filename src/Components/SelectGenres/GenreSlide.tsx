// این کامپوننت هر اسلاید ژانر را نمایش می‌دهد، شامل لینک و نام ژانر
import React from "react";
import Link from "next/link";

interface Genre {
  id: number;
  en: string;
  fa: string;
}

interface GenreSlideProps {
  genre: Genre;
}

function GenreSlide({ genre }: GenreSlideProps) {
  return (
    <Link href={'#'} className="bg-[#1a1a1a] rounded-lg p-2 text-center text-white h-[60px] flex items-center justify-center transition-colors duration-300 cursor-pointer hover:bg-[#333]">
      <h3 className="m-0 text-sm font-normal text-white">
        {genre.fa}
      </h3>
    </Link>
  );
}

export default GenreSlide;