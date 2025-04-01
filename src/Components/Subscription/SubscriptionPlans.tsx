// این کامپوننت پلن‌های اشتراک را نمایش می‌دهد، شامل سه پلن مختلف
import React from "react";

function SubscriptionPlans() {
  const plans = [
    {
      duration: "یک ماهه",
      originalPrice: "۵۱,۰۰۰ تومان",
      discountedPrice: "۴۵,۰۰۰ تومان",
      discount: "۱۱٪ تخفیف",
    },
    {
      duration: "سه ماهه",
      originalPrice: "۱۴۵,۰۰۰ تومان",
      discountedPrice: "۱۲۹,۰۰۰ تومان",
      discount: "۱۱٪ تخفیف",
    },
    {
      duration: "شش ماهه",
      originalPrice: "۲۷۹,۰۰۰ تومان",
      discountedPrice: "۲۴۹,۰۰۰ تومان",
      discount: "۱۰٪ تخفیف",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {plans.map((plan, index) => (
        <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full animate-bounce">{plan.discount}</span>
              <h6 className="text-lg font-semibold text-teal-200">{plan.duration}</h6>
            </div>
            <div className="mt-auto text-right">
              <div className="text-gray-400 line-through text-sm">{plan.originalPrice}</div>
              <button className="bg-gradient-to-r from-red-500 to-teal-600 text-white px-4 py-2 rounded-lg mt-2 hover:from-teal-600 hover:to-red-500 transition-all w-full font-medium">
                {plan.discountedPrice}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SubscriptionPlans;