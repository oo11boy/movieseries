// این کامپوننت تب اشتراک‌ها را نمایش می‌دهد، شامل لیست اشتراک‌ها و جزئیات هر اشتراک
import React from "react";
import { CircularProgress } from "@mui/material";

interface Subscription {
  id: number;
  plan: string;
  daysLeft: number;
  totalDays: number;
  price: string;
}

interface SubscriptionsTabProps {
  subscriptions: Subscription[];
}

function SubscriptionsTab({ subscriptions }: SubscriptionsTabProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {subscriptions.map((sub) => (
        <div
          key={sub.id}
          className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-lg transition-all hover:shadow-xl"
        >
          <h3 className="mb-4 text-lg font-semibold text-teal-200">
            {sub.plan}
          </h3>
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
  );
}

export default SubscriptionsTab;