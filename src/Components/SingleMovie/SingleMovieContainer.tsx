// این کامپوننت کانتینر اصلی صفحه فیلم است که تمام بخش‌های مربوط به یک فیلم را کنار هم قرار می‌دهد.
import { MovieSynopsis } from "./MovieSynopsis";
import { MovieCrew } from "./MovieCrew";
import { MovieComments } from "./MovieComments";
import { DownloadOption, MovieInfo } from "@/lib/types";
import MovieHeader from "./MovieHeader";

export default function SingleMovieContainer({
  movieinfo,
  downloadOptions,
}: {
  movieinfo: MovieInfo;
  downloadOptions: DownloadOption[];
}) {
  return (
    <main className="text-white pb-8 min-h-screen cbox">
      <MovieHeader movieinfo={movieinfo} downloadOptions={downloadOptions} />
      <div className="w-full mx-auto mt-8">
        <MovieSynopsis movieinfo={movieinfo} />
        <MovieCrew movieinfo={movieinfo} />
        <MovieComments />
      </div>
    </main>
  );
}