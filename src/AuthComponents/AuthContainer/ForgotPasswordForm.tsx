/* 
 * این کامپوننت برای مدیریت فرم فراموشی رمز عبور کاربر طراحی شده است.
 * وظیفه آن دریافت شماره موبایل یا ایمیل کاربر و ارسال لینک بازنشانی رمز عبور است.
 * همچنین دکمه‌های بازگشت به ورود و بازگشت به صفحه اصلی را شامل می‌شود.
 */

"use client";
import React, { FormEvent } from "react";
import { Lock, Email, Phone, HelpOutline } from "@mui/icons-material";

interface ForgotPasswordFormProps {
  forgotInput: string;
  onForgotInputChange: (value: string) => void;
  onSubmit: (e: FormEvent) => void;
  onBackToLogin: () => void;
  onBackToInitial: () => void;
  isEmail: (value: string) => boolean;
  isPhone: (value: string) => boolean;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  forgotInput,
  onForgotInputChange,
  onSubmit,
  onBackToLogin,
  onBackToInitial,
  isEmail,
  isPhone,
}) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-teal-900 p-6 rounded-2xl shadow-2xl animate-zoom-in border border-teal-700">
      <h2 className="text-2xl md:text-3xl mb-6 font-bold text-teal-200 text-center flex items-center justify-center gap-3">
        <Lock className="text-teal-300 animate-pulse" />
        فراموشی رمز عبور
      </h2>
      <form onSubmit={onSubmit}>
        <div className="relative mb-6 flex items-center">
          <input
            type="text"
            value={forgotInput}
            onChange={(e) => onForgotInputChange(e.target.value)}
            placeholder="شماره موبایل یا ایمیل"
            className="w-full p-3 bg-gray-900 text-white rounded-lg border border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-400/50 transition-all hover:border-teal-300 pr-12 text-sm md:text-base"
          />
          <span className="absolute right-3 text-teal-300">
            {forgotInput ? (
              isEmail(forgotInput) ? (
                <Email />
              ) : isPhone(forgotInput) ? (
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
          <Email className="text-lg md:text-xl" />
          ارسال لینک بازنشانی
        </button>
      </form>
      <div className="flex flex-col md:flex-row justify-between mt-4 text-teal-300 text-xs md:text-sm">
        <button
          onClick={onBackToLogin}
          className="hover:underline hover:text-teal-200 transition-colors mb-2 md:mb-0"
        >
          بازگشت به ورود
        </button>
        <button
          onClick={onBackToInitial}
          className="hover:underline hover:text-teal-200 transition-colors"
        >
          صفحه اصلی
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;