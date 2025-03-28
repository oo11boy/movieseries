import Header from "@/Components/Header/Header";
import MovieSeriesSlider from "@/Components/MovieSeriesSlider/MovieSeriesSlider";
import MovieSlider from "@/Components/MovieSlider/MovieSlider";
import MovieSliderCount from "@/Components/MovieSliderCount/MovieSliderCount";
import SelectGenre from "@/Components/SelectGenres/SelectGenre";

// تعریف رابط Movie
interface Movie {
  title: string;
  genre: string;
  year: number;
  description: string;
  image: string;
}

export const topMovies: Movie[] = [
  {
    title: "نوپا",
    genre: "درام",
    year: 2023,
    description: "داستانی دل‌انگیز از رشد و کشف.",
    image: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/toddler-portrait.webp",
  },
  {
    title: "یخ‌زده",
    genre: "انیمیشن",
    year: 2013,
    description: "داستانی جادویی از خواهری و ماجراجویی.",
    image: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/frzzen.webp",
  },
  {
    title: "جنگ قهرمانان",
    genre: "اکشن",
    year: 2025,
    description: "نبردی حماسی برای شکوه و افتخار.",
    image: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2025/02/gameofhero-portrait.webp",
  },
  {
    title: "تایتانیک",
    genre: "عاشقانه",
    year: 1997,
    description: "داستانی عاشقانه و تراژیک در کشتی‌ای محکوم به نابودی.",
    image: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/tianic.webp",
  },
  {
    title: "کریشنای کوچک",
    genre: "انیمیشن",
    year: 2020,
    description: "ماجراهای خدایی جوان در جهانی اساطیری.",
    image: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/krishna-portrait-.webp",
  },
  {
    title: "سگ قرمز",
    genre: "خانوادگی",
    year: 2011,
    description: "سفر سگی وفادار برای یافتن صاحبش.",
    image: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/reed-dog.webp",
  },
  {
    title: "ماجراجویی",
    genre: "ماجراجویی",
    year: 2022,
    description: "جستجویی هیجان‌انگیز در سرزمین‌های ناشناخته.",
    image: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/Adventure-1.webp",
  },
  {
    title: "گروه",
    genre: "کمدی",
    year: 2024,
    description: "ماجرایی خنده‌دار از قهرمانان غیرمنتظره.",
    image: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/the-crew.webp",
  },
  {
    title: "سینکرونیک",
    genre: "علمی-تخیلی",
    year: 2019,
    description: "سفری ذهن‌گشا در زمان.",
    image: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/synchronic-portrait.webp",
  },
  {
    title: "گناهکار",
    genre: "هیجان‌انگیز",
    year: 2021,
    description: "داستانی گیرا از عدالت و خیانت.",
    image: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/guilty-portrait.webp",
  },
];

export const topSeries: Movie[] = [
  {
    title: "بیداری: اولین‌ها",
    genre: "اکشن و ماجراجویی",
    year: 2025, // حدس بر اساس تصویر و تاریخ آپلود (2025/02)
    description: "ماجراجویی حماسی برای بیدار کردن اولین قهرمانان.",
    image: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2025/02/the-first-of-us-portrait.webp",
  },
  {
    title: "فراتر از مرزها",
    genre: "اکشن و ترسناک",
    year: 2024, // حدس بر اساس تاریخ آپلود (2024/11)
    description: "سفری پرهیجان و ترسناک به سوی ناشناخته‌ها.",
    image: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/migration-portrait-.webp",
  },
  {
    title: "تایتانیک: گمشده و پیدا شده",
    genre: "اکشن و ماجراجویی",
    year: 2024, // حدس بر اساس تاریخ آپلود (2024/11)
    description: "داستانی جدید از کشتی افسانه‌ای با اکشن و رمز و راز.",
    image: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/tianic.webp",
  },
  {
    title: "گروه واقعی",
    genre: "اکشن و ماجراجویی",
    year: 2024, // حدس بر اساس تاریخ آپلود (2024/11)
    description: "ماجرای تیمی شجاع در نبردی نفس‌گیر.",
    image: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/the-crew-portrait.webp",
  },
  {
    title: "دزدان دریایی روز اول",
    genre: "ماجراجویی و انیمیشن",
    year: 2024, // حدس بر اساس تاریخ آپلود (2024/11)
    description: "ماجراهای دزدان دریایی در دنیایی پر از شگفتی.",
    image: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/pirates-ofdayones-orignal.webp",
  },
  {
    title: "قلعه راک",
    genre: "اکشن و ماجراجویی",
    year: 2024, // حدس بر اساس تاریخ آپلود (2024/11)
    description: "داستانی پر از رمز و راز در قلعه‌ای مرموز.",
    image: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/castle-rock-portrait.webp",
  },
  {
    title: "وایکینگ‌ها",
    genre: "ماجراجویی و انیمیشن",
    year: 2024, // حدس بر اساس تاریخ آپلود (2024/11)
    description: "سفر جنگجویان شجاع در سرزمین‌های سرد و وحشی.",
    image: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/vikings-portrait.webp",
  },
  {
    title: "نوپا",
    genre: "درام",
    year: 2023,
    description: "داستانی دل‌انگیز از رشد و کشف.",
    image: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/toddler-portrait.webp",
  },
  {
    title: "یخ‌زده",
    genre: "انیمیشن",
    year: 2013,
    description: "داستانی جادویی از خواهری و ماجراجویی.",
    image: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/frzzen.webp",
  },
  {
    title: "گناهکار",
    genre: "هیجان‌انگیز",
    year: 2021,
    description: "داستانی گیرا از عدالت و خیانت.",
    image: "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/guilty-portrait.webp",
  },
];
export default function page() {
  return <>
   <Header/>
<MovieSlider/>
<SelectGenre/>
<MovieSliderCount/>
<MovieSeriesSlider title="بهترین انیمیشن ها" topMovies={topMovies}/>
<MovieSeriesSlider title=" جدیدترین سریال ها" topMovies={topSeries}/>
<MovieSeriesSlider title=" بهترین سینمایی" topMovies={topMovies}/>
  </>
}
