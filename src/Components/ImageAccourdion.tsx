// components/ImageAccordion.js
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ImageAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0); // اولین آیتم پیش‌فرض بازه
  const [isMobile, setIsMobile] = useState(false);

  // بررسی اندازه صفحه برای موبایل
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // موبایل زیر 768px
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b',
      title: 'طبیعت',
    },
    {
      src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
      title: 'کوهستان',
    },
    {
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      title: 'ساحل',
    },
    {
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
      title: 'جنگل',
    },
  ];

  const handleClick = (index:number) => {
    if (isMobile) {
      setActiveIndex(index === activeIndex ? 0 : index); // در موبایل با کلیک باز و بسته می‌شه
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-4 md:py-8">
      <div className="flex h-[300px] md:h-[500px] gap-1 md:gap-2">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden cursor-pointer"
            onHoverStart={() => !isMobile && setActiveIndex(index)} // هوور فقط در دسکتاپ
            onHoverEnd={() => !isMobile && setActiveIndex(0)} // بازگشت به پیش‌فرض در دسکتاپ
            onClick={() => handleClick(index)} // کلیک برای موبایل
            animate={{
              flex: activeIndex === index ? 3 : 1, // نسبت کوچک‌تر برای موبایل
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
          >
            <motion.img
              src={`${image.src}?w=800`}
              alt={image.title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={false}
              animate={{
                scale: activeIndex === index ? 1.1 : 1,
              }}
              transition={{
                duration: 0.3,
              }}
            />
            {activeIndex === index && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 md:p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-sm md:text-lg font-semibold">{image.title}</h3>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageAccordion;