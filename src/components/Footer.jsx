export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-700 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-8 mb-10 sm:mb-12">
          {/* Logo and Description */}
          <div className="sm:col-span-2 md:col-span-2">
            <img
              src="/imgs/logoHeader.png"
              alt="Meu Bolso"
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm sm:text-base mb-6 max-w-md leading-relaxed">
              Controle seu dinheiro de forma simples e inteligente. Comece agora
              e aproveite 5 dias grátis para usar o Meu Bolso sem compromisso.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">
              Recursos
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#whatsapp"
                  className="text-gray-400 hover:text-white transition-colors text-sm active:text-yellow-400"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="#dashboard"
                  className="text-gray-400 hover:text-white transition-colors text-sm active:text-yellow-400"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#plans"
                  className="text-gray-400 hover:text-white transition-colors text-sm active:text-yellow-400"
                >
                  Planos e Preços
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-white transition-colors text-sm active:text-yellow-400"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Suporte</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm active:text-yellow-400 flex items-center gap-2"
                >
                  <img
                    src="/imgs/whatsapp.png"
                    alt="WhatsApp"
                    className="w-5 h-5"
                  />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">
              Redes Sociais
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm active:text-yellow-400 flex items-center gap-2"
                >
                  <img
                    src="/imgs/instagram.png"
                    alt="Instagram"
                    className="w-5 h-5"
                  />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-700 pt-6 sm:pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            © 2024 Meu Bolso. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
