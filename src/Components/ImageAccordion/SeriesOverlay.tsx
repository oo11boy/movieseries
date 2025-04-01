// این کامپوننت لایه پوششی را نمایش می‌دهد که اطلاعات مختصر سریال (مانند عنوان و آخرین به‌روزرسانی) را در حالت بسته نشان می‌دهد.
import { Series } from '@/lib/types';
import { motion } from 'framer-motion';

interface SeriesOverlayProps {
  series: Series;
}

const SeriesOverlay = ({ series }: SeriesOverlayProps) => {
  return (
    <motion.div
      className="absolute inset-0 flex items-end justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="text-container w-full text-white px-6 py-3 text-sm font-bold">
        <span className="lg:hidden">{series.title} -</span>
        {series.latestUpdate}
      </div>
      <div className="black-overlay"></div>
      <div className="yekanh hidden lg:block w-full text-center bg-gradient-to-b from-black-500 z-12 absolute top-0 text-white px-6 py-3 text-sm font-bold">
        {series.title}
      </div>
    </motion.div>
  );
};

export default SeriesOverlay;