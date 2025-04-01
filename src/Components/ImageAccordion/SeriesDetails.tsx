// این کامپوننت اطلاعات جزئی‌تر سریال (مانند توضیحات، ژانر و دکمه‌ها) را در حالت باز نمایش می‌دهد.
import { motion } from 'framer-motion';
import AddIcon from '@mui/icons-material/Add';
import { MovieOutlined } from '@mui/icons-material';
import { Series } from '@/lib/types';

interface SeriesDetailsProps {
  series: Series;
  handlePlayClick: (seriesTitle: string) => void;
}

const SeriesDetails = ({ series, handlePlayClick }: SeriesDetailsProps) => {
  return (
    <motion.div
      className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 rounded-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{ zIndex: 2 }}
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
  );
};

export default SeriesDetails;