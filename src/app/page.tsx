import DownloadApp from "@/Components/DownloadApp/DownloadApp";
import Footer from "@/Components/Footer/Footer";

import Header from "@/Components/Header/Header";
import MovieSeriesSlider from "@/Components/MovieSeriesSlider/MovieSeriesSlider";
import MovieSlider from "@/Components/MovieSlider/MovieSlider";
import MovieSliderCount from "@/Components/MovieSliderCount/MovieSliderCount";
import SelectGenre from "@/Components/SelectGenres/SelectGenre";
import { topMovies, topSeries } from "@/lib/Json";
import { Animation, EmojiEvents, LiveTv, MovieCreation } from "@mui/icons-material";



export default function page() {

  return <>
   <Header/>
<MovieSlider/>
<SelectGenre/>
<MovieSliderCount icon={<EmojiEvents/>} title="بهترین های تاریخ"/>
<MovieSeriesSlider icon={<Animation/>} title="انیمیشن ها" topMovies={topMovies}/>
<MovieSeriesSlider icon={<LiveTv/>} title=" سریال ها" topMovies={topSeries}/>
<MovieSeriesSlider icon={<MovieCreation/>} title=" فیلم های سینمایی" topMovies={topMovies}/>
<DownloadApp/>
<Footer/>
  </>
}
