import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "../hooks/useScrollAnimation";
import { useState } from "react";

export default function Plans() {
  const [sectionRef, isVisible] = useScrollAnimation(0.2);
  const [plan1Ref, plan1Visible] = useStaggeredAnimation(100);
  const [plan2Ref, plan2Visible] = useStaggeredAnimation(200);
  const [plan3Ref, plan3Visible] = useStaggeredAnimation(300);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState("anual");

  const pricing = {
    mensal: {
      plan1: { price: "9,90", savings: null },
      plan2: { price: "20,90", savings: null },
      plan3: { price: "39,90", savings: null },
    },
    trimestral: {
      plan1: { price: "8,90", savings: "10%" },
      plan2: { price: "18,89", savings: "10%" },
      plan3: { price: "36,81", savings: "8%" },
    },
    anual: {
      plan1: { price: "6,50", savings: "34%" },
      plan2: { price: "14,90", savings: "29%" },
      plan3: { price: "25,90", savings: "35%" },
    },
  };

  const handleMouseMove = (e, cardId) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section
      id="plans"
      ref={sectionRef}
      className="bg-black min-h-screen relative overflow-hidden -mt-16 sm:mt-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center py-12 sm:py-20">
          {/* Plans Badge */}
          <div
            className={`bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm mb-8 transition-all duration-700 ${
              isVisible ? "animate-scale-in" : "opacity-0 transform scale-75"
            }`}
          >
            Planos e Preços
          </div>

          {/* Main heading */}
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight max-w-4xl transition-all duration-1000 delay-50 px-4 ${
              isVisible
                ? "animate-fade-in-up"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            Seu futuro começa <br className="sm:hidden" />
            com <br className="hidden sm:inline" />
            <span className="text-yellow-400">Plano Meu bolso</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-base sm:text-lg text-gray-300 mb-12 leading-relaxed transition-all duration-1000 delay-100 px-4 ${
              isVisible
                ? "animate-fade-in-up"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            Selecione o plano ideal para organizar tudo que entra e sai do seu
            bolso
          </p>

          {/* Period Selector */}
          <div
            className={`flex items-center justify-center gap-2 mb-12 transition-all duration-1000 delay-150 ${
              isVisible
                ? "animate-fade-in-up"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            <button
              onClick={() => setSelectedPeriod("mensal")}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                selectedPeriod === "mensal"
                  ? "bg-yellow-400 text-gray-900 shadow-lg"
                  : "bg-transparent text-gray-400 border border-gray-600 hover:border-gray-400"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setSelectedPeriod("trimestral")}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 relative ${
                selectedPeriod === "trimestral"
                  ? "bg-yellow-400 text-gray-900 shadow-lg"
                  : "bg-transparent text-gray-400 border border-gray-600 hover:border-gray-400"
              }`}
            >
              Trimestral
              {selectedPeriod !== "trimestral" && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                  -10%
                </span>
              )}
            </button>
            <button
              onClick={() => setSelectedPeriod("anual")}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 relative ${
                selectedPeriod === "anual"
                  ? "bg-yellow-400 text-gray-900 shadow-lg"
                  : "bg-transparent text-gray-400 border border-gray-600 hover:border-gray-400"
              }`}
            >
              Anual
              {selectedPeriod !== "anual" && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                  -35%
                </span>
              )}
            </button>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl w-full mx-auto mb-12 px-4 items-stretch">
            {/* Plano Essencial */}
            <div
              ref={plan1Ref}
              className={`rounded-2xl p-6 border-2 border-white shadow-lg hover:shadow-xl hover-lift smooth-transition transition-all duration-1000 relative overflow-hidden flex flex-col ${
                plan1Visible
                  ? "animate-fade-in-up"
                  : "opacity-0 transform translate-y-8"
              }`}
              style={{ backgroundColor: "#161616" }}
              onMouseMove={(e) => handleMouseMove(e, "plan1")}
              onMouseLeave={handleMouseLeave}
            >
              {/* Glow effect following mouse */}
              {hoveredCard === "plan1" && (
                <div
                  className="pointer-events-none absolute rounded-full transition duration-300 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(35,35,35,0.9) 0%, rgba(22,22,22,0.5) 50%, transparent 70%)",
                    width: "300px",
                    height: "300px",
                    left: `${mousePosition.x - 150}px`,
                    top: `${mousePosition.y - 150}px`,
                    transition: "left 0.1s ease, top 0.1s ease",
                  }}
                />
              )}
              <div className="absolute top-0 right-0 z-20">
                <span className="bg-green-500 text-white px-3 py-1 rounded-bl-lg text-xs font-bold shadow-lg">
                  5 DIAS GRÁTIS
                </span>
              </div>
              <h3 className="text-white text-xl font-bold mb-2 relative z-10 text-left">
                Plano Essencial
              </h3>
              <div className="mb-2 relative z-10 text-left">
                <span className="text-white text-4xl font-bold">
                  R$ {pricing[selectedPeriod].plan1.price}
                </span>
                <span className="text-gray-400 text-sm">/mês</span>
              </div>
              {pricing[selectedPeriod].plan1.savings && (
                <div className="mb-4 relative z-10 text-left">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold">
                    Economize {pricing[selectedPeriod].plan1.savings}
                  </span>
                </div>
              )}
              {!pricing[selectedPeriod].plan1.savings && (
                <div className="mb-4"></div>
              )}
              <p className="text-gray-400 text-sm mb-6 leading-relaxed relative z-10 text-left">
                Para quem quer apenas acompanhar gastos básicos
              </p>

              <ul className="space-y-3 text-sm mb-6 relative z-10 flex-grow">
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  Análise avançada com IA
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  Registro de entrada e saída
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  Dashboard completo
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  Open Finance
                </li>
                <li className="flex items-center text-gray-500">
                  <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-gray-500 text-xs font-bold">✗</span>
                  </div>
                  Conta Compartilhada
                </li>
              </ul>

              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 active:scale-95 shadow-lg relative z-10">
                Assinar Essencial
              </button>
            </div>

            {/* Plano Inteligente - Highlighted */}
            <div
              ref={plan2Ref}
              className={`rounded-2xl p-6 border-2 border-yellow-400 shadow-xl hover:shadow-2xl relative hover-lift smooth-transition transition-all duration-1000 overflow-hidden flex flex-col ${
                plan2Visible
                  ? "animate-scale-in"
                  : "opacity-0 transform scale-90"
              }`}
              style={{ backgroundColor: "#161616" }}
              onMouseMove={(e) => handleMouseMove(e, "plan2")}
              onMouseLeave={handleMouseLeave}
            >
              {/* Glow effect following mouse */}
              {hoveredCard === "plan2" && (
                <div
                  className="pointer-events-none absolute rounded-full transition duration-300 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(35,35,35,0.9) 0%, rgba(22,22,22,0.5) 50%, transparent 70%)",
                    width: "300px",
                    height: "300px",
                    left: `${mousePosition.x - 150}px`,
                    top: `${mousePosition.y - 150}px`,
                    transition: "left 0.1s ease, top 0.1s ease",
                  }}
                />
              )}
              <div className="absolute top-0 right-0 z-20">
                <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-bl-lg text-xs font-bold shadow-lg">
                  RECOMENDADO
                </span>
              </div>
              <h3 className="text-white text-xl font-bold mb-2 relative z-10 text-left">
                Plano Inteligente
              </h3>
              <div className="mb-2 relative z-10 text-left">
                <span className="text-white text-4xl font-bold">
                  R$ {pricing[selectedPeriod].plan2.price}
                </span>
                <span className="text-gray-400 text-sm">/mês</span>
              </div>
              {pricing[selectedPeriod].plan2.savings && (
                <div className="mb-4 relative z-10 text-left">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold">
                    Economize {pricing[selectedPeriod].plan2.savings}
                  </span>
                </div>
              )}
              {!pricing[selectedPeriod].plan2.savings && (
                <div className="mb-4"></div>
              )}
              <p className="text-gray-400 text-sm mb-6 leading-relaxed relative z-10 text-left">
                Para apostas, alertas e comparativos semanais mensais
              </p>

              <ul className="space-y-3 text-sm mb-6 relative z-10 flex-grow">
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  Tudo do plano essencial
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  Open Finance
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  Planejamento de gastos
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  Alertas baseados em gastos
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  Conta Compartilhada
                </li>
                <li className="flex items-center text-gray-500">
                  <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-gray-500 text-xs font-bold">✗</span>
                  </div>
                  Consultoria com Agente IA
                </li>
              </ul>

              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 active:scale-95 shadow-lg relative z-10">
                Assinar Inteligente
              </button>
            </div>

            {/* Plano Visionário */}
            <div
              ref={plan3Ref}
              className={`rounded-2xl p-6 border-2 border-white shadow-lg hover:shadow-xl hover-lift smooth-transition transition-all duration-1000 relative overflow-hidden flex flex-col ${
                plan3Visible
                  ? "animate-fade-in-up"
                  : "opacity-0 transform translate-y-8"
              }`}
              style={{ backgroundColor: "#161616" }}
              onMouseMove={(e) => handleMouseMove(e, "plan3")}
              onMouseLeave={handleMouseLeave}
            >
              {/* Glow effect following mouse */}
              {hoveredCard === "plan3" && (
                <div
                  className="pointer-events-none absolute rounded-full transition duration-300 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(35,35,35,0.9) 0%, rgba(22,22,22,0.5) 50%, transparent 70%)",
                    width: "300px",
                    height: "300px",
                    left: `${mousePosition.x - 150}px`,
                    top: `${mousePosition.y - 150}px`,
                    transition: "left 0.1s ease, top 0.1s ease",
                  }}
                />
              )}
              <h3 className="text-white text-xl font-bold mb-2 relative z-10 text-left">
                Plano Visionário
              </h3>
              <div className="mb-2 relative z-10 text-left">
                <span className="text-white text-4xl font-bold">
                  R$ {pricing[selectedPeriod].plan3.price}
                </span>
                <span className="text-gray-400 text-sm">/mês</span>
              </div>
              {pricing[selectedPeriod].plan3.savings && (
                <div className="mb-4 relative z-10 text-left">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold">
                    Economize {pricing[selectedPeriod].plan3.savings}
                  </span>
                </div>
              )}
              {!pricing[selectedPeriod].plan3.savings && (
                <div className="mb-4"></div>
              )}
              <p className="text-gray-400 text-sm mb-6 leading-relaxed relative z-10 text-left">
                Foco em planejamento de longo prazo, metas e investimentos
              </p>

              <ul className="space-y-3 text-sm mb-6 relative z-10 flex-grow">
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  Tudo do plano inteligente
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  Consultoria com agente IA
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  Open Finance
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  Lembretes de vencimento
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  Budget mensal
                </li>
              </ul>
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 active:scale-95 shadow-lg relative z-10">
                Assinar Visionário
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
