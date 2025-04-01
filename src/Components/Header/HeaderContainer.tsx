// Header.tsx
"use client";

import { MenuItem } from "@/lib/types";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import "./Header.css";
import BottomMenu from "../Footer/BottomMenu";


export const menulist: MenuItem[] = [
  { id: 1, text: "خانه", link: "../" },
  { id: 2, text: "سینمایی", link: "../movies" },
  { id: 3, text: "سریال", link: "../series" },
  { id: 5, text: "به زودی", link: "../comingsoon" },
];
export default function HeaderContainer() {
  return (
    <>
      <MobileHeader menulist={menulist} />
      <DesktopHeader menulist={menulist} />
      <div className="md:hidden">
        <BottomMenu />
      </div>
      <div className="w-full h-[70px]  "></div>
    </>
  );
}
