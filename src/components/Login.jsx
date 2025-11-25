import { useState } from "react";

function Login({
  isVisible,
  onClose,
  onSwitchToCreateAccount,
  onSwitchToForgotPassword,
}) {
  const [step, setStep] = useState("phone"); // 'phone' ou 'code'
  const [telefone, setTelefone] = useState("");
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não é número

    if (value.length >= 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    if (value.length >= 10) {
      value = `${value.slice(0, 10)}-${value.slice(10, 14)}`;
    }

    setTelefone(value);
  };

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Remove formatação e adiciona +55
      const phoneNumber = "+55" + telefone.replace(/\D/g, "");

      const response = await fetch(
        "https://n8n.srv1056458.hstgr.cloud/webhook/autenticacao",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tipoMetodo: "gerarCodigo",
            telefone: phoneNumber,
          }),
        }
      );

      if (response.status === 401) {
        const data = await response.json();
        alert(data.mensagem || "Número de telefone não identificado");
        return;
      }

      if (response.ok) {
        const data = await response.json();

        if (data.mensagem === "gerado") {
          console.log("Código enviado com sucesso para:", phoneNumber);
          setStep("code");
        } else {
          alert("Tivemos um erro interno. Por favor, contate o suporte.");
        }
      } else {
        alert("Tivemos um erro interno. Por favor, contate o suporte.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro ao enviar código. Verifique sua conexão e tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCodeChange = (index, value) => {
    if (value.length > 1) return;
    if (value && !/^[a-zA-Z0-9]$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value.toLowerCase();
    setCode(newCode);

    // Auto-focus no próximo input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleCodeKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleCodeSubmit = async (e) => {
    e.preventDefault();
    const fullCode = code.join("").toLowerCase();

    if (fullCode.length !== 6) return;

    setIsLoading(true);

    try {
      // Remove formatação e adiciona +55
      const phoneNumber = "+55" + telefone.replace(/\D/g, "");

      const response = await fetch(
        "https://n8n.srv1056458.hstgr.cloud/webhook/autenticacao",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tipoMetodo: "validarCodigo",
            telefone: phoneNumber,
            codigoTemp: fullCode,
          }),
        }
      );

      const data = await response.json();

      if (
        (response.status === 202 || response.status === 200) &&
        data.mansagem === "valido"
      ) {
        // Redirecionar para o dashboard externo com telefone e código no path
        const redirectUrl = `https://meubolso-lemon.vercel.app/${phoneNumber}/${fullCode}`;
        window.location.href = redirectUrl;
      } else if (response.status === 404) {
        if (data.mensagem === "invalido") {
          alert("Código inválido. Verifique e tente novamente.");
          setCode(["", "", "", "", "", ""]);
          document.getElementById("code-0")?.focus();
        } else if (data.mensagem === "expirado") {
          alert("Código expirado. Solicite um novo código.");
          setStep("phone");
          setCode(["", "", "", "", "", ""]);
        } else {
          alert("Tivemos um erro interno. Por favor, contate o suporte.");
        }
      } else {
        alert("Tivemos um erro interno. Por favor, contate o suporte.");
      }
    } catch (error) {
      console.error("Erro na validação:", error);
      alert("Erro ao validar código. Verifique sua conexão e tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToPhone = () => {
    setStep("phone");
    setCode(["", "", "", "", "", ""]);
  };

  console.log("Login render - isVisible:", isVisible);

  if (!isVisible) return null;

  return (
    <div className="h-screen bg-black flex overflow-hidden">
      {/* Logo e Nome no topo */}
      <button
        onClick={onClose}
        className="absolute top-4 left-4 flex items-center z-10 hover:opacity-80 transition-opacity cursor-pointer"
      >
        <img
          src="/imgs/logoHeader.png"
          alt="MEU BOLSO"
          className="h-7 sm:h-10 w-auto"
        />
        <span className="ml-2 sm:ml-3 text-yellow-400 text-sm sm:text-xl font-bold">
          MEU BOLSO
        </span>
      </button>

      {/* Lado esquerdo - Formulário de Login */}
      <div className="w-full lg:w-1/2 px-6 py-2 lg:p-12 flex flex-col justify-center items-center">
        <div className="w-full max-w-sm">
          {step === "phone" ? (
            <>
              {/* Título - Etapa Telefone */}
              <div className="mb-4 w-full text-center">
                <h1 className="text-lg sm:text-3xl font-bold text-white mb-2">
                  ENTRAR
                </h1>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Digite seu WhatsApp para receber o código de acesso
                </p>
              </div>

              {/* Formulário - Telefone */}
              <form onSubmit={handlePhoneSubmit} className="space-y-4 w-full">
                {/* WhatsApp */}
                <div>
                  <label className="block text-white font-medium mb-1 text-xs">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={telefone}
                    onChange={handlePhoneChange}
                    placeholder="(00) 00000-0000"
                    maxLength="15"
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors autofill:bg-gray-900"
                    required
                  />
                </div>

                {/* Botão Enviar Código */}
                <button
                  type="submit"
                  disabled={isLoading || telefone.length < 15}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-700 disabled:cursor-not-allowed text-black disabled:text-gray-500 font-bold py-2.5 rounded-lg transition-all duration-300 hover-lift shadow-lg text-sm flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Enviando código...
                    </>
                  ) : (
                    "Enviar código"
                  )}
                </button>

                {/* Link para criar conta */}
                <div className="text-center pt-2">
                  <p className="text-gray-400 text-xs">
                    Não tem uma conta?{" "}
                    <button
                      type="button"
                      className="text-gray-400 hover:text-gray-300 transition-colors font-medium underline decoration-gray-400"
                      onClick={onSwitchToCreateAccount}
                    >
                      Criar conta gratuita
                    </button>
                  </p>
                </div>
              </form>
            </>
          ) : (
            <>
              {/* Título - Etapa Código */}
              <div className="mb-6 w-full text-center">
                <h1 className="text-lg sm:text-3xl font-bold text-white mb-2">
                  DIGITE O CÓDIGO
                </h1>
                <p className="text-gray-400 text-xs sm:text-sm mb-1">
                  Enviamos um código de 6 dígitos para
                </p>
                <p className="text-yellow-400 font-medium text-sm">
                  {telefone}
                </p>
              </div>

              {/* Formulário - Código */}
              <form onSubmit={handleCodeSubmit} className="space-y-6 w-full">
                {/* Inputs do Código */}
                <div className="flex gap-2 justify-center">
                  {code.map((digit, index) => (
                    <input
                      key={index}
                      id={`code-${index}`}
                      type="text"
                      inputMode="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleCodeChange(index, e.target.value)}
                      onKeyDown={(e) => handleCodeKeyDown(index, e)}
                      className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-900 border-2 border-gray-800 rounded-lg text-center text-xl sm:text-2xl font-bold text-gray-300 focus:outline-none focus:border-yellow-400 transition-colors lowercase"
                    />
                  ))}
                </div>

                {/* Botão Validar */}
                <button
                  type="submit"
                  disabled={isLoading || code.join("").length !== 6}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-700 disabled:cursor-not-allowed text-black disabled:text-gray-500 font-bold py-2.5 rounded-lg transition-all duration-300 hover-lift shadow-lg text-sm flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Validando...
                    </>
                  ) : (
                    "Validar e entrar"
                  )}
                </button>

                {/* Reenviar código e voltar */}
                <div className="flex flex-col gap-2 text-center">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-300 transition-colors text-xs font-medium"
                    onClick={handlePhoneSubmit}
                  >
                    Não recebeu o código? Reenviar
                  </button>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-300 transition-colors text-xs inline-flex items-center justify-center gap-1"
                    onClick={handleBackToPhone}
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Alterar número
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>

      {/* Lado direito - Imagem do WhatsApp */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-black relative overflow-hidden">
        {/* Yellow background circle */}
        <div className="absolute w-[500px] h-[500px] bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>

        {/* Phone with WhatsApp */}
        <div className="relative z-10 transform rotate-12 animate-float">
          <img
            src="/imgs/celular.png"
            alt="WhatsApp Meu Bolso"
            className="w-96 h-auto drop-shadow-2xl"
          />
        </div>

        {/* Decorative text */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-gray-400 text-lg font-medium">
            Gerencie suas finanças pelo WhatsApp
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
