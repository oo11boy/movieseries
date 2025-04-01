// این کامپوننت اصلی است که لیست فیلم‌ها را مدیریت می‌کند، شامل منطق لود تصاویر، حالت‌ها و نویگیشن
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MovieGrid from "./MovieGrid";
import { topMovies } from "@/lib/Json";

export default function ListSearchContainer() {
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
      <MovieGrid movies={topMovies} imageLoaded={imageLoaded} isLoading={isLoading} activeCard={activeCard} onCardClick={handleCardClick} onPlayClick={handlePlayClick} />
    </div>
  );
}