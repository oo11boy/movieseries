import {
  AccountCircleOutlined,
  FavoriteBorderOutlined,
  HomeOutlined,
  SearchOutlined,
  StorefrontOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import React from "react";

export default function BottomMenu() {
  return (
    <div className="fixed bottom-0 left-0 z-40 w-full  header text-white flex justify-around items-center p-3 sm:p-4 shadow-lg border-t border-teal-700">
      {/* آیتم خانه */}
      <Link
        href={"../"}
        className="flex flex-col items-center justify-center group hover:text-teal-300 transition-colors duration-300"
      >
        <HomeOutlined
          fontSize="medium"
          className="group-hover:scale-125 transition-transform duration-300"
        />
        <p className="text-xs sm:text-sm mt-1 font-light">خانه</p>
      </Link>
      <Link
        href={"../"}
        className="flex flex-col items-center justify-center group hover:text-teal-300 transition-colors duration-300"
      >
        <SearchOutlined
          fontSize="medium"
          className="group-hover:scale-125 transition-transform duration-300"
        />
        <p className="text-xs sm:text-sm mt-1 font-light">جستجو</p>
      </Link>

      {/* آیتم اشتراک */}
      <Link
        href={"../subscription"}
        className="flex flex-col items-center justify-center group hover:text-teal-300 transition-colors duration-300"
      >
        <StorefrontOutlined
          fontSize="medium"
          className="group-hover:scale-125 transition-transform duration-300"
        />
        <p className="text-xs sm:text-sm mt-1 font-light">اشتراک</p>
      </Link>

      {/* آیتم مدیریت اکانت */}
      <Link
        href={"../"}
        className="flex flex-col items-center justify-center group hover:text-teal-300 transition-colors duration-300"
      >
        <AccountCircleOutlined
          fontSize="medium"
          className="group-hover:scale-125 transition-transform duration-300"
        />
        <p className="text-xs sm:text-sm mt-1 font-light">مدیریت</p>
      </Link>

      {/* آیتم علاقه‌مندی */}
      <Link
        href={"../"}
        className="flex flex-col items-center justify-center group hover:text-teal-300 transition-colors duration-300"
      >
        <FavoriteBorderOutlined
          fontSize="medium"
          className="group-hover:scale-125 transition-transform duration-300"
        />
        <p className="text-xs sm:text-sm mt-1 font-light">علاقه‌مندی</p>
      </Link>
    </div>
  );
}
