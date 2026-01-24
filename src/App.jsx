import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import WhatsAppPay from "./components/WhatsAppPay";
import Plans from "./components/Plans";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Detectar scroll para mostrar/ocultar botão com throttling
  useEffect(() => {
    let timeoutId = null;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // Throttling - só atualiza se houver mudança significativa
      const currentScrollY = window.scrollY;
      const scrollDiff = Math.abs(currentScrollY - lastScrollY);

      // Só atualiza se scrollou mais de 50px
      if (scrollDiff < 50) return;

      lastScrollY = currentScrollY;

      // Usa requestAnimationFrame para performance
      if (timeoutId) {
        cancelAnimationFrame(timeoutId);
      }

      timeoutId = requestAnimationFrame(() => {
        const shouldShow = currentScrollY > 300;
        setShowScrollTop((prev) => (prev !== shouldShow ? shouldShow : prev));
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        cancelAnimationFrame(timeoutId);
      }
    };
  }, []);

  // Função para voltar ao topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleOpenCreateAccount = () => {
    navigate("/criar-conta");
  };

  const handleOpenLogin = () => {
    navigate("/login");
  };

  const handleOpenForgotPassword = () => {
    navigate("/esqueci-senha");
  };

  const handleGoBack = () => {
    navigate("/");
  };

  // Componente da página principal
  const MainPage = () => (
    <div className="min-h-screen bg-dark-900">
      <Header
        onOpenCreateAccount={handleOpenCreateAccount}
        onOpenLogin={handleOpenLogin}
      />
      <Hero onOpenCreateAccount={handleOpenCreateAccount} />
      <div className="hidden sm:block">
        <Dashboard />
      </div>
      <WhatsAppPay />
      <Plans />
      <FAQ />
      <Footer />

      {/* Botão Voltar ao Topo */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full shadow-2xl transition-all duration-300 hover-lift active:scale-95 z-50 animate-fade-in"
          aria-label="Voltar ao topo"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route
        path="/login"
        element={
          <Login
            isVisible={true}
            onClose={handleGoBack}
            onSwitchToCreateAccount={handleOpenCreateAccount}
            onSwitchToForgotPassword={handleOpenForgotPassword}
          />
        }
      />
      <Route
        path="/criar-conta"
        element={
          <CreateAccount
            isVisible={true}
            onClose={handleGoBack}
            onSwitchToLogin={handleOpenLogin}
          />
        }
      />
      <Route
        path="/esqueci-senha"
        element={
          <ForgotPassword
            isVisible={true}
            onClose={handleGoBack}
            onBackToLogin={handleOpenLogin}
          />
        }
      />
      <Route
        path="/planos"
        element={
          <div className="min-h-screen bg-dark-900">
            <div className="bg-black sticky top-0 z-50 border-b border-dark-700">
              <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                  <button
                    onClick={() => navigate("/")}
                    className="flex items-center cursor-pointer hover:opacity-80 transition-opacity active:scale-95"
                  >
                    <img
                      src={"/landingpage/imgs/logoHeader.png"}
                      alt="MEU BOLSO"
                      className="h-8 sm:h-10 w-auto"
                    />
                    <span className="ml-2 sm:ml-3 text-yellow-400 text-base sm:text-xl font-bold">
                      MEU BOLSO
                    </span>
                  </button>
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <button
                      onClick={handleOpenLogin}
                      className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 sm:px-6 py-2 rounded-lg font-bold transition-colors inline-flex items-center text-sm sm:text-base active:scale-95 shadow-lg hover:shadow-xl"
                    >
                      <svg
                        className="w-4 h-4 mr-1 sm:mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Plans isRenewal={false} />
          </div>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
