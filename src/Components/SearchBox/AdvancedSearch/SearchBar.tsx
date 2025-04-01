// این کامپوننت کادر جستجوی اصلی را نمایش می‌دهد، شامل ورودی متن و دکمه جستجوی پیشرفته
import React, { ChangeEvent } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import { Close } from '@mui/icons-material';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  showAdvanced: boolean;
  toggleAdvancedSearch: () => void;
}

function SearchBar({ searchQuery, setSearchQuery, showAdvanced, toggleAdvancedSearch }: SearchBarProps) {
  return (
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
          className={`absolute flex justify-center items-center p-2 sm:p-2.5 rounded-xl gap-x-2 left-13 top-1/2 transform -translate-y-1/2 text-white cursor-pointer transition-all duration-300 ${
            showAdvanced
              ? 'bg-gradient-to-r from-teal-600 to-red-600 shadow-[0_0_12px_rgba(220,38,38,0.7)]'
              : 'bg-teal-600 hover:bg-gradient-to-r hover:from-teal-600 hover:to-red-600 shadow-[0_0_8px_rgba(16,185,129,0.5)] hover:shadow-[0_0_12px_rgba(220,38,38,0.7)]'
          }`}
          aria-label="جستجوی پیشرفته"
        >
          {!showAdvanced ? <TuneIcon fontSize="small" className="text-sm sm:text-base" /> : <Close fontSize="small" className="text-sm sm:text-base" />}
          <span className="text-xs sm:text-sm font-medium hidden sm:inline-block">پیشرفته</span>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;