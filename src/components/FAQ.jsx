import { useState, memo } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import relogioImg from "../imgs/relogio.png";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(4); // Question about plan differences open by default
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  const faqs = [
    {
      question: "Como funciona o registro de entrada e saída?",
      answer:
        "Você adiciona manualmente suas receitas e despesas através do nosso app ou WhatsApp. O sistema categoriza automaticamente seus gastos e gera relatórios para você acompanhar seu dinheiro de forma simples e organizada.",
    },
    {
      question: "O que é a análise avançada com IA?",
      answer:
        "Nossa Inteligência Artificial analisa seus padrões de gastos e receitas, identifica tendências, sugere onde você pode economizar e alerta sobre gastos incomuns. Disponível nos planos Inteligente e Visionário.",
    },
    {
      question: "Como funciona a consultoria com agente IA?",
      answer:
        "No plano Visionário, você tem acesso a um consultor virtual que responde suas dúvidas financeiras, ajuda com planejamento de orçamento e oferece conselhos personalizados baseados no seu perfil financeiro.",
    },
    {
      question: "Posso usar pelo WhatsApp?",
      answer:
        "Sim! Você pode registrar seus gastos e receitas diretamente pelo WhatsApp de forma rápida e prática. É uma das formas mais simples de manter seu controle financeiro sempre atualizado.",
    },
    {
      question: "Qual a diferença entre os planos?",
      answer:
        "Essencial: controle básico. Inteligente: + IA, planejamento e alertas. Visionário: + consultoria especializada e suporte prioritário. Cada plano inclui todas as funcionalidades do anterior.",
    },
    {
      question: "Meus dados ficam seguros?",
      answer:
        "Sim! Utilizamos criptografia avançada e não temos acesso às suas contas bancárias. Você apenas registra as informações que deseja acompanhar, mantendo total controle sobre seus dados.",
    },
  ];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="bg-black py-16 sm:py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* FAQ Section */}
        <div className="mb-16 sm:mb-20">
          {/* FAQ Badge */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="bg-yellow-400 text-black px-5 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-sm">
              FAQ
            </div>
          </div>

          {/* Main heading */}
          <div className="text-center mb-10 sm:mb-12">
            <h1 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 px-4">
              Descubra nossas
              <br />
              <span className="text-yellow-400">Perguntas Frequentes</span>
            </h1>
            <p className="text-sm sm:text-lg text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
              Encontre as respostas para as dúvidas mais comuns sobre o Meu
              Bolso
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3 sm:space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-black rounded-xl border border-gray-800 overflow-hidden hover-lift smooth-transition"
              >
                <button
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-900/30 smooth-transition active:bg-gray-900/50"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <span className="text-base sm:text-lg font-semibold text-white pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openIndex === index && faq.answer && (
                  <div className="px-4 sm:px-6 pb-3 sm:pb-4 border-t border-gray-800">
                    <p className="text-gray-300 leading-relaxed pt-3 sm:pt-4 text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-2xl p-8 sm:p-10 lg:p-12">
          <div className="flex justify-center items-center">
            {/* Center Content */}
            <div
              className={`text-center transition-all duration-1000 delay-600 ${
                isVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 transform translate-y-8"
              }`}
            >
              <h2 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8">
                Pronto para organizar suas finanças?
              </h2>

              <button
                onClick={() => (window.location.hash = "/planos")}
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 sm:px-8 py-3 sm:py-3 rounded-full font-bold text-sm sm:text-base smooth-transition hover-lift inline-flex items-center active:scale-95 shadow-lg hover:shadow-xl justify-center"
              >
                <img
                  src={relogioImg}
                  alt="Relógio"
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0 brightness-0"
                />
                <span>Escolha seu plano</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(FAQ);
