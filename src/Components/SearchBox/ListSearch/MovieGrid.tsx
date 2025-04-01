// این کامپوننت گرید فیلم‌ها را نمایش می‌دهد، شامل کارت‌های هر فیلم
import React from "react";
import MovieCard from "./MovieCard";
import { Movie } from "@/lib/types";

interface MovieGridProps {
  movies: Movie[];
  imageLoaded: Record<number, boolean>;
  isLoading: boolean;
  activeCard: number | null;
  onCardClick: (index: number) => void;
  onPlayClick: (title: string) => void;
}

function MovieGrid({
  movies,
  imageLoaded,
  isLoading,
  activeCard,
  onCardClick,
  onPlayClick,
}: MovieGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {movies.map((movie: Movie, index: number) => (
        <MovieCard
          key={index}
          movie={movie}
          index={index}
          isLoading={isLoading}
          imageLoaded={imageLoaded[index] || false}
          isActive={activeCard === index}
          onCardClick={() => onCardClick(index)}
          onPlayClick={onPlayClick}
        />
      ))}
    </div>
  );
}

export default MovieGrid;
