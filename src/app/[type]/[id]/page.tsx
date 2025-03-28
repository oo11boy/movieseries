import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import MovieSeriesSlider from "@/Components/MovieSeriesSlider/MovieSeriesSlider";
import SingleMovie from "@/Components/SingleMovie/SingleMovie";
import { topMovies } from "@/lib/Json";
import { MovieCreation } from "@mui/icons-material";
import React from "react";

export default function MoviePage() {
  const downloadOptions = [
    {
      quality: "480p",
      subtitle: "زیرنویس فارسی",
      parts: [
        { part: 1, size: "350 MB", downloadLink: "#", streamLink: "#" },
        { part: 2, size: "340 MB", downloadLink: "#", streamLink: "#" },
      ],
    },
    {
      quality: "720p",
      subtitle: "زیرنویس فارسی",
      parts: [
        { part: 1, size: "650 MB", downloadLink: "#", streamLink: "#" },
        { part: 2, size: "620 MB", downloadLink: "#", streamLink: "#" },
      ],
    },
    {
      quality: "1080p",
      subtitle: "زیرنویس فارسی",
      parts: [
        { part: 1, size: "1.2 GB", downloadLink: "#", streamLink: "#" },
        { part: 2, size: "1.1 GB", downloadLink: "#", streamLink: "#" },
      ],
    },
  ];
  const movieinfo = {
    bgimg:
      "https://cdn.gapfilm.ir/image/640/panel/28845/landscape.jpg?updateTime=1741541816",
    img: "https://cdn.gapfilm.ir/image/480/panel/28845/portrait.jpg",
    title: {
      persian: "چشمان قلب",
      english: "Heart Eyes",
    },
    series: false,
    year: 2025,
    duration: "83 دقیقه",
    countries: ["آمریکا", "نیوزیلند"],
    genres: ["کمدی", "ترسناک", "معمایی"],
    imdb: {
      rating: 6.4,
      link: "https://www.imdb.com/title/tt32558992",
    },
    age_rating: "18",
    user_rating: "21",
    synopsis: {
      persian:
        "داستان درباره دو همکار است که در روز ولنتاین تا دیروقت کار می‌کنند و به اشتباه توسط قاتلی معروف به «چشمان قلب» به‌عنوان یک زوج در نظر گرفته می‌شوند. این قاتل در سال‌های اخیر در روز ولنتاین با تعقیب و قتل زوج‌های عاشق، وحشت ایجاد کرده است.",
      cast_note:
        "بازیگرانی چون اولیویا هولت، میسون گودینگ، جیجی زومبادو، میکائلا واتکینز، دوون ساوا و جوردانا بروستر در این فیلم ایفای نقش می‌کنند.",
    },
    cast: [
      {
        name: "جوردانا بروستر",
        img: "https://cdn.gapfilm.ir/media/imgs/actor/jordanabrewster.jpg",
      },
      {
        name: "آلیفا هالت",
        img: null,
      },
      {
        name: "دیفون ساوا",
        img: null,
      },
      {
        name: "ماسون گودینگ",
        img: "https://cdn.gapfilm.ir/media/imgs/actor/mason-gooding.jpg",
      },
      {
        name: "گیگی زومبادو",
        img: null,
      },
    ],
    crew: {
      director: [
        {
          name: "جاش روبن",
        },
      ],
      writers: [
        {
          name: "کریستوفر لندون",
        },
        {
          name: "میشائل کِندی",
        },
        {
          name: "فیلیپ مورفی",
        },
      ],
    },
  };

  return (
    <>
      <Header />
      <SingleMovie movieinfo={movieinfo} downloadOptions={downloadOptions} />
      <MovieSeriesSlider
        icon={<MovieCreation />}
        title="شاید بپسندید"
        topMovies={topMovies}
      />

      <Footer />
    </>
  );
}
