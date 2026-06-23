"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function SectionDots() {
  const [active, setActive] = useState("hero");
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const update = () => {
      const trigger = window.scrollY + window.innerHeight * 0.35;
      let best = SECTIONS[0].id;
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= trigger) best = id;
      }
      setActive(best);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    update(); // set initial state
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="section-dots" aria-label="Section navigation">
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          className={`section-dot ${active === id ? "active" : ""}`}
          onClick={() => scrollTo(id)}
          aria-label={`Go to ${label}`}
          title={label}
        />
      ))}
    </nav>
  );
}
