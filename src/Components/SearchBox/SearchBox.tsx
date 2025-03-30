"use client";
import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import CategoryIcon from '@mui/icons-material/Category';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import TuneIcon from '@mui/icons-material/Tune';
import { Close } from '@mui/icons-material';
import './SearchBox.css';

const genres = [
  'اکشن', 'کمدی', 'درام', 'ترسناک', 'علمی-تخیلی', 'عاشقانه', 'ماجراجویی', 'جنایی'
];

const AdvancedSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [type, setType] = useState<'movie' | 'series' | ''>('');
  const [genre, setGenre] = useState<string>('');
  const [minYear, setMinYear] = useState<number>(2000);
  const [minRating, setMinRating] = useState<number>(7);
  const [director, setDirector] = useState<string>('');
  const [writer, setWriter] = useState<string>('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = () => {
    const searchData = { searchQuery, type, genre, minYear, minRating, director, writer };
    console.log('Search Data:', searchData);
  };

  // تابع انیمیشن دستی برای اسکرول نرم
  const smoothScrollTo = (target: number, duration: number) => {
    const start = window.scrollY;
    const distance = target - start;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, start, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    // تابع easing برای انیمیشن نرم
    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  const toggleAdvancedSearch = () => {
    if (!showAdvanced && window.scrollY < 67) {
      smoothScrollTo(67, 300); // اسکرول به 67 پیکسل در 300 میلی‌ثانیه
      setTimeout(() => {
        setShowAdvanced(true);
      }, 300);
    } else {
      setShowAdvanced(!showAdvanced);
    }
  };

  return (
    <>
      {isFixed && (
        <div
          className="placeholder transition-all duration-300 ease-in-out"
          style={{ height: '67px' }}
        ></div>
      )}
      <div
        ref={searchRef}
        className={`py-1 header ${
          isFixed ? 'fixsearch w-[95%] z-50' : 'relativesearch'
        } text-white cbox transition-all duration-300 ease-in-out`}
      >
        <div className="mx-auto">
          {/* کادر جستجو */}
          <div className="mb-2 bg-gray-900/80 rounded-2xl shadow-lg shadow-teal-500/10 backdrop-blur-sm">
            <div className="relative m-auto flex items-center bg-gray-800/50 border border-teal-400 rounded-xl overflow-hidden transition-all duration-500 group hover:shadow-[0_0_15px_rgba(45,212,191,0.5)]">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-400 group-hover:text-red-500 transition-colors duration-300" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                placeholder="جستجو..."
                className="w-full p-4 pl-16 pr-3 bg-transparent text-white placeholder-teal-300/70 focus:outline-none focus:ring-2 focus:ring-red-500/50 text-sm sm:text-base transition-all duration-300"
              />
              <button
                onClick={toggleAdvancedSearch}
                className={`absolute flex justify-center items-center p-2 sm:p-2.5 rounded-xl gap-x-2 left-13 top-1/2 transform -translate-y-1/2 text-white cursor-pointer transition-all duration-300
                  ${
                    showAdvanced
                      ? 'bg-gradient-to-r from-teal-600 to-red-600 shadow-[0_0_12px_rgba(220,38,38,0.7)]'
                      : 'bg-teal-600 hover:bg-gradient-to-r hover:from-teal-600 hover:to-red-600 shadow-[0_0_8px_rgba(16,185,129,0.5)] hover:shadow-[0_0_12px_rgba(220,38,38,0.7)]'
                  }`}
                aria-label="جستجوی پیشرفته"
              >
                {!showAdvanced ? (
                  <TuneIcon fontSize="small" className="text-sm sm:text-base" />
                ) : (
                  <Close fontSize="small" className="text-sm sm:text-base" />
                )}
                <span className="text-xs sm:text-sm font-medium hidden sm:inline-block">
                  پیشرفته
                </span>
              </button>
            </div>
          </div>

          {/* کانتینر اصلی (جستجوی پیشرفته) */}
          {showAdvanced && (
            <div className="bg-gray-900/80 searchadanim rounded-2xl p-5 sm:p-7 grid grid-cols-1 md:grid-cols-2 gap-6 shadow-lg shadow-teal-500/10 backdrop-blur-sm mb-6 animate-fadeIn">
              {/* دکمه‌های فیلم و سریال */}
              <div className="flex gap-3 md:col-span-2 justify-center sm:justify-start">
                <button
                  onClick={() => setType('movie')}
                  className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    type === 'movie'
                      ? 'bg-gradient-to-r from-red-600 to-teal-600 text-white shadow-[0_0_10px_rgba(220,38,38,0.7)]'
                      : 'bg-gray-800/70 text-teal-400 hover:bg-gradient-to-r hover:from-red-600 hover:to-teal-600 hover:text-white'
                  }`}
                >
                  <MovieIcon fontSize="small" />
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
                  <TvIcon fontSize="small" />
                  سریال
                </button>
              </div>

              {/* ستون اول */}
              <div className="space-y-5">
                <div className="relative group">
                  <select
                    value={genre}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setGenre(e.target.value)}
                    className="w-full p-3 pl-10 bg-gray-800/50 border border-teal-400 rounded-xl text-sm text-white focus:outline-none focus:border-red-500 hover:border-red-500 transition-all duration-300 appearance-none cursor-pointer group-hover:shadow-[0_0_10px_rgba(45,212,191,0.3)]"
                  >
                    <option value="">ژانر</option>
                    {genres.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                  <CategoryIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400 group-hover:text-red-500 transition-colors duration-300" />
                </div>

                <div className="relative group">
                  <input
                    type="text"
                    value={director}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setDirector(e.target.value)}
                    placeholder="کارگردان"
                    className="w-full p-3 pl-10 bg-gray-800/50 border border-teal-400 rounded-xl text-sm text-white focus:outline-none focus:border-red-500 hover:border-red-500 transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(45,212,191,0.3)]"
                  />
                  <PersonIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400 group-hover:text-red-500 transition-colors duration-300" />
                </div>

                <div className="relative group">
                  <input
                    type="text"
                    value={writer}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setWriter(e.target.value)}
                    placeholder="نویسنده"
                    className="w-full p-3 pl-10 bg-gray-800/50 border border-teal-400 rounded-xl text-sm text-white focus:outline-none focus:border-red-500 hover:border-red-500 transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(45,212,191,0.3)]"
                  />
                  <EditIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400 group-hover:text-red-500 transition-colors duration-300" />
                </div>
              </div>

              {/* ستون دوم */}
              <div className="space-y-5">
                <div className="bg-gray-800/50 p-4 rounded-xl border border-teal-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)]">
                  <label className="flex items-center gap-2 mb-3 text-sm font-semibold text-teal-300">
                    <CalendarTodayIcon className="text-teal-400" />
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
                    <span className="text-sm w-12 text-center bg-gray-700/50 px-2 py-1 rounded">
                      {minYear}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-800/50 p-4 rounded-xl border border-teal-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)]">
                  <label className="flex items-center gap-2 mb-3 text-sm font-semibold text-teal-300">
                    <StarIcon className="text-teal-400" />
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
                    <span className="text-sm w-12 text-center bg-gray-700/50 px-2 py-1 rounded">
                      {minRating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>

              {/* دکمه جستجو */}
              <div className="md:col-span-2 mt-4">
                <button
                  onClick={handleSearch}
                  className="w-full py-2 sm:py-3 bg-gradient-to-r from-red-600 to-teal-600 hover:from-teal-600 hover:to-red-600 rounded-lg font-bold text-sm sm:text-base text-white transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-teal-500/40"
                >
                  جستجو
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdvancedSearch;