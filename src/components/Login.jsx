import { useState } from "react";

function Login({
  isVisible,
  onClose,
  onSwitchToCreateAccount,
  onSwitchToForgotPassword,
}) {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de login
    console.log("Dados do login:", formData);
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
          {/* Título */}
          <div className="mb-2 w-full text-center">
            <h1 className="text-lg sm:text-3xl font-bold text-white mb-1">
              ENTRAR{" "}
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm">
              Entre na sua conta para continuar
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-2 w-full">
            {/* Email */}
            <div>
              <label className="block text-white font-medium mb-0.5 text-xs">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="seu@email.com"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-1.5 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors autofill:bg-gray-900"
                required
              />
            </div>

            {/* Senha */}
            <div>
              <label className="block text-white font-medium mb-0.5 text-xs">
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="senha"
                  value={formData.senha}
                  onChange={handleInputChange}
                  placeholder="Digite sua senha"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-1.5 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors pr-10 autofill:bg-gray-900"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464M9.878 9.878l-2.121-2.121m4.242 4.242L14.12 14.12m0 0l2.121 2.121M14.12 14.12l2.121-2.121m-2.121 2.121L12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.543 7-1.275 4.057-5.066 7-9.543 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Opções extras */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-3.5 w-3.5 text-yellow-400 focus:ring-yellow-400 border-gray-800 rounded bg-gray-900 cursor-pointer"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-gray-400 cursor-pointer"
                >
                  Lembrar de mim
                </label>
              </div>

              <button
                type="button"
                className="text-gray-400 hover:text-gray-300 transition-colors underline decoration-gray-400"
                onClick={onSwitchToForgotPassword}
              >
                Esqueceu a senha?
              </button>
            </div>

            {/* Botão Entrar */}
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded-lg transition-all duration-300 hover-lift mt-1.5 shadow-lg text-sm"
            >
              Entrar na conta
            </button>

            {/* Link para criar conta */}
            <div className="text-center pt-1">
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
