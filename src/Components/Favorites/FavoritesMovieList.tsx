// این کامپوننت لیست کارت‌های فیلم را نمایش می‌دهد و شامل منطق رندر هر کارت است
import React from "react";
import { Movie } from "@/lib/types";
import FavoritesMovieCard from "./FavoritesMovieCard";

interface MovieListProps {
  movies: Movie[];
  imageLoaded: Record<number, boolean>;
  isLoading: boolean;
  activeCard: number | null;
  onCardClick: (index: number) => void;
  onPlayClick: (title: string) => void;
  onRemoveClick: (index: number) => void;
}

function FavoritesMovieList({ movies, imageLoaded, isLoading, activeCard, onCardClick, onPlayClick, onRemoveClick }: MovieListProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {movies.map((movie: Movie, index: number) => (
        <FavoritesMovieCard
          key={index}
          movie={movie}
          index={index}
          isLoading={isLoading}
          imageLoaded={imageLoaded[index] || false}
          isActive={activeCard === index}
          onCardClick={() => onCardClick(index)}  
          onPlayClick={() => onPlayClick(movie.title)}
          onRemoveClick={() => onRemoveClick(index)}
        />
      ))}
    </div>
  );
}

export default FavoritesMovieList;