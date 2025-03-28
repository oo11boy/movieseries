import { MovieSynopsis } from "./MovieSynopsis";
import { MovieCrew } from "./MovieCrew";
import { MovieComments } from "./MovieComments"; // Import the new component
import { DownloadOption, MovieInfo } from "@/lib/types";
import MovieHeader from "./MovieHeader";

export default function SingleMovie({
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
        <MovieComments /> {/* Add the comments section */}
      </div>
    </main>
  );
}