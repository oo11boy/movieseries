// این کامپوننت تب تغییر رمز را نمایش می‌دهد، شامل فرم برای وارد کردن رمز فعلی و جدید
import React from "react";
import { LockOutlined } from "@mui/icons-material";

interface PasswordState {
  current: string;
  new: string;
  confirm: string;
}

interface PasswordTabProps {
  password: PasswordState;
  setPassword: React.Dispatch<React.SetStateAction<PasswordState>>;
  onSubmit: (e: React.FormEvent) => void;
}

function PasswordTab({ password, setPassword, onSubmit }: PasswordTabProps) {
  return (
    <div className="mx-auto max-w-md">
      <div className="rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg">
        <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-teal-200">
          <LockOutlined className="text-teal-400" /> تغییر رمز عبور
        </h2>
        <form onSubmit={onSubmit} className="space-y-4">
          {["current", "new", "confirm"].map((field) => (
            <input
              key={field}
              type="password"
              placeholder={
                field === "current"
                  ? "رمز فعلی"
                  : field === "new"
                  ? "رمز جدید"
                  : "تکرار رمز جدید"
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
  );
}

export default PasswordTab;