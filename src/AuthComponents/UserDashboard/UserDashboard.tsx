"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";

interface PasswordState {
  current: string;
  new: string;
  confirm: string;
}

interface Subscription {
  id: number;
  plan: string;
  daysLeft: number;
  totalDays: number;
  price: string;
}

export default function UserDashboard(){
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"subscriptions" | "favorites" | "password">("subscriptions");
  const [password, setPassword] = useState<PasswordState>({ current: "", new: "", confirm: "" });

  const subscriptions: Subscription[] = [
    { id: 1, plan: "یک ماهه", daysLeft: 15, totalDays: 30, price: "۴۵,۰۰۰ تومان" },
    { id: 2, plan: "سه ماهه", daysLeft: 45, totalDays: 90, price: "۱۲۹,۰۰۰ تومان" },
  ];


  const handlePasswordChange = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log("Password change requested:", password);
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-teal-950 to-black text-white px-4 py-8 md:px-8 lg:py-12">
      <div className="cbox mx-auto ">
        <header className="mb-10 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-red-500 md:text-4xl">
            پنل کاربری
          </h1>
          <button
            onClick={() => router.push("/logout")}
            className="rounded-lg bg-red-600 px-4 py-2 font-medium transition-all hover:bg-red-700 hover:shadow-lg"
          >
            خروج
          </button>
        </header>

        <nav className="mb-8 flex gap-6 border-b border-gray-800">
          {["subscriptions", "password"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              className={`pb-3 font-medium transition-colors ${
                activeTab === tab
                  ? "border-b-2 border-teal-400 text-teal-300"
                  : "text-gray-400 hover:text-teal-200"
              }`}
            >
              {tab === "subscriptions" ? "اشتراک‌ها"  : "تغییر رمز"}
            </button>
          ))}
        </nav>

        <main className="animate-fadeIn">
          {activeTab === "subscriptions" && (
            <div className="grid gap-6 sm:grid-cols-2">
              {subscriptions.map((sub) => (
                <div
                  key={sub.id}
                  className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg transition-all hover:shadow-xl"
                >
                  <h3 className="mb-4 text-lg font-semibold text-teal-200">{sub.plan}</h3>
                  <div className="relative flex justify-center">
                    <CircularProgress
                      variant="determinate"
                      value={(sub.daysLeft / sub.totalDays) * 100}
                      size={90}
                      thickness={5}
                      sx={{ color: "#2dd4bf" }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                      {sub.daysLeft} روز
                    </span>
                  </div>
                  <p className="mt-4 text-gray-300">قیمت: {sub.price}</p>
                  <button className="mt-6 w-full rounded-lg bg-gradient-to-r from-red-500 to-teal-600 py-2.5 font-medium transition-all hover:from-teal-600 hover:to-red-500">
                    تمدید اشتراک
                  </button>
                </div>
              ))}
            </div>
          )}


          {activeTab === "password" && (
            <div className="mx-auto max-w-md">
              <div className="rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg">
                <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-teal-200">
                  <LockOutlined className="text-teal-400" /> تغییر رمز عبور
                </h2>
                <form onSubmit={handlePasswordChange} className="space-y-4">
                  {["current", "new", "confirm"].map((field) => (
                    <input
                      key={field}
                      type="password"
                      placeholder={
                        field === "current" ? "رمز فعلی" : field === "new" ? "رمز جدید" : "تکرار رمز جدید"
                      }
                      value={password[field as keyof PasswordState]}
                      onChange={(e) =>
                        setPassword({ ...password, [field]: e.target.value })
                      }
                      className="w-full rounded-lg border border-teal-600/50 bg-gray-700/50 p-3 text-gray-200 transition-all focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30"
                    />
                  ))}
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-r from-red-500 to-teal-600 py-3 font-medium transition-all hover:from-teal-600 hover:to-red-500 hover:shadow-lg"
                  >
                    تغییر رمز
                  </button>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}