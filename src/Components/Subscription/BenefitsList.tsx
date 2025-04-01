// این کامپوننت لیست مزایای اشتراک را نمایش می‌دهد
import React from "react";
import { CheckCircle } from '@mui/icons-material';

function BenefitsList() {
  const benefits = [
    "دسترسی به تمام کیفیت‌ها با یه اشتراک!",
    "مصرف اینترنت نیم‌بها با هر پلن.",
    "تماشا فقط داخل ایران ممکنه.",
  ];

  return (
    <ul className="mt-10 space-y-4 text-gray-200">
      {benefits.map((item, index) => (
        <li key={index} className="flex items-center space-x-2 animate-slide-in" style={{ animationDelay: `${index * 0.2}s` }}>
          <CheckCircle className="text-teal-300 hover:scale-125 transition-transform" fontSize="small" />
          <span className="text-sm md:text-base font-light">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default BenefitsList;