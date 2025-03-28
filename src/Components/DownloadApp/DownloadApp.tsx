import React from "react";

export default function DownloadApp() {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* بخش اصلی */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
            اپلیکیشن فیلم و سریال را دانلود کنید
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
           جدیدترین انیمیشن ها و فیلم های جهان در اختیار شماست.
          </p>

          {/* دکمه‌های دانلود */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 my-10">
            <a
              href="#"
              className="flex items-center bg-gray-800 border border-gray-700 hover:bg-gray-700 rounded-xl px-4 py-3 w-full sm:w-56 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                alt="Google Play"
                className="w-8 sm:w-9"
              />
              <div className="text-right mr-3">
                <p className="text-xs text-gray-400">دانلود از</p>
                <p className="text-sm sm:text-base font-semibold">گوگل پلی استور</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center bg-gray-800 border border-gray-700 hover:bg-gray-700 rounded-xl px-4 py-3 w-full sm:w-56 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                alt="Apple Store"
                className="w-8 sm:w-9"
              />
              <div className="text-right mr-3">
                <p className="text-xs text-gray-400">دانلود از</p>
                <p className="text-sm sm:text-base font-semibold">اپل استور</p>
              </div>
            </a>
          </div>
        </div>

     
      </div>
    </div>
  );
}