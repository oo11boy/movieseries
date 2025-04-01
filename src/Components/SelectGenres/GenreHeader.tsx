// این کامپوننت سربرگ اسلایدر ژانرها را نمایش می‌دهد، شامل آیکون و عنوان
import React from "react";
import { Subtitles } from "@mui/icons-material";

function GenreHeader() {
  return (
    <div className="flex mb-4 text-white font-bold yekanh items-center space-x-2 text-md md:text-3xl">
      <Subtitles />
      <h2>ژانرها</h2>
    </div>
  );
}

export default GenreHeader;