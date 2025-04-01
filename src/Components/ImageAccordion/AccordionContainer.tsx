'use client';

// این کامپوننت کانتینر اصلی آکاردئون است که ساختار کلی و استایل پایه را فراهم می‌کند.
import { ReactNode } from 'react';

interface AccordionContainerProps {
  children: ReactNode;
}

const AccordionContainer = ({ children }: AccordionContainerProps) => {
  return (
    <div className="cbox mx-auto yekan rounded-2xl md:py-8 shadow-lg">
      <div className="flex flex-col lg:flex-row h-[600px] lg:h-[400px] gap-2 md:gap-4">
        {children}
      </div>
    </div>
  );
};

export default AccordionContainer;