"use client";

// Stable gradient text — no flicker, no animation
export function GlitchText({ text }: { text: string }) {
  return <span className="glitch-text">{text}</span>;
}
