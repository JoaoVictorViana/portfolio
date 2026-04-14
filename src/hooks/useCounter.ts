import { useState, useEffect } from "react";
import { useIntersection } from "./useIntersection";

export function useCounter(target: number) {
  const [currentValue, setCurrentValue] = useState(0);
  const [ref, isVisible] = useIntersection();

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const increment = target / 100;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCurrentValue(target);
        clearInterval(interval);
      } else {
        setCurrentValue(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isVisible, target]);

  return { ref, currentValue };
}
