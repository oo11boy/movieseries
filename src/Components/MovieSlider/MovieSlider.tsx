"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper/modules";
import AddIcon from "@mui/icons-material/Add";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade"; // اضافه کردن استایل fade
import "./MovieSlider.css";
import {

  CalendarMonth,
  LanguageOutlined,
  PlayArrow,
  StarBorder,
  Timelapse,
} from "@mui/icons-material";

// اطلاعات اسلایدها
const slidesData = [
  {
    id: 1,
    image: "https://media.iqonic.design/streamit-laravel/the_gunfighters_redemption_thumb.webp",
    title: "رستگاری تفنگدار",
    description:
      "یک تفنگدار بازنشسته وقتی زندگی آرامش توسط قانون‌شکنان بی‌رحم نابود می‌شود، مجبور به بازگشت به میدان نبرد می‌شود. او باید با گذشته‌اش روبه‌رو شود و برای عدالت آخرین بار بجنگد. 🤠🔫",
    tags: ["اکشن", "ترسناک", "الهام‌بخش"],
    year: "2012",
    language: "انگلیسی",
    duration: "۲ ساعت و ۳۰ دقیقه",
    rating: "۶ (IMDB)",
    buttonText: "اکنون پخش کن",
    buttonLink: "https://apps.iqonic.design/streamit-laravel/movie-details/23",
  },
  {
    id: 2,
    image: "https://media.iqonic.design/streamit-laravel/the_daring_player_thumb.webp",
    title: "سایه‌های شب",
    description:
      "یک کارآگاه تنها در شهری تاریک به دنبال راز قتل‌های زنجیره‌ای می‌گردد. هرچه پیش می‌رود، حقیقت تلخ‌تر از تصوراتش می‌شود. 🕵️‍♂️🌙",
    tags: ["معمایی", "هیجان‌انگیز", "درام"],
    year: "2020",
    language: "فارسی",
    duration: "۱ ساعت و ۴۵ دقیقه",
    rating: "۷.۵ (IMDB)",
    buttonText: "اکنون پخش کن",
    buttonLink: "https://apps.iqonic.design/streamit-laravel/movie-details/24",
  },
  {
    id: 3,
    image: "https://media.iqonic.design/streamit-laravel/the_smiling_shadows_thumb.webp",
    title: "سفر به بی‌نهایت",
    description:
      "گروهی از ماجراجویان در سفری فضایی برای نجات بشریت، با چالش‌های غیرمنتظره و تصمیم‌های سخت روبه‌رو می‌شوند. 🚀✨",
    tags: ["علمی-تخیلی", "ماجراجویی", "حماسی"],
    year: "2023",
    language: "انگلیسی",
    duration: "۲ ساعت و ۱۵ دقیقه",
    rating: "۸ (IMDB)",
    buttonText: "اکنون پخش کن",
    buttonLink: "https://apps.iqonic.design/streamit-laravel/movie-details/25",
  },
];

export default function MovieSlider() {
  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        effect="fade" // فعال کردن افکت fade
        fadeEffect={{ crossFade: true }} // تنظیمات فید برای انتقال نرم
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="slide-content"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "left center!important",
                height: "100%",
              }}
            >
              <div className="overlay"></div>
              <div className="cbox">
                <div className="slide-text ">
                  <div className="gap-x-2 flex">
                    {slide.tags.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 text-[10px] md:text-lg rounded-lg text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <h2 className="my-4 text-4xl yekanh">{slide.title}</h2>
                  <p className="my-4 text-[12px] md:text-lg ">{slide.description}</p>
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
                  <div className="my-4 gap-2 flex justify-start items-center ">
                    <button className="bg-[#444] p-2 rounded-lg">
                      <AddIcon />
                    </button>
                    <button className="bg-red-600 p-2 flex justify-center items-center gap-2 rounded-lg">
                      <PlayArrow className="rotate-180" />
                      مشاهده
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}