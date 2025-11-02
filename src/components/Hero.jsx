export default function Hero({ onOpenCreateAccount }) {
  return (
    <section className="bg-black min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className=" inset-0 pointer-events-none">
        {/* Floating card on the left - otimizado mobile */}
        <div className="absolute -left-8 sm:-left-6 md:-left-8 top-[2%] sm:top-1/2 transform -translate-y-1/ -rotate-12 animate-fade-in-left animate-float">
          <img
            src="/imgs/cartao.png"
            alt="Cartão Meu Bolso"
            className="w-28 h-auto sm:w-48 md:w-64 lg:w-84 shadow-2xl rounded-2xl hover-lift smooth-transition opacity-80 sm:opacity-100"
          />
        </div>
      </div>

      {/* Floating safe/vault on the right - otimizado mobile */}
      <div className="absolute -right-2 sm:-right-4 md:-right-10 bottom-[20%] sm:bottom-12 md:bottom-16 z-10 animate-fade-in-right animate-pulse-slow pointer-events-none">
        <div className="relative">
          <img
            src="/imgs/cofrepng.png"
            alt="Cofre"
            className="w-24 h-auto sm:w-48 md:w-64 md:h-70 lg:w-84 lg:h-84 hover-lift smooth-transition opacity-80 sm:opacity-100"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-start sm:justify-center min-h-screen text-center pt-32 pb-4 sm:py-20">
          {/* Main heading - otimizado mobile */}
          <h1
            className="text-[2rem] leading-tight sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-5 sm:mb-6 max-w-4xl animate-fade-in-up px-2"
            style={{ animationDelay: "0.2s" }}
          >
            Seu assistente de IA
            <br />
            <span className="text-yellow-400">Pessoal de Finanças</span>
          </h1>

          {/* Subtitle - otimizado mobile */}
          <p
            className="text-sm leading-relaxed sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl animate-fade-in-up px-4"
            style={{ animationDelay: "0.4s" }}
          >
            Com o Meu Bolso você entende, acompanha e planeja seu dinheiro de
            forma simples, sem planilhas. Tenha mais controle, clareza e
            tranquilidade sobre suas finanças
          </p>

          {/* Social icons - otimizado mobile */}
          <div
            className="flex items-center gap-6 sm:gap-8 mb-8 sm:mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#"
              className="flex items-center text-pink-500 hover:text-pink-400 smooth-transition hover-lift active:scale-95"
            >
              <img
                src="/imgs/instagram.png"
                alt="Instagram"
                className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
              />
              <span className="font-medium text-sm sm:text-base">
                Instagram
              </span>
            </a>
            <a
              href="#"
              className="flex items-center text-green-500 hover:text-green-400 smooth-transition hover-lift active:scale-95"
            >
              <img
                src="/imgs/whatsapp.png"
                alt="WhatsApp"
                className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
              />
              <span className="font-medium text-sm sm:text-base">WhatsApp</span>
            </a>
          </div>

          {/* CTA Button - otimizado mobile */}
          <button
            onClick={onOpenCreateAccount}
            className="gradient-button text-white px-8 sm:px-10 py-4 sm:py-4 rounded-full font-bold text-base sm:text-lg smooth-transition inline-flex items-center justify-center shadow-2xl hover-lift animate-scale-in active:scale-95 w-full max-w-xs sm:max-w-none sm:w-auto"
            style={{ animationDelay: "0.8s" }}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span>Começar com 5 dias grátis</span>
          </button>
        </div>
      </div>
    </section>
  );
}
