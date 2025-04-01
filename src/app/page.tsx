import DownloadApp from "@/Components/DownloadApp/DownloadApp";
import Footer from "@/Components/Footer/Footer";
import HeaderContainer from "@/Components/Header/HeaderContainer";
import ImageAccordion from "@/Components/ImageAccordion/ImageAccordion";
import MovieSeriesSliderContainer from "@/Components/Sliders/MovieSeriesSlider/MovieSeriesSliderContainer";
import SelectGenre from "@/Components/SelectGenres/SelectGenreContainer";
import { topMovies, topSeries } from "@/lib/Json";
import {
  Animation,
  EmojiEvents,
  LiveTv,
  MovieCreation,
} from "@mui/icons-material";
import FullWidthSliderContainer from "@/Components/Sliders/FullWidthSlider/FullWidthSliderContainer";
import TopNumberSliderContainer from "@/Components/Sliders/TopNumberSlider/TopNumberSliderContainer";

export default function page() {
  return (
    <>
      <HeaderContainer />
      <FullWidthSliderContainer />
      <SelectGenre />
      <ImageAccordion />
      <TopNumberSliderContainer
        icon={<EmojiEvents />}
        title="بهترین های تاریخ"
      />
      <MovieSeriesSliderContainer
        icon={<Animation />}
        title="انیمیشن ها"
        topMovies={topMovies}
      />

      <MovieSeriesSliderContainer
        icon={<LiveTv />}
        title=" سریال ها"
        topMovies={topSeries}
      />
      <MovieSeriesSliderContainer
        icon={<MovieCreation />}
        title=" فیلم های سینمایی"
        topMovies={topMovies}
      />
      <DownloadApp />
      <Footer />
    </>
  );
}
