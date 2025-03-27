"use client";
import { SearchOutlined, Close, ArrowBack } from "@mui/icons-material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./header.css";

export default function Header() {
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isDesktopSearchOpen, setIsDesktopSearchOpen] = useState(false);
  const searchMenuRef = useRef(null);
  const navMenuRef = useRef(null);
  const desktopSearchRef = useRef(null);

  const menulist = [
    { id: 1, text: "خانه", link: "../" },
    { id: 2, text: "سینمایی", link: "../movies" },
    { id: 3, text: "سریال", link: "../series" },
    { id: 4, text: "ویدیوها", link: "../videos" },
    { id: 5, text: "به زودی", link: "../comingsoon" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchMenuRef.current &&
        !searchMenuRef.current.contains(event.target) &&
        navMenuRef.current &&
        !navMenuRef.current.contains(event.target) &&
        desktopSearchRef.current &&
        !desktopSearchRef.current.contains(event.target)
      ) {
        setIsSearchMenuOpen(false);
        setIsNavMenuOpen(false);
        setIsDesktopSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const iconVariants = {
    closed: { rotate: 0, scale: 1 },
    open: { rotate: 90, scale: 1.1 },
  };

  const searchVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: { opacity: 1, width: "300px" },
  };

  return (
    <>
      <div className="w-full header pt-4 lg:py-4 fixed top-0 left-0 z-50 bg-white">
        <div className="cbox flex justify-between items-center px-4">
          <div className="md:hidden flex w-full items-center flex-row-reverse justify-between">
            <motion.button
              className="flex items-center"
              onClick={() => {
                setIsSearchMenuOpen(!isSearchMenuOpen);
                setIsNavMenuOpen(false);
              }}
              initial="closed"
              animate={isSearchMenuOpen ? "open" : "closed"}
              variants={iconVariants}
              transition={{ duration: 0.3 }}
            >
              {isSearchMenuOpen ? (
                <Close fontSize="large" />
              ) : (
                <MenuIcon fontSize="large" />
              )}
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
                transition={{ duration: 0.3 }}
              >
                {isNavMenuOpen ? (
                  <Close
                    fontSize="large"
                    className="bg-red-500 text-white rounded-2xl p-1"
                  />
                ) : (
                  <ArrowBack
                    fontSize="large"
                    className="bg-red-500 text-white rounded-2xl p-1"
                  />
                )}
              </motion.button>
            </div>
          </div>

          {/* چیدمان دسکتاپ */}
          <div className="hidden md:flex w-full items-center justify-between gap-x-4">
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
                    <li className="text-gray-700 hover:text-red-600 transition-colors">
                      {item.text}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-x-4" ref={desktopSearchRef}>
              <motion.button
                className="text-gray-700 hover:text-red-600 z-10"
                onClick={() => setIsDesktopSearchOpen(!isDesktopSearchOpen)}
              >
                <SearchOutlined />
              </motion.button>
              <motion.div
                initial="hidden"
                animate={isDesktopSearchOpen ? "visible" : "hidden"}
                variants={searchVariants}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute left-33 rounded-lg shadow-lg overflow-hidden flex items-center"
                style={{ backgroundColor: "#0D1619" }} // رنگ پس‌زمینه
              >
                <input
                  type="text"
                  placeholder="جستجو..."
                  className="w-full p-2 text-gray-300 bg-transparent outline-none"
                />
              </motion.div>
              <Link
                className="bg-red-600 py-2 px-6 text-white rounded-lg flex justify-center items-center hover:bg-red-700 transition-colors"
                href={"../login"}
              >
                ورود
              </Link>
            </div>
          </div>
        </div>

        {/* منوی جستجو موبایل */}
        <div
          ref={searchMenuRef}
          className={`md:hidden mt-4 overflow-hidden transition-all duration-300 ease-in-out bg-black text-white z-50 ${
            isSearchMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex p-5 flex-col items-start gap-y-4 ">
            <div className="flex justify-center items-center relative w-full">
            <input
              type="text"
              placeholder="جستجو..."
              className="w-full p-2 text-gray-300 bg-[#0D1619] outline-none"
            />

            <SearchOutlined className="absolute left-5"/>
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
      </div>

      {/* منوی ناوبری موبایل */}
      <div
        className={`md:hidden fixed inset-0 z-60 transition-opacity duration-300 ease-in-out ${
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
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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
                <Link
                  href={item.link}
                  key={item.id}
                  onClick={() => setIsNavMenuOpen(false)}
                >
                  <li className="text-white hover:text-red-600 transition-colors text-xl font-medium">
                    {item.text}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
