'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { topSeries } from '@/lib/Json'; // تغییر از topMovies به topSeries
import AddIcon from '@mui/icons-material/Add';
import { MovieOutlined } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import './ImageAccordion.css';

const ImageAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(-1); // همه کادرها ابتدا بسته هستند
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  // بررسی اندازه صفحه برای موبایل
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // موبایل زیر 768px
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (index:number) => {
    if (isMobile) {
      setActiveIndex(index === activeIndex ? -1 : index); // در موبایل با کلیک باز و بسته می‌شه
    }
  };

  const handlePlayClick = (seriesTitle:string) => {
    router.push(`../series/${seriesTitle}`); // تغییر مسیر برای سریال‌ها
  };

  // محدود کردن به حداکثر 5 سریال آخر (مرتب‌سازی بر اساس سال به‌عنوان مثال)
  const displayedSeries = topSeries
    .sort((a, b) => b.year - a.year) // مرتب‌سازی بر اساس سال (جدیدترین‌ها در بالا)
    .slice(0, 5);

  return (
    <div className="cbox mx-auto yekan   rounded-2xl md:py-8 shadow-lg">
      <div className="flex flex-col lg:flex-row h-[600px] lg:h-[400px] gap-2 md:gap-4">
        {displayedSeries.map((series, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden cursor-pointer rounded-xl"
            onHoverStart={() => !isMobile && setActiveIndex(index)} // هوور فقط در دسکتاپ
            onHoverEnd={() => !isMobile && setActiveIndex(-1)} // بازگشت به حالت بسته در دسکتاپ
            onClick={() => handleClick(index)} // کلیک برای موبایل
            animate={{
              flex: activeIndex === index ? 3 : 1, // نسبت کوچک‌تر برای موبایل
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
            style={{
              backgroundImage: `url(${series.image}?w=800)`,
              backgroundSize: 'cover',
              backgroundPosition: activeIndex === index ? '20% 20%' : 'center',
              backgroundRepeat: 'no-repeat',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)', // سایه برای عمق بیشتر
            }}
          >
            {/* نمایش متن به‌روزرسانی و نام سریال وقتی کادر بسته است */}
            {activeIndex !== index && (
              <motion.div
                className="absolute inset-0 flex items-end justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className=" text-container   w-full text-white px-6 py-3 text-sm font-bold">
                <span className='lg:hidden'>   {series.title} -</span>
                   {series.latestUpdate}
              
                </div>
<div className='black-overlay'></div>
                <div className="yekanh hidden lg:block w-full text-center bg-gradient-to-b from-black-500 z-12 absolute top-0 text-white px-6 py-3 text-sm font-bold">
                {series.title}
                </div>
              </motion.div>
            )}

            <motion.div
              className={`absolute inset-0 rounded-xl border-2 ${
                activeIndex === index || (!isMobile && index === activeIndex)
                  ? 'border-gradient'
                  : 'border-transparent'
              }`}
              style={{
                zIndex: 1,
              }}
            />

            {/* اطلاعات اضافی در حالت فعال (باز) */}
            {activeIndex === index && (
              <motion.div
                className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  zIndex: 2,
                }}
              >
                <h3 className="text-md yekanh md:text-xl flex justify-start items-center gap-3 my-2 font-bold text-white font-sans drop-shadow-md">
                  <MovieOutlined style={{ color: '#ff6b6b', fontSize: '1.5rem' }} /> {series.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-100 my-2 font-light line-clamp-3 drop-shadow-sm">
                  {series.description}
                </p>
                <ul className="flex yekan flex-col gap-1 text-sm my-2 text-gray-200 font-medium drop-shadow-sm">
                  <li>{series.year}</li>
                  <li>{series.genre}</li>
                </ul>
                <div className="flex items-center gap-4 mt-4">
                  <button className="bg-gradient-to-r from-gray-600 to-gray-700 p-3 text-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200">
                    <AddIcon style={{ fontSize: '1.2rem' }} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayClick(series.title);
                    }}
                    className="flex-1 yekan bg-gradient-to-r from-red-500 text-sm md:text-lg text-white py-3 px-6 rounded-full hover:to-teal-800 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    پخش کن
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageAccordion;