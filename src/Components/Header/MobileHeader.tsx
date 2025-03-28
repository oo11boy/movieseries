"use client";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { MenuItem } from "@/lib/types";

export default function MobileHeader({ menulist }: { menulist: MenuItem[] }) {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);

  const iconVariants: Variants = {
    closed: { rotate: 0, scale: 1 },
    open: { rotate: 90, scale: 1.1 },
  };

  return (
    <div className="md:hidden w-full header py-4 fixed top-0 left-0 z-50">
      <div className="cbox flex justify-between items-center px-4">
        <div className="flex w-full items-center justify-between">
          {/* لوگو */}
          <Link href={"./"}>
            <Image
              src={"/image/dark_logo.png"}
              width={300}
              height={200}
              className="h-8 w-auto max-w-[120px] sm:max-w-[132px]"
              alt="logo"
            />
          </Link>
          {/* دکمه منوی همبرگری */}
          <motion.button
            className="flex text-white items-center"
            onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
            initial="closed"
            animate={isNavMenuOpen ? "open" : "closed"}
            variants={iconVariants}
          >
            {isNavMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </motion.button>
        </div>
      </div>

      {/* منوی ناوبری موبایل */}
      <div
        className={`fixed inset-0 z-60 transition-opacity duration-300 ease-in-out ${
          isNavMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#17171761]"
          onClick={() => setIsNavMenuOpen(false)}
        ></div>
        <div
          className={`fixed top-0 right-0 w-11/12 h-screen bg-black text-white shadow-lg transition-transform duration-300 ease-in-out ${
            isNavMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="relative w-full h-full flex flex-col p-6">
            <div className="flex justify-between items-center">
              <Link href={"./"}>
                <Image
                  src={"/image/dark_logo.png"}
                  width={300}
                  height={200}
                  className="h-9 w-auto max-w-[132px]"
                  alt="logo"
                />
              </Link>
              <button
                className="text-white hover:text-red-600 transition-colors"
                onClick={() => setIsNavMenuOpen(false)}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col items-start gap-y-6 mt-16">
              {menulist.map((item) => (
                <Link href={item.link} key={item.id} onClick={() => setIsNavMenuOpen(false)}>
                  <li className="text-white hover:text-red-600 transition-colors text-xl font-medium">
                    {item.text}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}