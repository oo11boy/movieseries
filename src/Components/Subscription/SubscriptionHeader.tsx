// این کامپوننت سربرگ صفحه اشتراک را نمایش می‌دهد، شامل آیکون و عنوان
import React from "react";
import { StorefrontOutlined } from '@mui/icons-material';

function SubscriptionHeader() {
  return (
    <div className="flex items-center justify-center mb-8 space-x-3 text-xl sm:text-2xl md:text-3xl font-bold animate-fade-in">
      <StorefrontOutlined className="text-red-300" />
      <h2 className="yekan bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-red-500">
        خرید اشتراک
      </h2>
    </div>
  );
}

export default SubscriptionHeader;