import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/ui/ChatWidget";
import type { Candidate } from "@/types";

interface AppShellProps {
  candidate: Candidate;
  children: React.ReactNode;
}

export function AppShell({ candidate, children }: AppShellProps) {
  return (
    <div className="app-shell">
      <Navbar candidate={candidate} />
      <main>{children}</main>
      <Footer candidate={candidate} />
      <ChatWidget />
    </div>
  );
}
