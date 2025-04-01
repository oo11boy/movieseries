// این کامپوننت سربرگ (هدر) صفحه مورد علاقه‌ها را نمایش می‌دهد، شامل آیکون و عنوان
import React from "react";
import { Favorite } from "@mui/icons-material";

function FavoritesHeader() {
  return (
    <h1 className="text-2xl py-4 flex items-center gap-3 font-bold text-white mb-4">
      <Favorite />
      مورد علاقه
    </h1>
  );
}

export default FavoritesHeader;