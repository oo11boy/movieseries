/* 
 * این کامپوننت برای نمایش پیام‌های اطلاع‌رسانی (مثل موفقیت، خطا یا در حال پردازش) طراحی شده است.
 * وظیفه آن رندر یک نوتیفیکیشن ثابت در بالای صفحه است که متن و نوع پیام (موفقیت، خطا یا معمولی) را نمایش می‌دهد.
 * از آیکون Info و استایل‌های مختلف برای نوع پیام استفاده می‌کند.
 */

"use client";
import React from "react";
import { Info } from "@mui/icons-material";

interface MessageProps {
  text: string;
  type: "success" | "error" | "";
}

const MessageNotification: React.FC<MessageProps> = ({ text, type }) => {
  return (
    <div
      className={`fixed top-8 left-1/2 transform -translate-x-1/2 p-3 rounded-lg shadow-lg flex items-center gap-2 animate-slide-down z-50 ${
        type === "success"
          ? "bg-teal-600"
          : type === "error"
          ? "bg-red-600"
          : "bg-gray-700"
      }`}
    >
      <Info className="text-white" />
      <span className="text-sm md:text-base">{text}</span>
    </div>
  );
};

export default MessageNotification;