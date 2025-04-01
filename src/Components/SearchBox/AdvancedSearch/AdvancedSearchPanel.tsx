// این کامپوننت پنل جستجوی پیشرفته را نمایش می‌دهد، شامل فیلترها و دکمه جستجو
import { CalendarToday, Category, Edit, Movie, Person, Star, Tv } from '@mui/icons-material';
import React, { ChangeEvent } from 'react';

interface AdvancedSearchPanelProps {
  type: 'movie' | 'series' | '';
  setType: (type: 'movie' | 'series' | '') => void;
  genre: string;
  setGenre: (genre: string) => void;
  minYear: number;
  setMinYear: (year: number) => void;
  minRating: number;
  setMinRating: (rating: number) => void;
  director: string;
  setDirector: (director: string) => void;
  writer: string;
  setWriter: (writer: string) => void;
  handleSearch: () => void;
  genres: string[];
}

function AdvancedSearchPanel({ type, setType, genre, setGenre, minYear, setMinYear, minRating, setMinRating, director, setDirector, writer, setWriter, handleSearch, genres }: AdvancedSearchPanelProps) {
  return (
    <div className="bg-gray-900/80 searchadanim rounded-2xl p-5 sm:p-7 grid grid-cols-1 md:grid-cols-2 gap-6 shadow-lg shadow-teal-500/10 backdrop-blur-sm mb-6 animate-fadeIn">
      <div className="flex gap-3 md:col-span-2 justify-center sm:justify-start">
        <button
          onClick={() => setType('movie')}
          className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-300 transform hover:scale-105 ${
            type === 'movie'
              ? 'bg-gradient-to-r from-red-600 to-teal-600 text-white shadow-[0_0_10px_rgba(220,38,38,0.7)]'
              : 'bg-gray-800/70 text-teal-400 hover:bg-gradient-to-r hover:from-red-600 hover:to-teal-600 hover:text-white'
          }`}
        >
          <Movie fontSize="small" />
          فیلم
        </button>
        <button
          onClick={() => setType('series')}
          className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-300 transform hover:scale-105 ${
            type === 'series'
              ? 'bg-gradient-to-r from-red-600 to-teal-600 text-white shadow-[0_0_10px_rgba(220,38,38,0.7)]'
              : 'bg-gray-800/70 text-teal-400 hover:bg-gradient-to-r hover:from-red-600 hover:to-teal-600 hover:text-white'
          }`}
        >
          <Tv fontSize="small" />
          سریال
        </button>
      </div>

      <div className="space-y-5">
        <div className="relative group">
          <select
            value={genre}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setGenre(e.target.value)}
            className="w-full p-3 pl-10 bg-gray-800/50 border border-teal-400 rounded-xl text-sm text-white focus:outline-none focus:border-red-500 hover:border-red-500 transition-all duration-300 appearance-none cursor-pointer group-hover:shadow-[0_0_10px_rgba(45,212,191,0.3)]"
          >
            <option value="">ژانر</option>
            {genres.map((g) => <option key={g} value={g}>{g}</option>)}
          </select>
          <Category className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400 group-hover:text-red-500 transition-colors duration-300" />
        </div>

        <div className="relative group">
          <input
            type="text"
            value={director}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setDirector(e.target.value)}
            placeholder="کارگردان"
            className="w-full p-3 pl-10 bg-gray-800/50 border border-teal-400 rounded-xl text-sm text-white focus:outline-none focus:border-red-500 hover:border-red-500 transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(45,212,191,0.3)]"
          />
          <Person className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400 group-hover:text-red-500 transition-colors duration-300" />
        </div>

        <div className="relative group">
          <input
            type="text"
            value={writer}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setWriter(e.target.value)}
            placeholder="نویسنده"
            className="w-full p-3 pl-10 bg-gray-800/50 border border-teal-400 rounded-xl text-sm text-white focus:outline-none focus:border-red-500 hover:border-red-500 transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(45,212,191,0.3)]"
          />
          <Edit className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400 group-hover:text-red-500 transition-colors duration-300" />
        </div>
      </div>

      <div className="space-y-5">
        <div className="bg-gray-800/50 p-4 rounded-xl border border-teal-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)]">
          <label className="flex items-center gap-2 mb-3 text-sm font-semibold text-teal-300">
            <CalendarToday className="text-teal-400" />
            حداقل سال: {minYear}
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="1900"
              max="2025"
              value={minYear}
              onChange={(e) => setMinYear(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-teal-400 hover:[&::-webkit-slider-thumb]:bg-teal-300"
            />
            <span className="text-sm w-12 text-center bg-gray-700/50 px-2 py-1 rounded">{minYear}</span>
          </div>
        </div>

        <div className="bg-gray-800/50 p-4 rounded-xl border border-teal-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)]">
          <label className="flex items-center gap-2 mb-3 text-sm font-semibold text-teal-300">
            <Star className="text-teal-400" />
            حداقل امتیاز: {minRating.toFixed(1)}
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="0"
              max="10"
              step="0.1"
              value={minRating}
              onChange={(e) => setMinRating(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-teal-400 hover:[&::-webkit-slider-thumb]:bg-teal-300"
            />
            <span className="text-sm w-12 text-center bg-gray-700/50 px-2 py-1 rounded">{minRating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      <div className="md:col-span-2 mt-4">
        <button
          onClick={handleSearch}
          className="w-full py-2 sm:py-3 bg-gradient-to-r from-red-600 to-teal-600 hover:from-teal-600 hover:to-red-600 rounded-lg font-bold text-sm sm:text-base text-white transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-teal-500/40"
        >
          جستجو
        </button>
      </div>
    </div>
  );
}

export default AdvancedSearchPanel;