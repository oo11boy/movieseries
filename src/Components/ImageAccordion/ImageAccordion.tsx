'use client';

// این کامپوننت اصلی آکاردئون است که منطق و داده‌ها را مدیریت می‌کند و کامپوننت‌های دیگر را رندر می‌کند.
import { useState, useEffect } from 'react';
import { topSeries } from '@/lib/Json';
import { useRouter } from 'next/navigation';
import AccordionContainer from './AccordionContainer';
import SeriesItem from './SeriesItem';
import './ImageAccordion.css';
import { Series } from '@/lib/types';

const ImageAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePlayClick = (seriesTitle: string) => {
    router.push(`../series/${seriesTitle}`);
  };

  const displayedSeries: Series[] = topSeries
    .sort((a, b) => b.year - a.year)
    .slice(0, 5);

  return (
    <AccordionContainer>
      {displayedSeries.map((series, index) => (
        <SeriesItem
          key={index}
          series={series}
          index={index}
          activeIndex={activeIndex}
          isMobile={isMobile}
          setActiveIndex={setActiveIndex}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </AccordionContainer>
  );
};

export default ImageAccordion;