import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Dashboard() {
  const [sectionRef, isVisible] = useScrollAnimation(0.2);

  return (
    <section
      id="dashboard"
      ref={sectionRef}
      className="bg-black min-h-screen relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
        <div className="flex flex-col items-center justify-center min-h-screen py-10 sm:py-20">
          {/* Badge - Centered Above Grid */}
          <div
            className={`bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm mb-8 transition-all duration-700 ${
              isVisible ? "animate-scale-in" : "opacity-0 transform scale-75"
            }`}
          >
            Dashboard Completo
          </div>

          {/* Grid Layout - Dashboard + Text */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start w-full">
            {/* Dashboard Image - Left Side (2 columns) */}
            <div
              className={`lg:col-span-2 transition-all duration-1000 delay-150 ${
                isVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 transform translate-y-8"
              }`}
            >
              <img
                src={"../landingpage/imgs/dashboard.png"}
                alt="Dashboard Financeiro"
                className="w-full rounded-xl sm:rounded-2xl shadow-2xl hover-lift smooth-transition"
                style={{ height: "350px", objectFit: "contain" }}
              />
            </div>

            {/* Text Content - Right Side (1 column) */}
            <div
              className={`lg:col-span-1 text-center lg:text-left transition-all duration-1000 delay-300 flex flex-col justify-center h-full ${
                isVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 transform translate-y-8"
              }`}
            >
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Acompanhe suas{" "}
                <span className="text-yellow-400">entradas e saídas</span> em
                tempo real
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Tenha controle total das suas finanças com nosso dashboard
                inteligente
              </p>

              {/* Features List */}
              <ul className="space-y-3 text-left">
                <li className="flex items-start text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm">
                    Conecte suas contas bancárias e tenha tudo em um só lugar
                  </span>
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm">
                    Acompanhe suas transações em tempo real
                  </span>
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm">
                    Faça planejamento de gastos mensais
                  </span>
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm">Saiba qual o seu maior gasto</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
