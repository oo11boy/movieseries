// این کامپوننت هدر پنل کاربری را نمایش می‌دهد، شامل عنوان و دکمه خروج

interface HeaderProps {
  onLogout: () => void;
}

function Header({ onLogout }: HeaderProps) {
  return (
    <header className="mb-10 flex items-center justify-between">
      <h1 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-blue-400 to-red-500 md:text-4xl">
        پنل کاربری
      </h1>
      <button
        onClick={onLogout}
        className="rounded-lg bg-red-600 px-4 py-2 font-medium transition-all hover:bg-red-700 hover:shadow-lg"
      >
        خروج
      </button>
    </header>
  );
}

export default Header;
