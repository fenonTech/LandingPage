import { useState, useEffect } from "react";

function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let timeoutId = null;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = Math.abs(currentScrollY - lastScrollY);

      if (scrollDiff < 50) return;

      lastScrollY = currentScrollY;

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showScrollTop) return null;

  return (
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
  );
}

export default ScrollToTop;
