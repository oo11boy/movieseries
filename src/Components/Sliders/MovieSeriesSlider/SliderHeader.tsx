// این کامپوننت سربرگ اسلایدر را نمایش می‌دهد، شامل عنوان، آیکون و دکمه "بیشتر ببینید"
import React, { ReactNode } from "react";
import { VisibilityOutlined } from "@mui/icons-material";

interface SliderHeaderProps {
  title: string;
  icon: ReactNode;
  onMoreClick: () => void;
}

function SliderHeader({ title, icon, onMoreClick }: SliderHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex text-white font-bold yekanh items-center space-x-2 text-md md:text-3xl">
        {icon}
        <h2>{title}</h2>
      </div>

      <div className="flex-1 mx-4 h-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-70 rounded-full animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-300 to-transparent opacity-30 scale-95 rounded-full"></div>
      </div>
      <button
        onClick={onMoreClick}
        className="group flex items-center gap-2 text-teal-400 text-sm md:text-lg font-medium bg-teal-900/20 px-4 py-1.5 rounded-full hover:bg-teal-800 hover:text-teal-200 transition-all duration-300 shadow-md"
      >
        <VisibilityOutlined className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
        بیشتر ببینید
      </button>
    </div>
  );
}

export default SliderHeader;