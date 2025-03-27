// MobileHeader.tsx
"use client";
import { SearchOutlined, Close, ArrowBack } from "@mui/icons-material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { MenuItem } from "@/lib/types";

export default function MobileHeader({menulist}:{menulist:MenuItem[]}) {
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState<boolean>(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);
  const searchMenuRef = useRef<HTMLDivElement>(null);
  const navMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        searchMenuRef.current &&
        !searchMenuRef.current.contains(event.target as Node) &&
        navMenuRef.current &&
        !navMenuRef.current.contains(event.target as Node)
      ) {
        setIsSearchMenuOpen(false);
        setIsNavMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const iconVariants: Variants = {
    closed: { rotate: 0, scale: 1 },
    open: { rotate: 90, scale: 1.1 },
  };

  return (
    <div className="md:hidden w-full header pt-4 fixed top-0 left-0 z-50 ">
      <div className="cbox flex justify-between items-center px-4">
        <div className="flex w-full items-center flex-row-reverse justify-between">
          <motion.button
            className="flex text-white items-center"
            onClick={() => {
              setIsSearchMenuOpen(!isSearchMenuOpen);
              setIsNavMenuOpen(false);
            }}
            initial="closed"
            animate={isSearchMenuOpen ? "open" : "closed"}
            variants={iconVariants}
          >
            {isSearchMenuOpen ? <Close fontSize="large" /> : <MenuIcon fontSize="large" />}
          </motion.button>

          <div className="flex flex-row-reverse items-center gap-x-4">
            <Link href={"./"}>
              <Image
                src={"/image/dark_logo.png"}
                width={300}
                height={200}
                className="h-8 w-auto max-w-[120px] sm:max-w-[132px]"
                alt="logo"
              />
            </Link>
            <motion.button
              className="flex items-center"
              onClick={() => {
                setIsNavMenuOpen(!isNavMenuOpen);
                setIsSearchMenuOpen(false);
              }}
              initial="closed"
              animate={isNavMenuOpen ? "open" : "closed"}
              variants={iconVariants}
            >
              {isNavMenuOpen ? (
                <Close className="bg-red-500 text-white rounded-2xl p-1" fontSize="large" />
              ) : (
                <ArrowBack className="bg-red-500 text-white rounded-2xl p-1" fontSize="large" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile search menu */}
      <div
        ref={searchMenuRef}
        className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out bg-black text-white z-50 ${
          isSearchMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex p-5 flex-col items-start gap-y-4">
          <div className="flex justify-center items-center relative w-full">
            <input
              type="text"
              placeholder="جستجو..."
              className="w-full p-2 text-gray-300 bg-[#0D1619] outline-none"
            />
            <SearchOutlined className="absolute left-5" />
          </div>
          <Link
            className="bg-red-600 py-2 px-6 text-white rounded-lg flex justify-center items-center hover:bg-red-700 transition-colors"
            href={"../login"}
            onClick={() => setIsSearchMenuOpen(false)}
          >
            ورود
          </Link>
        </div>
      </div>

      {/* Mobile navigation menu */}
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
          ref={navMenuRef}
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