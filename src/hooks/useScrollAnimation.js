import { useEffect, useRef, useState } from "react";

// Map global para rastrear elementos que já foram animados
const animatedElements = new WeakMap();

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef();
  const hasAnimatedRef = useRef(false);
  const observerRef = useRef(null);
  
  // Verifica se o elemento já foi animado antes de inicializar o estado
  const [isVisible, setIsVisible] = useState(() => {
    // Esta função só roda uma vez na inicialização
    return false;
  });

  // Função wrapper para setIsVisible que garante que nunca volte para false
  const setVisibleOnceRef = useRef(null);
  if (!setVisibleOnceRef.current) {
    setVisibleOnceRef.current = (value) => {
      if (value === true) {
        setIsVisible(true);
      }
    };
  }
  const setVisibleOnce = setVisibleOnceRef.current;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Se esse elemento já foi animado, marca como visível imediatamente e não cria observer
    if (animatedElements.has(element) || hasAnimatedRef.current) {
      // Força o estado para true e garante que não mude mais
      setVisibleOnce(true);
      // Adiciona classe para manter estado final
      element.classList.add("animated-once");
      // Garante que elementos filhos também tenham a classe
      const childrenWithTransitions = element.querySelectorAll('[class*="transition"]');
      childrenWithTransitions.forEach(child => {
        child.classList.add("animated-once");
      });
      return;
    }

    // Se já existe um observer, não cria outro
    if (observerRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        // Só anima se ainda não foi animado e está visível
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          setVisibleOnce(true);
          hasAnimatedRef.current = true;
          // Marca este elemento como já animado
          animatedElements.set(element, true);
          
          // Adiciona classe imediatamente para evitar reanimação
          element.classList.add("animated-once");
          // Também adiciona aos elementos filhos que podem ter transições
          const childrenWithTransitions = element.querySelectorAll('[class*="transition"]');
          childrenWithTransitions.forEach(child => {
            child.classList.add("animated-once");
          });
          
          // Desconecta o observer imediatamente após animar
          if (observerRef.current) {
            observerRef.current.disconnect();
            observerRef.current = null;
          }
        }
      },
      {
        threshold,
        rootMargin: "50px 0px -50px 0px",
      },
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

export const useStaggeredAnimation = (delay = 100) => {
  const ref = useRef();
  const hasAnimatedRef = useRef(false);
  const observerRef = useRef(null);
  
  // Verifica se o elemento já foi animado antes de inicializar o estado
  const [isVisible, setIsVisible] = useState(() => {
    // Esta função só roda uma vez na inicialização
    return false;
  });

  // Função wrapper para setIsVisible que garante que nunca volte para false
  const setVisibleOnceRef = useRef(null);
  if (!setVisibleOnceRef.current) {
    setVisibleOnceRef.current = (value) => {
      if (value === true) {
        setIsVisible(true);
      }
    };
  }
  const setVisibleOnce = setVisibleOnceRef.current;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Se esse elemento já foi animado, marca como visível imediatamente e não cria observer
    if (animatedElements.has(element) || hasAnimatedRef.current) {
      // Força o estado para true e garante que não mude mais
      setVisibleOnce(true);
      // Adiciona classe para manter estado final
      element.classList.add("animated-once");
      // Garante que elementos filhos também tenham a classe
      const childrenWithTransitions = element.querySelectorAll('[class*="transition"]');
      childrenWithTransitions.forEach(child => {
        child.classList.add("animated-once");
      });
      return;
    }

    // Se já existe um observer, não cria outro
    if (observerRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        // Só anima se ainda não foi animado e está visível
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          setTimeout(() => {
            setVisibleOnce(true);
            // Marca este elemento como já animado
            animatedElements.set(element, true);
            
            // Adiciona classe imediatamente após o delay para evitar reanimação
            setTimeout(() => {
              element.classList.add("animated-once");
              // Também adiciona aos elementos filhos que podem ter transições
              const childrenWithTransitions = element.querySelectorAll('[class*="transition"]');
              childrenWithTransitions.forEach(child => {
                child.classList.add("animated-once");
              });
            }, delay + 50);
            
            // Desconecta o observer imediatamente após animar
            if (observerRef.current) {
              observerRef.current.disconnect();
              observerRef.current = null;
            }
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px 0px -50px 0px",
      },
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [delay]);

  return [ref, isVisible];
};
