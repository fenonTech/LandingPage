import { useEffect, useRef, useState } from "react";

// Map para rastrear elementos já animados (persiste durante a sessão)
const animatedElementsMap = new Map();

// Contador global para gerar IDs únicos
let globalIdCounter = 0;

// Gera um ID único e estável para cada elemento
const getOrCreateElementId = (element) => {
  if (!element) return null;

  // Tenta usar o ID do elemento se existir
  if (element.id) return `elem-${element.id}`;

  // Verifica se já geramos um ID para este elemento
  if (!element.dataset.animId) {
    element.dataset.animId = `anim-${globalIdCounter++}`;
  }

  return element.dataset.animId;
};

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef();
  const elementIdRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const observerRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Gera ou recupera ID único do elemento
    if (!elementIdRef.current) {
      elementIdRef.current = getOrCreateElementId(element);
    }

    const elementId = elementIdRef.current;

    // Verifica se já foi animado anteriormente
    const alreadyAnimated = animatedElementsMap.get(elementId);

    if (alreadyAnimated || hasAnimatedRef.current) {
      // Força visibilidade imediata e adiciona classes permanentes
      setIsVisible(true);
      element.classList.add("animated-once");
      element.style.opacity = "1";
      element.style.transform = "none";
      return;
    }

    // Previne criação de múltiplos observers
    if (observerRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          setIsVisible(true);

          // Marca como animado
          animatedElementsMap.set(elementId, true);

          // Adiciona classes permanentes após a animação
          requestAnimationFrame(() => {
            element.classList.add("animated-once");
            // Garante que o estado final seja aplicado
            setTimeout(() => {
              element.style.opacity = "1";
              element.style.transform = "none";
            }, 700);
          });

          // Desconecta o observer
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
  const elementIdRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const observerRef = useRef(null);
  const timeoutRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Gera ou recupera ID único do elemento
    if (!elementIdRef.current) {
      elementIdRef.current = getOrCreateElementId(element);
    }

    const elementId = elementIdRef.current;

    // Verifica se já foi animado anteriormente
    const alreadyAnimated = animatedElementsMap.get(elementId);

    if (alreadyAnimated || hasAnimatedRef.current) {
      // Força visibilidade imediata e adiciona classes permanentes
      setIsVisible(true);
      element.classList.add("animated-once");
      element.style.opacity = "1";
      element.style.transform = "none";
      return;
    }

    // Previne criação de múltiplos observers
    if (observerRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;

          timeoutRef.current = setTimeout(() => {
            setIsVisible(true);

            // Marca como animado
            animatedElementsMap.set(elementId, true);

            // Adiciona classes permanentes após a animação
            requestAnimationFrame(() => {
              element.classList.add("animated-once");
              // Garante que o estado final seja aplicado
              setTimeout(() => {
                element.style.opacity = "1";
                element.style.transform = "none";
              }, 700); // Aguarda a duração da animação
            });

            // Desconecta o observer
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
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [delay]);

  return [ref, isVisible];
};
