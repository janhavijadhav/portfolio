import Link from "next/link";
import { Mail } from "lucide-react";
import type { Candidate } from "@/types";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { getSocialUrl } from "@/lib/utils";

interface FooterProps {
  candidate: Candidate;
}

export function Footer({ candidate }: FooterProps) {
  const year = new Date().getFullYear();
  const linkedinUrl = getSocialUrl(candidate.socialLinks, "linkedin")
    ?? candidate.contact?.linkedinUrl;
  const githubUrl = getSocialUrl(candidate.socialLinks, "github");
  const email = candidate.contact?.email;

  return (
    <footer className="site-footer">
      <div className="container footer-centered">
        <p className="footer-status">
          {"// status: open_to_work — Software Engineer, Agentic AI"}
        </p>
        <p className="footer-copyright">
          © {year} {candidate.fullName} | All Rights Reserved
        </p>
        <div className="footer-links footer-icon-links">
          {linkedinUrl ? (
            <Link
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </Link>
          ) : null}
          {githubUrl ? (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <GitHubIcon />
            </Link>
          ) : null}
          {email ? (
            <Link href={`mailto:${email}`} aria-label="Email" title="Email">
              <Mail size={28} strokeWidth={1.75} />
            </Link>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
