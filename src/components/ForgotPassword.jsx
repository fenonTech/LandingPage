import { useState } from "react";
import logoHeader from "../imgs/logoHeader.png";
import celularImg from "../imgs/celular.png";

function ForgotPassword({ isVisible, onClose, onBackToLogin }) {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio de email
    console.log("Email para recuperação:", email);
    setEmailSent(true);
  };

  if (!isVisible) return null;

  return (
    <div className="h-screen bg-black flex overflow-hidden">
      {/* Logo e Nome no topo */}
      <button
        onClick={onClose}
        className="absolute top-4 left-4 flex items-center z-10 hover:opacity-80 transition-opacity cursor-pointer"
      >
        <img
          src={logoHeader}
          alt="MEU BOLSO"
          className="h-7 sm:h-10 w-auto"
        />
        <span className="ml-2 sm:ml-3 text-yellow-400 text-sm sm:text-xl font-bold">
          MEU BOLSO
        </span>
      </button>

      {/* Lado esquerdo - Formulário de Recuperação */}
      <div className="w-full lg:w-1/2 px-6 py-2 lg:p-12 flex flex-col justify-center items-center">
        <div className="w-full max-w-sm">
          {!emailSent ? (
            <>
              {/* Título */}
              <div className="mb-4 w-full text-center">
                <h1 className="text-lg sm:text-3xl font-bold text-white mb-2">
                  ESQUECEU A SENHA?
                </h1>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Não se preocupe! Digite seu email e enviaremos um link para
                  redefinir sua senha
                </p>
              </div>

              {/* Formulário */}
              <form onSubmit={handleSubmit} className="space-y-4 w-full">
                {/* Email */}
                <div>
                  <label className="block text-white font-medium mb-1 text-xs">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-2.5 text-base text-gray-300 placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors autofill:bg-gray-900"
                    required
                  />
                </div>

                {/* Botão Enviar */}
                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-lg transition-all duration-300 hover-lift shadow-lg text-sm"
                >
                  Enviar link de recuperação
                </button>

                {/* Link para voltar ao login */}
                <div className="text-center pt-2">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-300 transition-colors text-xs inline-flex items-center gap-1"
                    onClick={onBackToLogin}
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
                    Voltar para o login
                  </button>
                </div>
              </form>
            </>
          ) : (
            // Mensagem de sucesso
            <div className="text-center">
              {/* Ícone de email enviado */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>

              <h1 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Email enviado!
              </h1>
              <p className="text-gray-400 text-sm sm:text-base mb-2">
                Enviamos um link de recuperação para
              </p>
              <p className="text-yellow-400 font-medium text-sm sm:text-base mb-6">
                {email}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mb-8">
                Verifique sua caixa de entrada e spam. O link expira em 24
                horas.
              </p>

              {/* Botão voltar ao login */}
              <button
                onClick={onBackToLogin}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded-lg transition-all duration-300 hover-lift shadow-lg text-sm"
              >
                Voltar para o login
              </button>

              {/* Reenviar email */}
              <div className="text-center pt-4">
                <p className="text-gray-400 text-xs">
                  Não recebeu o email?{" "}
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-300 transition-colors font-medium underline decoration-gray-400"
                    onClick={() => setEmailSent(false)}
                  >
                    Reenviar
                  </button>
                </p>
              </div>
            </div>
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
            src={celularImg}
            alt="WhatsApp Meu Bolso"
            className="w-96 h-auto drop-shadow-2xl"
          />
        </div>

        {/* Decorative text */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-gray-400 text-lg font-medium">
            Recupere o acesso às suas finanças
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
