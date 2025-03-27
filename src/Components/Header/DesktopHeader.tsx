// DesktopHeader.tsx
"use client";
import { SearchOutlined } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { MenuItem } from "@/lib/types";


export default function DesktopHeader({menulist}:{menulist:MenuItem[]}) {
  const [isDesktopSearchOpen, setIsDesktopSearchOpen] = useState<boolean>(false);
  const desktopSearchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        desktopSearchRef.current &&
        !desktopSearchRef.current.contains(event.target as Node)
      ) {
        setIsDesktopSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchVariants: Variants = {
    hidden: { opacity: 0, width: 0 },
    visible: { opacity: 1, width: "300px" },
  };

  return (
    <div className="hidden md:flex w-full header py-4 fixed top-0 left-0 z-50">
      <div className="cbox flex w-full items-center justify-between gap-x-4 px-4">
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
        <div className="flex items-center gap-x-4" ref={desktopSearchRef}>
          <motion.button
            className="text-white hover:text-red-600 z-10"
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
            style={{ backgroundColor: "#0D1619" }}
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
  );
}