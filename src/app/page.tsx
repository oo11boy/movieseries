import Header from "@/Components/Header/Header";
import MovieSlider from "@/Components/MovieSlider/MovieSlider";
import MovieSliderCount from "@/Components/MovieSliderCount/MovieSliderCount";
import SelectGenre from "@/Components/SelectGenres/SelectGenre";

export default function page() {
  return <>
   <Header/>
<MovieSlider/>
<SelectGenre/>
<MovieSliderCount/>

  </>
}
