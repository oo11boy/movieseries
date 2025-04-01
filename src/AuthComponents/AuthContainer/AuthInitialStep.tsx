/* 
 * این کامپوننت برای مدیریت مرحله اولیه ورود یا ثبت‌نام کاربر طراحی شده است.
 * وظیفه آن دریافت شماره موبایل یا ایمیل کاربر و بررسی آن برای هدایت به مرحله بعدی (ورود یا ثبت‌نام) است.
 * همچنین دکمه ادامه و لینک فراموشی رمز عبور را شامل می‌شود.
 */

"use client";
import React, { FormEvent } from "react";
import { CheckCircle, HelpOutline, Email, Phone } from "@mui/icons-material";

interface AuthInitialStepProps {
  inputValue: string;
  onInputChange: (value: string) => void;
  onSubmit: (e: FormEvent) => void;
  onForgotPassword: () => void;
  isEmail: (value: string) => boolean;
  isPhone: (value: string) => boolean;
}

const AuthInitialStep: React.FC<AuthInitialStepProps> = ({
  inputValue,
  onInputChange,
  onSubmit,
  onForgotPassword,
  isEmail,
  isPhone,
}) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-teal-900 p-6 rounded-2xl shadow-2xl animate-zoom-in border border-teal-700">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-teal-200 text-center flex items-center justify-center gap-3">
        <CheckCircle className="text-teal-300 animate-pulse" />
        ورود یا ثبت‌نام
      </h2>
      <form onSubmit={onSubmit}>
        <div className="relative mb-6 flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            placeholder="شماره موبایل یا ایمیل"
            className="w-full p-3 bg-gray-900 text-white rounded-lg border border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-400/50 transition-all hover:border-teal-300 pr-12 text-sm md:text-base"
          />
          <span className="absolute right-3 text-teal-300">
            {inputValue ? (
              isEmail(inputValue) ? (
                <Email />
              ) : isPhone(inputValue) ? (
                <Phone />
              ) : (
                <HelpOutline />
              )
            ) : (
              <HelpOutline />
            )}
          </span>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-red-500 to-teal-600 text-white px-6 py-3 rounded-lg w-full hover:from-teal-600 hover:to-red-500 transition-all font-bold shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2 text-sm md:text-base"
        >
          <CheckCircle className="text-lg md:text-xl" />
          ادامه
        </button>
      </form>
      <div className="flex flex-col md:flex-row justify-between mt-4 text-teal-300 text-xs md:text-sm">
        <p className="text-center">با ورود، با قوانین ما موافقت می‌کنید</p>
        <button
          onClick={onForgotPassword}
          className="hover:underline hover:text-teal-200 transition-colors mt-2 md:mt-0"
        >
          فراموشی رمز عبور؟
        </button>
      </div>
    </div>
  );
};

export default AuthInitialStep;