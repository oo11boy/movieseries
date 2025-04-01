/*
 * این کامپوننت اصلی برای مدیریت کل فرآیند ورود و ثبت‌نام کاربر طراحی شده است.
 * وظیفه آن مدیریت حالت (state) مانند مرحله فعلی، ورودی‌ها، پیام‌ها و منطق کسب‌وکار (مانند بررسی وجود کاربر و ارسال فرم‌ها) است.
 * رندر UI را به کامپوننت‌های فرزند واگذار می‌کند.
 */

"use client";
import React, { useState, FormEvent, useEffect } from "react";
import MessageNotification from "./MessageNotification";
import AuthInitialStep from "./AuthInitialStep";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import "./AuthContainer.css";

interface UserData {
  firstName: string;
  lastName: string;
  password: string;
  secondaryInput: string;
}

const AuthContainer: React.FC = () => {
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
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error" | "";
  }>({
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
      setMessage({
        text: "لطفاً شماره موبایل یا ایمیل وارد کنید!",
        type: "error",
      });
      return;
    }
    setMessage({ text: "در حال بررسی...", type: "" });
    const userExists = await checkUserExists(inputValue);
    setMessage({
      text: userExists ? "خوش آمدید!" : "ثبت‌نام کنید!",
      type: "success",
    });
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
      setMessage({
        text: "لطفاً شماره موبایل یا ایمیل را وارد کنید!",
        type: "error",
      });
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
    <div className="h-[85vh] sm:h-[100vh] 2xl:h-[80vh] flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-lg mx-auto">
        {message.text && (
          <MessageNotification text={message.text} type={message.type} />
        )}

        {step === 1 && (
          <AuthInitialStep
            inputValue={inputValue}
            onInputChange={setInputValue}
            onSubmit={handleInitialSubmit}
            onForgotPassword={() => setStep(4)}
            isEmail={isEmail}
            isPhone={isPhone}
          />
        )}

        {step === 2 && (
          <LoginForm
            inputValue={inputValue}
            password={password}
            onPasswordChange={setPassword}
            onSubmit={handleLogin}
            onBack={() => setStep(1)}
            onForgotPassword={() => setStep(4)}
            isEmail={isEmail}
            isPhone={isPhone}
          />
        )}

        {step === 3 && (
          <RegisterForm
            inputValue={inputValue}
            userData={userData}
            onUserDataChange={(field, value) =>
              setUserData((prev) => ({ ...prev, [field]: value }))
            }
            onSubmit={handleRegister}
            onBack={() => setStep(1)}
            onLogin={() => setStep(2)}
            isEmail={isEmail}
            isPhone={isPhone}
          />
        )}

        {step === 4 && (
          <ForgotPasswordForm
            forgotInput={forgotInput}
            onForgotInputChange={setForgotInput}
            onSubmit={handleForgotPassword}
            onBackToLogin={() => setStep(2)}
            onBackToInitial={() => setStep(1)}
            isEmail={isEmail}
            isPhone={isPhone}
          />
        )}
      </div>
    </div>
  );
};

export default AuthContainer;
