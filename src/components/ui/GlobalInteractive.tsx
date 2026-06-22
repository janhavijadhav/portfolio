"use client";

import dynamic from "next/dynamic";

const CursorGlow = dynamic(() => import("./CursorGlow").then((m) => m.CursorGlow), { ssr: false });
const ScrollProgress = dynamic(
  () => import("./ScrollProgress").then((m) => m.ScrollProgress),
  { ssr: false },
);
const SectionDots = dynamic(
  () => import("./SectionDots").then((m) => m.SectionDots),
  { ssr: false },
);
const PageIntro = dynamic(() => import("./PageIntro").then((m) => m.PageIntro), { ssr: false });

export function GlobalInteractive() {
  return (
    <>
      <PageIntro />
      <ScrollProgress />
      <CursorGlow />
      <SectionDots />
    </>
  );
}
