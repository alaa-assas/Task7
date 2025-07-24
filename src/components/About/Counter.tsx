'use client';

import { useEffect, useRef } from 'react';

export default function Counter({ 
  target = 100, 
  suffix = "", 
  prefix = "" 
}) {
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    // Reset on mount
    el.textContent = '0';

    const updateCount = () => {
      const duration = 2000; // 2 seconds
      const stepTime = Math.max(Math.floor(duration / target), 1);
      let current = 0;

      const timer = setInterval(() => {
        current += 1;
        el.textContent = prefix + current + suffix;
        if (current >= target) {
          clearInterval(timer);
          el.textContent = prefix + target + suffix;
        }
      }, stepTime);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          updateCount();
          observer.unobserve(el); // Run only once
        }
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [target, prefix, suffix]);

  return <span ref={elRef} className='font-bold text-[32px] leading-8 text-primary pb-1.5'></span>;
}