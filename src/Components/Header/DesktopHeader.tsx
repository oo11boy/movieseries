"use client";
import { MenuItem } from "@/lib/types";
import { AccountCircleOutlined, Favorite, SearchOutlined, StoreOutlined } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DesktopHeader({ menulist }: { menulist: MenuItem[] }) {
  return (
    <div className="hidden md:flex w-full header py-4 fixed top-0 left-0 z-50">
      <div className="cbox flex w-full items-center justify-between gap-x-4">
        <div className="flex items-center gap-x-4">
          <Link href={"./"}>
            <Image
              src={"/image/dark_logo.png"}
              width={300}
              height={200}
              className="h-9 w-auto max-w-[132px]"
              alt="logo"
            />
          </Link>
          <ul className="flex justify-start items-center gap-x-6">
            {menulist.map((item) => (
              <Link href={item.link} key={item.id}>
                <li className="text-white hover:text-red-600 transition-colors">
                  {item.text}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-x-4">
          {/* دکمه علاقه‌مندی */}
          <button className="text-white hover:text-red-600 transition-colors">
            <Favorite />
          </button>
          {/* دکمه سرچ */}
          <Link href="/search">
            <button className="text-white hover:text-red-600 transition-colors">
              <SearchOutlined />
            </button>
          </Link>
          {/* دکمه خرید اشتراک */}
          <Link
            href="../subscription"
            className="group flex items-center gap-x-2 py-2 px-3 text-white bg-gradient-to-r from-red-600 to-teal-600 rounded-lg shadow-md hover:from-teal-600 hover:to-red-600 hover:shadow-lg transition-all duration-300"
          >
            <StoreOutlined className="group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm">خرید اشتراک</span>
          </Link>
          {/* دکمه حساب کاربری */}
          <Link
            href="../login"
            className="group flex items-center gap-x-2 py-2 px-3 text-white border border-teal-500 rounded-lg bg-transparent shadow-md hover:bg-teal-600 hover:border-teal-600 hover:shadow-lg transition-all duration-300"
          >
            <AccountCircleOutlined className="group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm">حساب کاربری</span>
          </Link>
        </div>
      </div>
    </div>
  );
}