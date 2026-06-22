import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { GlobalInteractive } from "@/components/ui/GlobalInteractive";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-mono-accent",
});

export const metadata: Metadata = {
  title: "Janhavi Jadhav | Software Engineer, Agentic AI & Applied ML",
  description:
    "Graduate student and software engineer building AI-powered applications, agentic systems, RAG pipelines, and production-grade APIs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} h-full antialiased`}>
      <body className="min-h-full">
        <GlobalInteractive />
        {children}
      </body>
    </html>
  );
}
