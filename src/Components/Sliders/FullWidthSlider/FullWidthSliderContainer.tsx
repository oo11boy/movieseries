// این کامپوننت اصلی است که اسلایدر فیلم‌ها را مدیریت می‌کند و شامل تنظیمات Swiper و رندر اسلایدها است
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./FullWidthSlider.css";
import SlideContent from "./SlideContent";


const slidesData = [
  {
    id: 1,
    image: "https://media.iqonic.design/streamit-laravel/the_gunfighters_redemption_thumb.webp",
    title: "رستگاری تفنگدار",
    description: "یک تفنگدار بازنشسته وقتی زندگی آرامش توسط قانون‌شکنان بی‌رحم نابود می‌شود، مجبور به بازگشت به میدان نبرد می‌شود. او باید با گذشته‌اش روبه‌رو شود و برای عدالت آخرین بار بجنگد. 🤠🔫",
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
    description: "یک کارآگاه تنها در شهری تاریک به دنبال راز قتل‌های زنجیره‌ای می‌گردد. هرچه پیش می‌رود، حقیقت تلخ‌تر از تصوراتش می‌شود. 🕵️‍♂️🌙",
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
    description: "گروهی از ماجراجویان در سفری فضایی برای نجات بشریت، با چالش‌های غیرمنتظره و تصمیم‌های سخت روبه‌رو می‌شوند. 🚀✨",
    tags: ["علمی-تخیلی", "ماجراجویی", "حماسی"],
    year: "2023",
    language: "انگلیسی",
    duration: "۲ ساعت و ۱۵ دقیقه",
    rating: "۸ (IMDB)",
    buttonText: "اکنون پخش کن",
    buttonLink: "https://apps.iqonic.design/streamit-laravel/movie-details/25",
  },
];

export default function FullWidthSliderContainer() {
  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SlideContent slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}