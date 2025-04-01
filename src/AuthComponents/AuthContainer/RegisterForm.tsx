/* 
 * این کامپوننت برای مدیریت فرم ثبت‌نام کاربر طراحی شده است.
 * وظیفه آن جمع‌آوری اطلاعات کاربر (نام، نام خانوادگی، رمز عبور و ورودی ثانویه) و ارسال آن برای ثبت‌نام است.
 * همچنین دکمه بازگشت و لینک ورود را شامل می‌شود.
 */

"use client";
import React, { FormEvent } from "react";
import { Person, Lock, Email, Phone } from "@mui/icons-material";

interface RegisterFormProps {
  inputValue: string;
  userData: {
    firstName: string;
    lastName: string;
    password: string;
    secondaryInput: string;
  };
  onUserDataChange: (field: string, value: string) => void;
  onSubmit: (e: FormEvent) => void;
  onBack: () => void;
  onLogin: () => void;
  isEmail: (value: string) => boolean;
  isPhone: (value: string) => boolean;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  inputValue,
  userData,
  onUserDataChange,
  onSubmit,
  onBack,
  onLogin,
  isEmail,
  isPhone,
}) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-teal-900 p-6 rounded-2xl shadow-2xl animate-zoom-in border border-teal-700">
      <h2 className="text-2xl md:text-3xl mb-6 font-bold text-teal-200 text-center flex items-center justify-center gap-3">
        <Person className="text-teal-300 animate-pulse" />
        ثبت‌نام
      </h2>
      <form onSubmit={onSubmit}>
        <div className="relative mb-4 flex items-center">
          {isEmail(inputValue) ? (
            <Email className="absolute right-3 text-teal-300" />
          ) : (
            <Phone className="absolute right-3 text-teal-300" />
          )}
          <input
            type="text"
            value={inputValue}
            readOnly
            className="w-full p-3 pr-12 bg-gray-900 text-white rounded-lg border border-teal-500 opacity-70 text-sm md:text-base"
          />
        </div>
        <div className="relative mb-4 flex items-center">
          {isEmail(inputValue) ? (
            <Phone className="absolute right-3 text-teal-300 group-hover:scale-125 transition-transform" />
          ) : (
            <Email className="absolute right-3 text-teal-300 group-hover:scale-125 transition-transform" />
          )}
          <input
            type="text"
            value={userData.secondaryInput}
            onChange={(e) => onUserDataChange("secondaryInput", e.target.value)}
            placeholder={isEmail(inputValue) ? "شماره موبایل" : "ایمیل"}
            className="w-full p-3 pr-12 bg-gray-900 text-white rounded-lg border border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-400/50 transition-all hover:border-teal-300 text-sm md:text-base"
          />
        </div>
        <div className="relative mb-4 flex items-center">
          <Person className="absolute right-3 text-teal-300 group-hover:scale-125 transition-transform" />
          <input
            type="text"
            value={userData.firstName}
            onChange={(e) => onUserDataChange("firstName", e.target.value)}
            placeholder="نام"
            className="w-full p-3 pr-12 bg-gray-900 text-white rounded-lg border border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-400/50 transition-all hover:border-teal-300 text-sm md:text-base"
          />
        </div>
        <div className="relative mb-4 flex items-center">
          <Person className="absolute right-3 text-teal-300 group-hover:scale-125 transition-transform" />
          <input
            type="text"
            value={userData.lastName}
            onChange={(e) => onUserDataChange("lastName", e.target.value)}
            placeholder="نام خانوادگی"
            className="w-full p-3 pr-12 bg-gray-900 text-white rounded-lg border border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-400/50 transition-all hover:border-teal-300 text-sm md:text-base"
          />
        </div>
        <div className="relative mb-6 flex items-center">
          <Lock className="absolute right-3 text-teal-300 group-hover:scale-125 transition-transform" />
          <input
            type="password"
            value={userData.password}
            onChange={(e) => onUserDataChange("password", e.target.value)}
            placeholder="رمز عبور"
            className="w-full p-3 pr-12 bg-gray-900 text-white rounded-lg border border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-400/50 transition-all hover:border-teal-300 text-sm md:text-base"
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-red-500 to-teal-600 text-white px-6 py-3 rounded-lg w-full hover:from-teal-600 hover:to-red-500 transition-all font-bold shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2 text-sm md:text-base"
        >
          <Person className="text-lg md:text-xl" />
          ثبت‌نام
        </button>
      </form>
      <div className="flex flex-col md:flex-row justify-between mt-4 text-teal-300 text-xs md:text-sm">
        <button
          onClick={onBack}
          className="hover:underline hover:text-teal-200 transition-colors mb-2 md:mb-0"
        >
          بازگشت
        </button>
        <p>
          حساب دارید؟{" "}
          <span onClick={onLogin} className="hover:underline hover:text-teal-200 cursor-pointer">
            ورود
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;