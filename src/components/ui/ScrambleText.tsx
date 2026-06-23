"use client";

import { useEffect, useRef, useState } from "react";

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>-_/[]{}=+*^?#";

export function ScrambleText({ text, className }: { text: string; className?: string }) {
  const [displayed, setDisplayed] = useState(text);
  const iterRef = useRef(0);
  const frameRef = useRef<number>(0);
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  const scramble = () => {
    cancelAnimationFrame(frameRef.current);
    iterRef.current = 0;
    const total = text.length * 3;

    const tick = () => {
      const iter = iterRef.current;
      setDisplayed(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < Math.floor(iter / 3)) return char;
            return CHARSET[Math.floor(Math.random() * CHARSET.length)];
          })
          .join("")
      );
      iterRef.current++;
      if (iterRef.current <= total) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplayed(text);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setTimeout(scramble, 120);
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameRef.current);
    };
  }, [text]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span
      ref={containerRef}
      className={className}
      style={{ fontVariantNumeric: "tabular-nums" }}
      onMouseEnter={scramble}
    >
      {displayed}
    </span>
  );
}
