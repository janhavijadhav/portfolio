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

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id) ?? document.querySelector(".hero-section");
      if (!el) return;
      if (id === "hero") el.id = "hero";

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.4 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
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
