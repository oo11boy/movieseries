// این کامپوننت مسئول نمایش هر آیتم سریال در آکاردئون است و انیمیشن‌ها و استایل‌های مربوط به آن را مدیریت می‌کند.
import { motion } from 'framer-motion';
import SeriesOverlay from './SeriesOverlay';
import SeriesDetails from './SeriesDetails';
import { Series } from '@/lib/types';

interface SeriesItemProps {
  series: Series;
  index: number;
  activeIndex: number;
  isMobile: boolean;
  setActiveIndex: (index: number) => void;
  handlePlayClick: (seriesTitle: string) => void;
}

const SeriesItem = ({
  series,
  index,
  activeIndex,
  isMobile,
  setActiveIndex,
  handlePlayClick,
}: SeriesItemProps) => {
  return (
    <motion.div
      className="relative overflow-hidden cursor-pointer rounded-xl"
      onHoverStart={() => !isMobile && setActiveIndex(index)}
      onHoverEnd={() => !isMobile && setActiveIndex(-1)}
      onClick={() => {
        if (isMobile) {
          setActiveIndex(index === activeIndex ? -1 : index);
        }
      }}
      animate={{
        flex: activeIndex === index ? 3 : 1,
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
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
      }}
    >
      {activeIndex !== index && <SeriesOverlay series={series} />}
      <motion.div
        className={`absolute inset-0 rounded-xl border-2 ${
          activeIndex === index || (!isMobile && index === activeIndex)
            ? 'border-gradient'
            : 'border-transparent'
        }`}
        style={{ zIndex: 1 }}
      />
      {activeIndex === index && (
        <SeriesDetails series={series} handlePlayClick={handlePlayClick} />
      )}
    </motion.div>
  );
};

export default SeriesItem;