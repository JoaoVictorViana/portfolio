import { useRef, useState, useEffect, RefObject } from "react";

interface Options {
  threshold?: number;
  rootMargin?: string;
}

export function useIntersection<T extends HTMLDivElement = HTMLDivElement>(
  options: Options = {},
): [RefObject<T | null>, boolean] {
  const { threshold = 0.1, rootMargin = "0px" } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}
