// این کامپوننت محتوای هر اسلاید را نمایش می‌دهد، شامل تصویر پس‌زمینه، متن و دکمه‌ها
import React from "react";
import {
    AddOutlined,
  CalendarMonth,
  LanguageOutlined,
  PlayArrow,
  StarBorder,
  Timelapse,

} from "@mui/icons-material";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  language: string;
  duration: string;
  rating: string;
  buttonText: string;
  buttonLink: string;
}

interface SlideContentProps {
  slide: Slide;
}

function SlideContent({ slide }: SlideContentProps) {
  return (
    <div
      className="slide-content"
      style={{
        backgroundImage: `url(${slide.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
      }}
    >
      <div className="overlay"></div>
      <div className="cbox">
        <div className="slide-text mt-[38%] sm:mt-[25%] md:mt-[30%] xl:mt-[10%]">
          <div className="gap-x-2 flex">
            {slide.tags.map((item) => (
              <span key={item} className="px-4 py-2 text-[10px] md:text-lg rounded-lg text-white">
                {item}
              </span>
            ))}
          </div>
          <h2 className="my-4 text-4xl yekanh">{slide.title}</h2>
          <p className="text-[12px] md:text-lg h-[9vh] flex justify-start items-center">{slide.description}</p>
          <div className="flex text-[10px] md:text-lg my-4 justify-start items-center gap-x-2">
            <div className="flex items-center md:m-2 gap-2">
              <CalendarMonth />
              {slide.year}
            </div>
            <div className="flex items-center md:m-2 gap-2">
              <LanguageOutlined />
              {slide.language}
            </div>
            <div className="flex items-center md:m-2 gap-2">
              <Timelapse />
              {slide.duration}
            </div>
            <div className="flex items-center md:m-2 gap-2">
              <StarBorder />
              {slide.rating}
            </div>
          </div>
          <div className="my-4 gap-2 flex justify-start items-center">
            <button className="bg-[#444] p-2 rounded-lg">
              <AddOutlined />
            </button>
            <button className="bg-red-600 p-2 flex justify-center items-center gap-2 rounded-lg">
              <PlayArrow className="rotate-180" />
              مشاهده
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideContent;