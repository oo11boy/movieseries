import React from 'react';
import { Facebook, Twitter, Instagram, LinkedIn, Email, Phone } from '@mui/icons-material';

export default function Footer() {
  return (
    <footer className=" text-gray-200">
      <div className="footer-top">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* بخش لوگو و اطلاعات تماس */}
            <div className="lg:col-span-1">
              <div className="footer-logo">
                <a href="https://wordpress.iqonic.design/product/wp/streamit/">
                  <img
                    className="h-8"
                    src="https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2024/11/logo.png"
                    alt="streamit-logo"
                  />
                </a>
              </div>
              <div className="mt-4 text-gray-400">
                <a href="mailto:customer@streamit.com" className="flex items-center gap-2">
                  <Email className="text-teal-300" />
                  <span>ایمیل: </span>
                  <span className="text-teal-300">customer@streamit.com</span>
                </a>
              </div>
              <div className="mt-4 text-gray-400">
                <a href="tel:+4805550103" className="flex items-center gap-2">
                  <Phone className="text-teal-300" />
                  <span>شماره: </span>
                  <span className="text-teal-300">+(480) 555-0103</span>
                </a>
              </div>
            </div>

            {/* فیلم‌هایی برای تماشا */}
            <div>
              <h3 className="font-medium text-white">فیلم‌هایی برای تماشا</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="https://wordpress.iqonic.design/product/wp/streamit/movies/the-hunter/" className="text-gray-200 transition hover:opacity-75">
                    شکارچی
                  </a>
                </li>
                <li>
                  <a href="https://wordpress.iqonic.design/product/wp/streamit/movies/krishna" className="text-gray-200 transition hover:opacity-75">
                    کریشنا
                  </a>
                </li>
                <li>
                  <a href="https://wordpress.iqonic.design/product/wp/streamit/movies/spiderman/" className="text-gray-200 transition hover:opacity-75">
                    مرد عنکبوتی
                  </a>
                </li>
                <li>
                  <a href="https://wordpress.iqonic.design/product/wp/streamit/movies/fast-furious/" className="text-gray-200 transition hover:opacity-75">
                    سریع و خشن
                  </a>
                </li>
              </ul>
            </div>

            {/* لینک‌های سریع */}
            <div>
              <h3 className="font-medium text-white">لینک‌های سریع</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="https://wordpress.iqonic.design/product/wp/streamit/contact-us/" className="text-gray-200 transition hover:opacity-75">
                    تماس با ما
                  </a>
                </li>
                <li>
                  <a href="https://wordpress.iqonic.design/product/wp/streamit/pricing-plan/" className="text-gray-200 transition hover:opacity-75">
                    طرح قیمت‌گذاری
                  </a>
                </li>
                <li>
                  <a href="https://wordpress.iqonic.design/product/wp/streamit/blog/" className="text-gray-200 transition hover:opacity-75">
                    بلاگ
                  </a>
                </li>
                <li>
                  <a href="https://wordpress.iqonic.design/product/wp/streamit/faq/" className="text-gray-200 transition hover:opacity-75">
                    سوالات متداول
                  </a>
                </li>
              </ul>
            </div>

            {/* درباره شرکت */}
            <div>
              <h3 className="font-medium text-white">درباره شرکت</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="https://wordpress.iqonic.design/product/wp/streamit/about-us/" className="text-gray-200 transition hover:opacity-75">
                    درباره ما
                  </a>
                </li>
                <li>
                  <a href="https://wordpress.iqonic.design/product/wp/streamit/shop/" className="text-gray-200 transition hover:opacity-75">
                    فروشگاه
                  </a>
                </li>
                <li>
                  <a href="https://wordpress.iqonic.design/product/wp/streamit/terms-and-use/" className="text-gray-200 transition hover:opacity-75">
                    شرایط استفاده
                  </a>
                </li>
                <li>
                  <a href="https://wordpress.iqonic.design/product/wp/streamit/privacy-policy/" className="text-gray-200 transition hover:opacity-75">
                    سیاست حریم خصوصی
                  </a>
                </li>
              </ul>
            </div>

            {/* اشتراک خبرنامه و شبکه‌های اجتماعی */}
            <div className="lg:col-span-1">
              <h5 className="font-medium text-white">اشتراک در خبرنامه</h5>
              <form id="st-subscription-form" className="mt-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    name="EMAIL"
                    placeholder="ایمیل"
                    required
                    className="form-control flex-1 rounded bg-gray-800 text-gray-200 p-2"
                  />
                  <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
                    اشتراک
                  </button>
                </div>
              </form>
              <div className="mt-6">
                <h3 className="font-medium text-white">ما را دنبال کنید:</h3>
                <ul className="mt-4 flex gap-4">
                  <li>
                    <a href="#" target="_blank" className="text-gray-200 transition hover:opacity-75">
                      <Facebook />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" className="text-gray-200 transition hover:opacity-75">
                      <Twitter />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" className="text-gray-200 transition hover:opacity-75">
                      <Instagram />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" className="text-gray-200 transition hover:opacity-75">
                      <LinkedIn />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* کپی‌رایت و دانلود اپلیکیشن */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="text-gray-400 text-sm">
              © ۱۴۰۳{' '}
              <a href="https://wordpress.iqonic.design/product/wp/streamit" className="text-teal-300">
                STREAMIT
              </a>
              . تمامی حقوق محفوظ است. تمامی ویدیوها و برنامه‌ها در این پلتفرم علائم تجاری هستند و تمام تصاویر و محتوای مرتبط متعلق به Streamit Inc است. کپی‌برداری و تکثیر این موارد اکیداً ممنوع است.
            </div>
            <div className="md:text-right">
              <h3 className="font-medium text-white">دانلود اپلیکیشن Streamit</h3>
              <ul className="mt-4 flex gap-4 justify-start md:justify-end">
                <li>
                  <a href="https://wordpress.iqonic.design/product/wp/streamit/">
                    <img
                      src="https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2025/01/play-store.webp"
                      alt="play-store"
                      className="h-10"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://wordpress.iqonic.design/product/wp/streamit/">
                    <img
                      src="https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2025/01/app-store.webp"
                      alt="app-store"
                      className="h-10"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}