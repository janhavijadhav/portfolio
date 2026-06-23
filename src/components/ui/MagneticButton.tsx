"use client";

import { useRef, type ReactNode } from "react";

export function MagneticButton({ children, strength = 18 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const radius = Math.max(rect.width, rect.height) * 1.8;
    if (dist < radius) {
      const pull = (1 - dist / radius) * strength;
      el.style.transform = `translate(${(dx / Math.max(dist, 1)) * pull}px, ${(dy / Math.max(dist, 1)) * pull}px)`;
      el.style.transition = "transform 0.08s ease";
    }
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
    el.style.transform = "translate(0, 0)";
  };

  return (
    <div ref={ref} className="magnetic-wrapper" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
}
