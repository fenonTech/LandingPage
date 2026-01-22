import { useState } from "react";

export default function Hero({ onOpenCreateAccount }) {
  const [telefone, setTelefone] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handlePhoneChange = (e) => {
    // Extrai apenas números do valor digitado
    const nums = e.target.value.replace(/\D/g, "");

    // Limita a 11 dígitos
    const limited = nums.substring(0, 11);

    // Formata conforme o tamanho
    let formatted = "";

    if (limited.length === 0) {
      formatted = "";
    } else if (limited.length <= 2) {
      formatted = `(${limited}`;
    } else if (limited.length <= 7) {
      formatted = `(${limited.substring(0, 2)}) ${limited.substring(2)}`;
    } else {
      formatted = `(${limited.substring(0, 2)}) ${limited.substring(2, 7)}-${limited.substring(7)}`;
    }

    setTelefone(formatted);
    if (showError && formatted) {
      setShowError(false);
    }
  };

  const handleTrialClick = async () => {
    if (telefone.length < 15) {
      setShowError(true);
      return;
    }

    const phoneNumber = "+55" + telefone.replace(/\D/g, "");

    try {
      const response = await fetch(
        "https://backend-pearl-rho-82.vercel.app/api/auth/cadastrar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            telefone: phoneNumber,
          }),
        },
      );

      if (response.ok) {
        console.log("Cadastro realizado com sucesso!");
        setShowSuccessModal(true);
      } else {
        console.error("Erro ao cadastrar:", await response.text());
        setShowError(true);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      setShowError(true);
    }
  };

  return (
    <>
      {/* Modal de Sucesso */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 px-4">
          <div className="bg-black rounded-2xl p-8 max-w-md w-full text-center animate-fade-in-up shadow-2xl border border-gray-800">
            <div className="mb-6">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black text-3xl font-bold">✓</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Tudo certo com o seu cadastro!
              </h3>
              <p className="text-gray-300 mb-6">Continue pelo WhatsApp</p>
            </div>
            <button
              onClick={() => {
                setShowSuccessModal(false);
                window.open(
                  "https://wa.me/5511918682080?text=Olá,%20acabei%20de%20me%20cadastrar!",
                  "_blank",
                );
              }}
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-3 rounded-full font-bold text-base smooth-transition w-full mb-3"
            >
              Abrir WhatsApp
            </button>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="text-gray-400 hover:text-white text-sm smooth-transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <section className="bg-black relative overflow-hidden sm:min-h-screen flex items-start sm:items-center justify-center">
        {/* Background elements */}
        <div className=" inset-0 pointer-events-none">
          {/* Floating card on the left - otimizado mobile */}
          <div className="hidden sm:block absolute -left-8 sm:-left-6 md:-left-8 top-[2%] sm:top-1/2 transform -translate-y-1/ -rotate-12 animate-fade-in-left animate-float">
            <img
              src="/landingpage/imgs/cartao.png"
              alt="Cartão Meu Bolso"
              className="w-48 md:w-64 lg:w-84 shadow-2xl rounded-2xl hover-lift smooth-transition"
            />
          </div>
        </div>

        {/* Floating safe/vault on the right - otimizado mobile */}
        <div className="hidden sm:block absolute -right-2 sm:-right-4 md:-right-10 bottom-[20%] sm:bottom-12 md:bottom-16 z-10 animate-fade-in-right animate-pulse-slow pointer-events-none">
          <div className="relative">
            <img
              src="/landingpage/imgs/cofrepng.png"
              alt="Cofre"
              className="w-48 md:w-64 md:h-70 lg:w-84 lg:h-84 hover-lift smooth-transition"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col items-center justify-start text-center pt-8 pb-32 sm:pt-8 sm:pb-16">
            {/* Main heading - otimizado mobile */}
            <h1 className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 max-w-4xl px-2">
              Seu assistente de IA
              <br />
              <span className="text-yellow-400">Pessoal de Finanças</span>
            </h1>

            {/* Subtitle - otimizado mobile */}
            <p className="text-xs leading-relaxed sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-3xl px-4">
              Com o Meu Bolso você entende, acompanha e planeja seu dinheiro de
              forma simples, sem planilhas. Tenha mais controle, clareza e
              tranquilidade sobre suas finanças
            </p>

            {/* Social icons - otimizado mobile */}
            <div className="flex items-center gap-6 sm:gap-8 mb-6 sm:mb-8">
              <a
                href="https://www.instagram.com/meubolsoia/"
                target="_blank"
                rel="noopener noreferrer"
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
                href="https://wa.me/5511918682080?text=Quanto%20gastei%20hoje?"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-500 hover:text-green-400 smooth-transition hover-lift active:scale-95"
              >
                <img
                  src={"/landingpage/imgs/whatsapp.png"}
                  alt="WhatsApp"
                  className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
                />
                <span className="font-medium text-sm sm:text-base">
                  WhatsApp
                </span>
              </a>
            </div>

            {/* Trial Section - otimizado mobile */}
            <div className="w-full max-w-3xl mb-3 sm:mb-5 px-4">
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-5 text-center">
                Resgate seu período de teste
              </h3>
              <div className="flex flex-col gap-3 items-center">
                <div className="w-full sm:w-auto flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="tel"
                      value={telefone}
                      onChange={handlePhoneChange}
                      placeholder="(00) 00000-0000"
                      maxLength="15"
                      className={`w-full sm:w-[300px] bg-gray-900 border ${
                        showError ? "border-red-500" : "border-gray-800"
                      } rounded-full px-4 py-3 text-base text-gray-300 placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors autofill:bg-gray-900`}
                    />
                    <button
                      onClick={handleTrialClick}
                      className="gradient-button text-white px-6 py-2.5 rounded-full font-bold text-sm sm:text-sm smooth-transition hover-lift active:scale-95 shadow-2xl whitespace-nowrap"
                    >
                      Resgatar
                    </button>
                  </div>
                  {showError && (
                    <p className="text-red-500 text-sm text-center animate-fade-in-up">
                      Por favor, insira um número de telefone válido
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* CTA Buttons - otimizado mobile */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center items-center">
              <button
                onClick={() => (window.location.hash = "/planos")}
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 sm:px-8 py-3 sm:py-3 rounded-full font-bold text-sm sm:text-base smooth-transition hover-lift inline-flex items-center active:scale-95 shadow-lg hover:shadow-xl justify-center"
                style={{ animationDelay: "0.8s" }}
              >
                <img
                  src={"/landingpage/imgs/relogio.png"}
                  alt="Relógio"
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0 brightness-0"
                />
                <span>Escolha seu plano</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
