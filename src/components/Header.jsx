export default function Header({ onOpenCreateAccount, onOpenLogin }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="bg-black sticky top-0 z-50 border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button
            onClick={scrollToTop}
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity active:scale-95"
          >
            <img
              src="/imgs/logoHeader.png"
              alt="MEU BOLSO"
              className="h-8 sm:h-10 w-auto"
            />
            <span className="ml-2 sm:ml-3 text-yellow-400 text-base sm:text-xl font-bold">
              MEU BOLSO
            </span>
          </button>

          <div className="hidden md:block">
            <nav className="flex items-center space-x-8">
              <a
                href="#whatsapp"
                className="text-white hover:text-yellow-400 transition-colors font-medium"
              >
                WhatsApp
              </a>
              <a
                href="#openfinance"
                className="text-white hover:text-yellow-400 transition-colors font-medium"
              >
                Open Finance
              </a>
              <a
                href="#plans"
                className="text-white hover:text-yellow-400 transition-colors font-medium"
              >
                Planos e Preços
              </a>
              <a
                href="#faq"
                className="text-white hover:text-yellow-400 transition-colors font-medium"
              >
                FAQ
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={onOpenCreateAccount}
              className="text-white hover:text-yellow-400 transition-colors font-medium text-sm sm:text-base active:scale-95"
            >
              Criar conta
            </button>
            <button
              onClick={onOpenLogin}
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 sm:px-6 py-2 rounded-lg font-bold transition-colors inline-flex items-center text-sm sm:text-base active:scale-95 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-4 h-4 mr-1 sm:mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
