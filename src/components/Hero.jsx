export default function Hero({ onOpenCreateAccount }) {
  return (
    <section className="bg-black min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className=" inset-0 pointer-events-none">
        {/* Floating card on the left - otimizado mobile */}
        <div className="absolute -left-8 sm:-left-6 md:-left-8 top-[2%] sm:top-1/2 transform -translate-y-1/ -rotate-12 animate-fade-in-left animate-float">
          <img
            src={"/landingpage/imgs/cartao.png"}
            alt="Cartão Meu Bolso"
            className="w-28 h-auto sm:w-48 md:w-64 lg:w-84 shadow-2xl rounded-2xl hover-lift smooth-transition opacity-80 sm:opacity-100"
          />
        </div>
      </div>

      {/* Floating safe/vault on the right - otimizado mobile */}
      <div className="absolute -right-2 sm:-right-4 md:-right-10 bottom-[20%] sm:bottom-12 md:bottom-16 z-10 animate-fade-in-right animate-pulse-slow pointer-events-none">
        <div className="relative">
          <img
            src={"/landingpage/imgs/cofrepng.png"}
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
                src={"/landingpage/imgs/instagram.png"}
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
                src={"/landingpage/imgs/whatsapp.png"}
                alt="WhatsApp"
                className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
              />
              <span className="font-medium text-sm sm:text-base">WhatsApp</span>
            </a>
          </div>

          {/* CTA Buttons - otimizado mobile */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <button
              onClick={onOpenCreateAccount}
              className="gradient-button text-white px-8 sm:px-10 py-4 rounded-full font-bold text-base sm:text-lg smooth-transition hover-lift inline-flex items-center animate-pulse-slow active:scale-95 shadow-2xl justify-center"
              style={{ animationDelay: "0.8s" }}
            >
              <img
                src={"/landingpage/imgs/relogio.png"}
                alt="Relógio"
                className="w-5 h-5 sm:w-6 sm:h-6 mr-2 animate-float flex-shrink-0"
              />
              <span>Escolha seu plano</span>
            </button>

            <button
              onClick={() => (window.location.hash = "/planos")}
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 sm:px-10 py-4 rounded-full font-bold text-base sm:text-lg smooth-transition hover-lift inline-flex items-center active:scale-95 shadow-2xl justify-center"
              style={{ animationDelay: "1.0s" }}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Renovar Plano</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
