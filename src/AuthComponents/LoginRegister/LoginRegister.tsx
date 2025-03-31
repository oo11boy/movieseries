"use client";
import React, { useState, FormEvent, useEffect } from "react";
import { CheckCircle, Email, Phone, Person, Lock, Info, Login, HelpOutline } from "@mui/icons-material";
import "./LoginRegister.css";

interface UserData {
  firstName: string;
  lastName: string;
  password: string;
  secondaryInput: string;
}

const LoginRegister: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [inputValue, setInputValue] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [forgotInput, setForgotInput] = useState<string>("");
  const [userData, setUserData] = useState<UserData>({
    firstName: "",
    lastName: "",
    password: "",
    secondaryInput: "",
  });
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" | "" }>({
    text: "",
    type: "",
  });

  const isEmail = (value: string): boolean => value.includes("@");
  const isPhone = (value: string): boolean => /^\d{10,11}$/.test(value);

  const checkUserExists = async (value: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return isEmail(value); // برای دمو
  };

  const handleInitialSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue) {
      setMessage({ text: "لطفاً شماره موبایل یا ایمیل وارد کنید!", type: "error" });
      return;
    }
    setMessage({ text: "در حال بررسی...", type: "" });
    const userExists = await checkUserExists(inputValue);
    setMessage({ text: userExists ? "خوش آمدید!" : "ثبت‌نام کنید!", type: "success" });
    setTimeout(() => setStep(userExists ? 2 : 3), 800);
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (!password) {
      setMessage({ text: "رمز عبور را وارد کنید!", type: "error" });
      return;
    }
    setMessage({ text: "ورود با موفقیت انجام شد!", type: "success" });
    console.log("Login with:", inputValue, password);
  };

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    if (!userData.firstName || !userData.lastName || !userData.password) {
      setMessage({ text: "همه فیلدها را پر کنید!", type: "error" });
      return;
    }
    setMessage({ text: "ثبت‌نام با موفقیت انجام شد!", type: "success" });
    console.log("Register with:", inputValue, userData);
  };

  const handleForgotPassword = (e: FormEvent) => {
    e.preventDefault();
    if (!forgotInput) {
      setMessage({ text: "لطفاً شماره موبایل یا ایمیل را وارد کنید!", type: "error" });
      return;
    }
    setMessage({ text: "در حال ارسال لینک...", type: "" });
    setTimeout(() => {
      setMessage({ text: "لینک بازنشانی رمز عبور ارسال شد!", type: "success" });
      console.log("Password reset link sent to:", forgotInput);
      setTimeout(() => setStep(1), 2000);
    }, 1000);
  };

 
  useEffect(() => {
    setTimeout(() => {
      setMessage({ text: "", type: "" });
    }, 3000);
  }, [message]);

  return (
    <div className="h-[85vh] sm:min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-lg mx-auto">
        {/* Message Notification */}
        {message.text && (
          <div
            className={`fixed top-8 left-1/2 transform -translate-x-1/2 p-3 rounded-lg shadow-lg flex items-center gap-2 animate-slide-down z-50 ${
              message.type === "success"
                ? "bg-teal-600"
                : message.type === "error"
                ? "bg-red-600"
                : "bg-gray-700"
            }`}
          >
            <Info className="text-white" />
            <span className="text-sm md:text-base">{message.text}</span>
          </div>
        )}

        {/* Step 1: Initial Input */}
        {step === 1 && (
          <div className="bg-gradient-to-br from-gray-800 to-teal-900 p-6 rounded-2xl shadow-2xl animate-zoom-in border border-teal-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-teal-200 text-center flex items-center justify-center gap-3">
              <CheckCircle className="text-teal-300 animate-pulse" />
              ورود یا ثبت‌نام
            </h2>
            <form onSubmit={handleInitialSubmit}>
              <div className="relative mb-6 flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
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
              <p className="text-center">
                با ورود، با قوانین ما موافقت می‌کنید
              </p>
              <button
                onClick={() => setStep(4)}
                className="hover:underline hover:text-teal-200 transition-colors mt-2 md:mt-0"
              >
                فراموشی رمز عبور؟
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Login */}
        {step === 2 && (
          <div className="bg-gradient-to-br from-gray-800 to-teal-900 p-6 rounded-2xl shadow-2xl animate-zoom-in border border-teal-700">
            <h2 className="text-2xl md:text-3xl mb-6 font-bold text-teal-200 text-center flex items-center justify-center gap-3">
              <Lock className="text-teal-300 animate-pulse" />
              ورود به حساب
            </h2>
            <form onSubmit={handleLogin}>
              <div className="relative mb-6 flex items-center">
                {isEmail(inputValue) ? (
                  <Email className="absolute right-3 text-teal-300" />
                ) : (
                  <Phone className="absolute right-3 text-teal-300" />
                )}
                <input
                  type="text"
                  value={inputValue}
                  readOnly
                  className="w-full p-3 pr-NNNN12 bg-gray-900 text-white rounded-lg border border-teal-500 opacity-70 text-sm md:text-base"
                />
              </div>
              <div className="relative mb-6 flex items-center">
                <Lock className="absolute right-3 text-teal-300 group-hover:scale-125 transition-transform" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="رمز عبور"
                  className="w-full p-3 pr-12 bg-gray-900 text-white rounded-lg border border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-400/50 transition-all hover:border-teal-300 text-sm md:text-base"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-red-500 to-teal-600 text-white px-6 py-3 rounded-lg w-full hover:from-teal-600 hover:to-red-500 transition-all font-bold shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <Login className="text-lg md:text-xl" />
                ورود
              </button>
            </form>
            <div className="flex flex-col md:flex-row justify-between mt-4 text-teal-300 text-xs md:text-sm">
              <button
                onClick={() => setStep(1)}
                className="hover:underline hover:text-teal-200 transition-colors mb-2 md:mb-0"
              >
                بازگشت
              </button>
              <button
                onClick={() => setStep(4)}
                className="hover:underline hover:text-teal-200 transition-colors"
              >
                فراموشی رمز عبور؟
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Register */}
        {step === 3 && (
          <div className="bg-gradient-to-br from-gray-800 to-teal-900 p-6 rounded-2xl shadow-2xl animate-zoom-in border border-teal-700">
            <h2 className="text-2xl md:text-3xl mb-6 font-bold text-teal-200 text-center flex items-center justify-center gap-3">
              <Person className="text-teal-300 animate-pulse" />
              ثبت‌نام
            </h2>
            <form onSubmit={handleRegister}>
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
                  onChange={(e) => setUserData({ ...userData, secondaryInput: e.target.value })}
                  placeholder={isEmail(inputValue) ? "شماره موبایل" : "ایمیل"}
                  className="w-full p-3 pr-12 bg-gray-900 text-white rounded-lg border border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-400/50 transition-all hover:border-teal-300 text-sm md:text-base"
                />
              </div>
              <div className="relative mb-4 flex items-center">
                <Person className="absolute right-3 text-teal-300 group-hover:scale-125 transition-transform" />
                <input
                  type="text"
                  value={userData.firstName}
                  onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                  placeholder="نام"
                  className="w-full p-3 pr-12 bg-gray-900 text-white rounded-lg border border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-400/50 transition-all hover:border-teal-300 text-sm md:text-base"
                />
              </div>
              <div className="relative mb-4 flex items-center">
                <Person className="absolute right-3 text-teal-300 group-hover:scale-125 transition-transform" />
                <input
                  type="text"
                  value={userData.lastName}
                  onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                  placeholder="نام خانوادگی"
                  className="w-full p-3 pr-12 bg-gray-900 text-white rounded-lg border border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-400/50 transition-all hover:border-teal-300 text-sm md:text-base"
                />
              </div>
              <div className="relative mb-6 flex items-center">
                <Lock className="absolute right-3 text-teal-300 group-hover:scale-125 transition-transform" />
                <input
                  type="password"
                  value={userData.password}
                  onChange={(e) => setUserData({ ...userData, password: e.target.value })}
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
                onClick={() => setStep(1)}
                className="hover:underline hover:text-teal-200 transition-colors mb-2 md:mb-0"
              >
                بازگشت
              </button>
              <p>
                حساب دارید؟{" "}
                <span
                  onClick={() => setStep(2)}
                  className="hover:underline hover:text-teal-200 cursor-pointer"
                >
                  ورود
                </span>
              </p>
            </div>
          </div>
        )}

        {/* Step 4: Forgot Password */}
        {step === 4 && (
          <div className="bg-gradient-to-br from-gray-800 to-teal-900 p-6 rounded-2xl shadow-2xl animate-zoom-in border border-teal-700">
            <h2 className="text-2xl md:text-3xl mb-6 font-bold text-teal-200 text-center flex items-center justify-center gap-3">
              <Lock className="text-teal-300 animate-pulse" />
              فراموشی رمز عبور
            </h2>
            <form onSubmit={handleForgotPassword}>
              <div className="relative mb-6 flex items-center">
                <input
                  type="text"
                  value={forgotInput}
                  onChange={(e) => setForgotInput(e.target.value)}
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
                onClick={() => setStep(2)}
                className="hover:underline hover:text-teal-200 transition-colors mb-2 md:mb-0"
              >
                بازگشت به ورود
              </button>
              <button
                onClick={() => setStep(1)}
                className="hover:underline hover:text-teal-200 transition-colors"
              >
                صفحه اصلی
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-6 text-teal-400 text-xs md:text-sm">
          <p>© 2025 شرکت ما. همه حقوق محفوظ است.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;