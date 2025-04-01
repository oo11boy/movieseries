// این کامپوننت نویگیشن تب‌ها را مدیریت می‌کند و امکان سوئیچ بین تب‌ها را فراهم می‌کند
import React from "react";

interface NavigationProps {
  activeTab: "subscriptions" | "password";
  onTabChange: (tab: "subscriptions" | "password") => void;
}

function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="mb-8 flex gap-6 border-b border-gray-800">
      {["subscriptions", "password"].map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab as "subscriptions" | "password")}
          className={`pb-3 font-medium transition-colors ${
            activeTab === tab
              ? "border-b-2 border-teal-400 text-teal-300"
              : "text-gray-400 hover:text-teal-200"
          }`}
        >
          {tab === "subscriptions" ? "اشتراک‌ها" : "تغییر رمز"}
        </button>
      ))}
    </nav>
  );
}

export default Navigation;