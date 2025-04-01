// این کامپوننت اصلی است که پنل کاربری را مدیریت می‌کند، شامل تب‌ها، نویگیشن و منطق اصلی برنامه
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "./Header";
import SubscriptionsTab from "./SubscriptionsTab";
import PasswordTab from "./PasswordTab";
import Navigation from "./Navigation";


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

export default function UserDashboardContainer() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"subscriptions" | "password">("subscriptions");
  const [password, setPassword] = useState<PasswordState>({
    current: "",
    new: "",
    confirm: "",
  });

  const subscriptions: Subscription[] = [
    {
      id: 1,
      plan: "یک ماهه",
      daysLeft: 15,
      totalDays: 30,
      price: "۴۵,۰۰۰ تومان",
    },
    {
      id: 2,
      plan: "سه ماهه",
      daysLeft: 45,
      totalDays: 90,
      price: "۱۲۹,۰۰۰ تومان",
    },
  ];

  const handlePasswordChange = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log("Password change requested:", password);
  };

  return (
    <div className="h-auto bg-gradient-to-br from-gray-900 via-teal-950 to-black text-white px-4 py-8 md:px-8 lg:py-12">
      <div className="cbox mx-auto">
        <Header onLogout={() => router.push("/logout")} />
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="animate-fadeIn">
          {activeTab === "subscriptions" && <SubscriptionsTab subscriptions={subscriptions} />}
          {activeTab === "password" && <PasswordTab password={password} setPassword={setPassword} onSubmit={handlePasswordChange} />}
        </main>
      </div>
    </div>
  );
}