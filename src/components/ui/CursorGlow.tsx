"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100, outerX: -100, outerY: -100 });

  useEffect(() => {
    let raf: number;

    const onMove = (e: MouseEvent) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
    };

    const onEnterLink = () => {
      outerRef.current?.classList.add("cursor-expanded");
    };
    const onLeaveLink = () => {
      outerRef.current?.classList.remove("cursor-expanded");
    };

    const animate = () => {
      const p = posRef.current;
      p.outerX += (p.x - p.outerX) * 0.1;
      p.outerY += (p.y - p.outerY) * 0.1;

      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${p.x - 5}px, ${p.y - 5}px)`;
      }
      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${p.outerX - 24}px, ${p.outerY - 24}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    document.querySelectorAll("a, button, [role=button]").forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={outerRef} className="cursor-ring" aria-hidden />
      <div ref={innerRef} className="cursor-dot" aria-hidden />
    </>
  );
}
