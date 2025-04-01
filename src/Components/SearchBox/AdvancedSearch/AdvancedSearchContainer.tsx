// این کامپوننت اصلی است که مدیریت جستجوی پیشرفته، حالت‌ها و انیمیشن‌ها را انجام می‌دهد
"use client";
import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import SearchBar from './SearchBar';
import AdvancedSearchPanel from './AdvancedSearchPanel';
import '../SearchBox.css';

const genres = ['اکشن', 'کمدی', 'درام', 'ترسناک', 'علمی-تخیلی', 'عاشقانه', 'ماجراجویی', 'جنایی'];

export default function AdvancedSearchContainer() {
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
      smoothScrollTo(67, 300);
      setTimeout(() => {
        setShowAdvanced(true);
      }, 300);
    } else {
      setShowAdvanced(!showAdvanced);
    }
  };

  return (
    <>
      {isFixed && <div className="placeholder transition-all duration-300 ease-in-out" style={{ height: '67px' }}></div>}
      <div ref={searchRef} className={`py-1 header ${isFixed ? 'fixsearch w-[95%] z-50' : 'relativesearch'} text-white cbox transition-all duration-300 ease-in-out`}>
        <div className="mx-auto">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} showAdvanced={showAdvanced} toggleAdvancedSearch={toggleAdvancedSearch} />
          {showAdvanced && <AdvancedSearchPanel type={type} setType={setType} genre={genre} setGenre={setGenre} minYear={minYear} setMinYear={setMinYear} minRating={minRating} setMinRating={setMinRating} director={director} setDirector={setDirector} writer={writer} setWriter={setWriter} handleSearch={handleSearch} genres={genres} />}
        </div>
      </div>
    </>
  );
}