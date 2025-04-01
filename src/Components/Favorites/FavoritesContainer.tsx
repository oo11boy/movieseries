// این کامپوننت اصلی است که لیست فیلم‌های مورد علاقه را مدیریت می‌کند، شامل حالت‌ها، افکت‌ها و منطق اصلی برنامه
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Movie } from "@/lib/types";
import { topMovies } from "@/lib/Json";
import FavoritesHeader from "./FavoritesHeader";
import FavoritesMovieList from "./FavoritesMovieList";

export default function FavoritesContainer() {
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Movie[]>(topMovies);
  const router = useRouter();

  useEffect(() => {
    favorites.forEach((movie, index) => {
      if (!imageLoaded[index]) {
        checkImageLoaded(movie.image, index);
      }
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    const allLoaded = favorites.every((_, index) => imageLoaded[index]);
    if (allLoaded) {
      setIsLoading(false);
    }

    return () => clearTimeout(timer);
  }, [imageLoaded, favorites]);

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

  const handlePlayClick = (movieTitle: string) => {
    router.push(`../movie/${movieTitle}`);
  };

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const handleRemoveFavorite = (index: number) => {
    setFavorites((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="cbox py-8">
      <FavoritesHeader />
      {favorites.length === 0 ? (
        <p className="text-gray-400">هنوز فیلمی به لیست مورد علاقه‌ها اضافه نشده است.</p>
      ) : (
        <FavoritesMovieList
          movies={favorites}
          imageLoaded={imageLoaded}
          isLoading={isLoading}
          activeCard={activeCard}
          onCardClick={handleCardClick}
          onPlayClick={handlePlayClick}
          onRemoveClick={handleRemoveFavorite}
        />
      )}
    </div>
  );
}