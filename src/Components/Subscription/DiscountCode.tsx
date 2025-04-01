// این کامپوننت بخش کد تخفیف را نمایش می‌دهد
import React from "react";
import { Discount } from '@mui/icons-material';

function DiscountCode() {
  return (
    <div className="mt-10 bg-gradient-to-br from-gray-800 to-teal-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center space-x-2 mb-4">
        <Discount className="text-teal-300 animate-spin-slow" />
        <h6 className="text-lg font-semibold text-teal-200">کد تخفیف</h6>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <input
          type="text"
          placeholder="برای ثبت کد تخفیف ابتدا وارد شوید"
          readOnly
          className="w-full p-2 bg-gray-700 text-gray-200 rounded-lg border border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
        />
        <button className="bg-gradient-to-r from-red-500 to-teal-600 text-white px-6 py-2 rounded-lg hover:from-teal-600 hover:to-red-500 transition-all w-full sm:w-auto font-medium">
          ورود
        </button>
      </div>
    </div>
  );
}

export default DiscountCode;