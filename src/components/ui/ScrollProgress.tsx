"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const pct = (scrollTop / (scrollHeight - clientHeight)) * 100;
      if (barRef.current) barRef.current.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <div ref={barRef} className="scroll-progress" aria-hidden />;
}
