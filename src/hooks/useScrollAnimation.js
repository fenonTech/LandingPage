import { useEffect, useRef, useState } from "react";

// Gera um ID único para cada elemento baseado em sua posição na página
const generateElementId = (element) => {
  if (!element) return null;

  // Usa o id do elemento se existir
  if (element.id) return `elem-${element.id}`;

  // Usa uma combinação de tag, classes e posição como identificador único
  const tagName = element.tagName;
  const className = element.className || "";
  const siblings = element.parentElement
    ? Array.from(element.parentElement.children)
    : [];
  const index = siblings.indexOf(element);

  return `elem-${tagName}-${className.substring(0, 20)}-${index}`;
};

// Verifica se um elemento já foi animado (persiste no sessionStorage)
const hasBeenAnimated = (elementId) => {
  if (!elementId) return false;
  try {
    return sessionStorage.getItem(`animated-${elementId}`) === "true";
  } catch {
    return false;
  }
};

// Marca um elemento como animado (persiste no sessionStorage)
const markAsAnimated = (elementId) => {
  if (!elementId) return;
  try {
    sessionStorage.setItem(`animated-${elementId}`, "true");
  } catch {
    // Ignora erros de storage (modo privado, etc)
  }
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

    // Gera ID do elemento apenas uma vez
    if (!elementIdRef.current) {
      elementIdRef.current = generateElementId(element);
    }

    const elementId = elementIdRef.current;

    // Verifica se já foi animado anteriormente
    const alreadyAnimated = hasBeenAnimated(elementId);

    if (alreadyAnimated || hasAnimatedRef.current) {
      // Força visibilidade imediata e adiciona classes permanentes
      if (!isVisible) {
        setIsVisible(true);
      }
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

          // Marca como animado no storage
          markAsAnimated(elementId);

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

    // Gera ID do elemento apenas uma vez
    if (!elementIdRef.current) {
      elementIdRef.current = generateElementId(element);
    }

    const elementId = elementIdRef.current;

    // Verifica se já foi animado anteriormente
    const alreadyAnimated = hasBeenAnimated(elementId);

    if (alreadyAnimated || hasAnimatedRef.current) {
      // Força visibilidade imediata e adiciona classes permanentes
      if (!isVisible) {
        setIsVisible(true);
      }
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

            // Marca como animado no storage
            markAsAnimated(elementId);

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
