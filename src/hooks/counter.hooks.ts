import { useEffect, useRef, useState } from "react";

export function useCounter(end: number, duration = 2000) {
  const countRef = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = countRef.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCount(0, end, duration);
          setHasAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  const animateCount = (start: number, end: number, duration: number) => {
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setCount(value);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return { count, countRef };
}
