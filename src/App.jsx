import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import WhatsAppPay from "./components/WhatsAppPay";
import OpenFinance from "./components/OpenFinance";
import Plans from "./components/Plans";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import { useEffect } from "react";

function App() {
  const [currentView, setCurrentView] = useState("main"); // 'main', 'login', 'createAccount', 'forgotPassword'
  const [showScrollTop, setShowScrollTop] = useState(false);

  console.log("App render - currentView:", currentView);

  // Detectar scroll para mostrar/ocultar botão
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para voltar ao topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleOpenCreateAccount = () => {
    console.log("Opening Create Account");
    setCurrentView("createAccount");
  };

  const handleOpenLogin = () => {
    console.log("Opening Login");
    setCurrentView("login");
  };

  const handleOpenForgotPassword = () => {
    console.log("Opening Forgot Password");
    setCurrentView("forgotPassword");
  };

  const handleGoBack = () => {
    console.log("Going back to main");
    setCurrentView("main");
  };

  // Renderizar baseado na view atual
  if (currentView === "login") {
    return (
      <Login
        isVisible={true}
        onClose={handleGoBack}
        onSwitchToCreateAccount={handleOpenCreateAccount}
        onSwitchToForgotPassword={handleOpenForgotPassword}
      />
    );
  }

  if (currentView === "createAccount") {
    return (
      <CreateAccount
        isVisible={true}
        onClose={handleGoBack}
        onSwitchToLogin={handleOpenLogin}
      />
    );
  }

  if (currentView === "forgotPassword") {
    return (
      <ForgotPassword
        isVisible={true}
        onClose={handleGoBack}
        onBackToLogin={handleOpenLogin}
      />
    );
  }

  // View principal
  return (
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
      <OpenFinance />
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
}

export default App;
