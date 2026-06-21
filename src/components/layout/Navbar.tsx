"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Candidate } from "@/types";
import { getFileUrl } from "@/sanity/image";
import { cn } from "@/lib/utils";

interface NavbarProps {
  candidate: Candidate;
}

const navItems = [
  { href: "/projects", label: "Projects", match: "/projects" },
  { href: "/#experience", label: "Experience", match: "experience" },
  { href: "/#skills", label: "Skills", match: "skills" },
  { href: "/#education", label: "Education", match: "education" },
  { href: "/#research", label: "Research", match: "research" },
  { href: "/#about", label: "About", match: "about" },
  { href: "/#contact", label: "Contact", match: "contact" },
];

export function Navbar({ candidate }: NavbarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const resumeUrl = candidate.resume?.asset?._ref
    ? getFileUrl(candidate.resume.asset._ref)
    : undefined;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (match: string) => {
    if (match.startsWith("/")) {
      return pathname.startsWith(match);
    }
    if (pathname !== "/") {
      return false;
    }
    if (typeof window === "undefined") {
      return false;
    }
    const hash = window.location.hash.replace("#", "");
    return hash === match;
  };

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/" className="brand">
          {candidate.fullName}
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={cn("nav-links", menuOpen && "open")}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.match) ? "active" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {resumeUrl ? (
            <a
              href={resumeUrl}
              className="resume-link"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
