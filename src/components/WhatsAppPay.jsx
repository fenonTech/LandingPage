import { memo } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function WhatsAppPay() {
  const [sectionRef, isVisible] = useScrollAnimation(0.2);

  return (
    <section
      id="whatsapp"
      ref={sectionRef}
      className="bg-black min-h-screen relative overflow-visible pb-20 sm:pb-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col items-center justify-start text-center pt-4 sm:pt-16 pb-16 sm:pb-20">
          {/* WhatsApp Badge */}
          <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm mb-8">
            WhatsApp
          </div>

          {/* Main heading */}
          <h1 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl px-4">
            Bate-papo com seu Dinheiro
            <br />
            <span className="text-yellow-400">Diretamente pelo WhatsApp</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-300 mb-12 sm:mb-16 leading-relaxed max-w-2xl px-4">
            O Meu Bolso te dá aquela ajuda sincera pra você organizar as
            <span className="hidden sm:inline">
              <br />
            </span>
            <span className="sm:hidden"> </span>
            finanças onde estiver.
          </p>

          {/* Phone with yellow background */}
          <div className="relative">
            {/* Yellow background rectangle */}
            <div className="bg-yellow-400 rounded-2xl sm:rounded-3xl w-80 sm:w-96 lg:w-[500px] h-48 sm:h-64 lg:h-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

            {/* Phone image */}
            <div className="relative z-10 transform rotate-12 animate-float">
              <img
                src={"/landingpage/imgs/celular.png"}
                alt="Celular com WhatsApp"
                className="w-64 sm:w-80 lg:w-96 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(WhatsAppPay);
