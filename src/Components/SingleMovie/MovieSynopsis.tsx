// این کامپوننت خلاصه داستان فیلم را نمایش می‌دهد.
import { MovieInfo } from "@/lib/types";
import { AutoStoriesOutlined } from "@mui/icons-material";
import React from "react";

export function MovieSynopsis({ movieinfo }: { movieinfo: MovieInfo }) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl flex items-center gap-2 font-bold text-teal-300 mb-4">
        <AutoStoriesOutlined />
        داستان {movieinfo.title.persian}
      </h2>
      <p className="text-gray-300 leading-relaxed">
        {movieinfo.synopsis.persian}
        <br />
        {movieinfo.synopsis.cast_note}
      </p>
    </div>
  );
}