// این کامپوننت اصلی است که صفحه اشتراک را مدیریت می‌کند و شامل تمام بخش‌های اصلی است
import React from "react";
import SubscriptionHeader from "./SubscriptionHeader";
import SubscriptionDescription from "./SubscriptionDescription";
import SubscriptionPlans from "./SubscriptionPlans";
import TaxNote from "./TaxNote";
import DiscountCode from "./DiscountCode";
import BenefitsList from "./BenefitsList";

export default function SubscriptionContainer() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-teal-950 h-auto text-white flex items-center justify-center">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-4xl">
        <SubscriptionHeader />
        <SubscriptionDescription />
        <SubscriptionPlans />
        <TaxNote />
        <DiscountCode />
        <BenefitsList />
      </div>
    </div>
  );
}