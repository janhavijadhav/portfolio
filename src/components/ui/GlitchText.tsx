"use client";

import { useEffect, useRef, useState } from "react";

export function GlitchText({ text }: { text: string }) {
  const [active, setActive] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const schedule = () => {
      timerRef.current = setTimeout(
        () => {
          setActive(true);
          setTimeout(() => {
            setActive(false);
            schedule();
          }, 380);
        },
        3500 + Math.random() * 4500
      );
    };
    schedule();
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <span className={`glitch-text${active ? " glitch-active" : ""}`} data-text={text}>
      {text}
    </span>
  );
}
