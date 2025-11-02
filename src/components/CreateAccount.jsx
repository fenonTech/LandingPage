import { useState } from "react";

function CreateAccount({ isVisible, onClose, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    cpf: "",
    banco: "",
    senha: "",
    confirmarSenha: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showBankDropdown, setShowBankDropdown] = useState(false);

  const bancos = [
    { id: "nubank", nome: "Nubank", cor: "#8A05BE" },
    { id: "inter", nome: "Banco Inter", cor: "#FF7A00" },
    { id: "c6", nome: "C6 Bank", cor: "#000000" },
    { id: "neon", nome: "Neon", cor: "#00D95F" },
    { id: "next", nome: "Next", cor: "#00D664" },
    { id: "picpay", nome: "PicPay", cor: "#21C25E" },
    { id: "mercadopago", nome: "Mercado Pago", cor: "#00AAFF" },
    { id: "itau", nome: "Itaú", cor: "#EC7000" },
    { id: "bradesco", nome: "Bradesco", cor: "#CC092F" },
    { id: "santander", nome: "Santander", cor: "#EC0000" },
    { id: "caixa", nome: "Caixa Econômica", cor: "#005CA9" },
    { id: "bb", nome: "Banco do Brasil", cor: "#FFF100" },
    { id: "original", nome: "Banco Original", cor: "#7ED957" },
    { id: "safra", nome: "Banco Safra", cor: "#00A859" },
    { id: "outros", nome: "Outros", cor: "#6B7280" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Formatação automática para data de nascimento
    if (name === "dataNascimento") {
      let formattedValue = value.replace(/\D/g, ""); // Remove tudo que não é número

      if (formattedValue.length >= 2) {
        formattedValue =
          formattedValue.slice(0, 2) + "/" + formattedValue.slice(2);
      }
      if (formattedValue.length >= 5) {
        formattedValue =
          formattedValue.slice(0, 5) + "/" + formattedValue.slice(5, 9);
      }

      setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de criação de conta
    console.log("Dados da nova conta:", formData);
  };

  if (!isVisible) return null;

  return (
    <div className="min-h-screen bg-black flex overflow-y-auto">
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
      <div className="w-full lg:w-1/2 px-6 py-16 lg:p-12 flex flex-col justify-center items-center">
        <div className="w-full max-w-sm">
          {/* Título */}
          <div className="mb-6 w-full text-center">
            <h1 className="text-lg sm:text-3xl font-bold text-white mb-1">
              CRIAR CONTA
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm">
              Crie sua conta gratuita para começar
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            {/* Nome */}
            <div>
              <label className="block text-white font-medium mb-1 text-xs">
                Nome Completo
              </label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                placeholder="Seu nome completo"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-1.5 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors autofill:bg-gray-900"
                required
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-white font-medium mb-1 text-xs">
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

            {/* Telefone */}
            <div>
              <label className="block text-white font-medium mb-1 text-xs">
                WhatsApp
              </label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleInputChange}
                placeholder="(00) 00000-0000"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-1.5 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors autofill:bg-gray-900"
                required
              />
            </div>

            {/* Data de Nascimento */}
            <div>
              <label className="block text-white font-medium mb-1 text-xs">
                Data de Nascimento
              </label>
              <input
                type="text"
                name="dataNascimento"
                value={formData.dataNascimento}
                onChange={handleInputChange}
                placeholder="DD/MM/AAAA"
                maxLength="10"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-1.5 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors autofill:bg-gray-900"
                required
              />
            </div>

            {/* CPF */}
            <div>
              <label className="block text-white font-medium mb-1 text-xs">
                CPF
              </label>
              <input
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleInputChange}
                placeholder="000.000.000-00"
                maxLength="14"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-1.5 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors autofill:bg-gray-900"
                required
              />
            </div>

            {/* Selecionar Banco */}
            <div>
              <label className="block text-white font-medium mb-1 text-xs">
                Selecione seu Banco
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowBankDropdown(!showBankDropdown)}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-1.5 text-sm text-left focus:outline-none focus:border-yellow-400 transition-colors flex items-center justify-between"
                >
                  {formData.banco ? (
                    <div className="flex items-center gap-2">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        style={{
                          backgroundColor: bancos.find(
                            (b) => b.id === formData.banco
                          )?.cor,
                        }}
                      >
                        {bancos
                          .find((b) => b.id === formData.banco)
                          ?.nome.charAt(0)}
                      </div>
                      <span className="text-gray-300">
                        {bancos.find((b) => b.id === formData.banco)?.nome}
                      </span>
                    </div>
                  ) : (
                    <span className="text-gray-500">Selecione um banco</span>
                  )}
                  <svg
                    className={`w-4 h-4 text-gray-500 transition-transform ${
                      showBankDropdown ? "rotate-180" : ""
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

                {showBankDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-gray-900 border border-gray-800 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                    {bancos.map((banco) => (
                      <button
                        key={banco.id}
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, banco: banco.id }));
                          setShowBankDropdown(false);
                        }}
                        className="w-full px-3 py-2 text-left hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm"
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                          style={{ backgroundColor: banco.cor }}
                        >
                          {banco.nome.charAt(0)}
                        </div>
                        <span className="text-gray-300">{banco.nome}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Senha */}
            <div>
              <label className="block text-white font-medium mb-1 text-xs">
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

            {/* Confirmar Senha */}
            <div>
              <label className="block text-white font-medium mb-1 text-xs">
                Confirmar Senha
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmarSenha"
                  value={formData.confirmarSenha}
                  onChange={handleInputChange}
                  placeholder="Confirme sua senha"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-1.5 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors pr-10 autofill:bg-gray-900"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  {showConfirmPassword ? (
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

            {/* Aceitar Termos */}
            <div className="flex items-start text-xs pt-1">
              <input
                id="accept-terms"
                name="accept-terms"
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="h-3.5 w-3.5 mt-0.5 text-yellow-400 focus:ring-yellow-400 border-gray-800 rounded bg-gray-900 cursor-pointer"
                required
              />
              <label
                htmlFor="accept-terms"
                className="ml-2 block text-gray-400 cursor-pointer"
              >
                Eu aceito os{" "}
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-300 transition-colors underline decoration-gray-400"
                >
                  Termos de Uso
                </button>{" "}
                e a{" "}
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-300 transition-colors underline decoration-gray-400"
                >
                  Política de Privacidade
                </button>
              </label>
            </div>

            {/* Botão Criar Conta */}
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded-lg transition-all duration-300 hover-lift mt-1.5 shadow-lg text-sm"
            >
              Criar conta gratuita
            </button>

            {/* Link para login */}
            <div className="text-center pt-1">
              <p className="text-gray-400 text-xs">
                Já tem uma conta?{" "}
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-300 transition-colors font-medium underline decoration-gray-400"
                  onClick={onSwitchToLogin}
                >
                  Entrar
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

export default CreateAccount;
