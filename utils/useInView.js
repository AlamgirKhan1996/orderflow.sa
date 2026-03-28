"use client";

import { useState, useEffect, useRef } from "react";

/**
 * useInView — fires once when the element enters the viewport.
 * Disconnects after first trigger to avoid re-running animations.
 *
 * @param {IntersectionObserverInit} options
 * @returns {[React.RefObject, boolean]}
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

/**
 * useCountUp — animates a number from 0 to `end` when `trigger` is true.
 *
 * @param {number} end
 * @param {boolean} trigger
 * @param {number} duration  ms
 * @returns {number}
 */
export function useCountUp(end, trigger, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [trigger, end, duration]);

  return count;
}
