import {  Discount, CheckCircle, StorefrontOutlined } from '@mui/icons-material';

export default function Subscription() {
  return (
    <div className=" bg-gradient-to-b from-black via-gray-900 to-teal-950 min-h-screen text-white flex items-center justify-center">
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-4xl">
      {/* عنوان با انیمیشن ظریف */}
      <div className="flex items-center justify-center mb-8 space-x-3 text-xl sm:text-2xl md:text-3xl font-bold animate-fade-in">
        <StorefrontOutlined className="text-red-300" />
        <h2 className="yekan bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-red-500">
          خرید اشتراک
        </h2>
      </div>

      {/* توضیحات با فونت نرم‌تر */}
      <p className="text-center text-sm sm:text-base md:text-lg text-gray-200 mb-10 font-light tracking-wide">
        با خرید اشتراک، به دنیای انیمیشن‌ها، فیلم‌ها و سریال‌های به‌روز با کیفیت فوق‌العاده قدم بذارید!
      </p>

      {/* پلن‌های اشتراک با طراحی پویا */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* پلن یک ماهه */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full animate-bounce">۱۱٪ تخفیف</span>
              <h6 className="text-lg font-semibold text-teal-200">یک ماهه</h6>
            </div>
            <div className="mt-auto text-right">
              <div className="text-gray-400 line-through text-sm">۵۱,۰۰۰ تومان</div>
              <button className="bg-gradient-to-r from-red-500 to-teal-600 text-white px-4 py-2 rounded-lg mt-2 hover:from-teal-600 hover:to-red-500 transition-all w-full font-medium">
                ۴۵,۰۰۰ تومان
              </button>
            </div>
          </div>
        </div>

        {/* پلن سه ماهه */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full animate-bounce">۱۱٪ تخفیف</span>
              <h6 className="text-lg font-semibold text-teal-200">سه ماهه</h6>
            </div>
            <div className="mt-auto text-right">
              <div className="text-gray-400 line-through text-sm">۱۴۵,۰۰۰ تومان</div>
              <button className="bg-gradient-to-r from-red-500 to-teal-600 text-white px-4 py-2 rounded-lg mt-2 hover:from-teal-600 hover:to-red-500 transition-all w-full font-medium">
                ۱۲۹,۰۰۰ تومان
              </button>
            </div>
          </div>
        </div>

        {/* پلن شش ماهه */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full animate-bounce">۱۰٪ تخفیف</span>
              <h6 className="text-lg font-semibold text-teal-200">شش ماهه</h6>
            </div>
            <div className="mt-auto text-right">
              <div className="text-gray-400 line-through text-sm">۲۷۹,۰۰۰ تومان</div>
              <button className="bg-gradient-to-r from-red-500 to-teal-600 text-white px-4 py-2 rounded-lg mt-2 hover:from-teal-600 hover:to-red-500 transition-all w-full font-medium">
                ۲۴۹,۰۰۰ تومان
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* مالیات */}
      <p className="text-sm text-gray-300 mt-6 text-center italic">
        * ۱۰٪ مالیات بر ارزش افزوده به مبالغ بالا اضافه می‌شه.
      </p>

      {/* کد تخفیف با طراحی جذاب */}
      <div className="mt-10 bg-gradient-to-br from-gray-800 to-teal-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center space-x-2 mb-4">
          <Discount className="text-teal-300 animate-spin-slow" />
          <h6 className="text-lg font-semibold text-teal-200">کد تخفیف</h6>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <input
            type="text"
            placeholder="برای ثبت کد تخفیف ابتدا وارد شوید"
            readOnly
            className="w-full p-2 bg-gray-700 text-gray-200 rounded-lg border border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
          />
          <button className="bg-gradient-to-r from-red-500 to-teal-600 text-white px-6 py-2 rounded-lg hover:from-teal-600 hover:to-red-500 transition-all w-full sm:w-auto font-medium">
            ورود
          </button>
        </div>
      </div>

      {/* لیست مزایا با آیکون‌های پویا */}
      <ul className="mt-10 space-y-4 text-gray-200">
        {[
          "دسترسی به تمام کیفیت‌ها با یه اشتراک!",
          "مصرف اینترنت نیم‌بها با هر پلن.",
          "تماشا فقط داخل ایران ممکنه.",
        ].map((item, index) => (
          <li key={index} className="flex items-center space-x-2 animate-slide-in" style={{ animationDelay: `${index * 0.2}s` }}>
            <CheckCircle className="text-teal-300 hover:scale-125 transition-transform" fontSize="small" />
            <span className="text-sm md:text-base font-light">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}
