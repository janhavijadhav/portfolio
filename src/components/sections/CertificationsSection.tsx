"use client";

import { motion } from "framer-motion";
import type { CertificationItem } from "@/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface CertificationsSectionProps {
  certifications: CertificationItem[];
}

const ISSUER_COLORS: Record<string, string> = {
  Udemy: "#a435f0",
  IBM: "#0f62fe",
  "Google Cloud": "#4285f4",
};

function isQwiklabsBadge(cert: CertificationItem) {
  return cert.credentialUrl?.includes("qwiklabs.com") ?? false;
}

function CertCard({ cert }: { cert: CertificationItem }) {
  const color = ISSUER_COLORS[cert.issuer ?? ""] ?? "var(--accent)";
  return (
    <>
      <span className="cert-issuer" style={{ color }}>{cert.issuer}</span>
      <p className="cert-title">{cert.title}</p>
      <div className="cert-card-footer">
        {cert.date ? <span className="cert-date">{cert.date}</span> : null}
        <span className="cert-view-link">View →</span>
      </div>
    </>
  );
}

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  if (!certifications.length) return null;

  const prominent = certifications.filter((c) => !isQwiklabsBadge(c));
  const badges = certifications.filter((c) => isQwiklabsBadge(c));

  return (
    <section className="section" id="certifications">
      <div className="container">
        <AnimateIn>
          <SectionHeader
            eyebrow="Credentials"
            title="Certifications"
            description="Verified credentials in AI/ML, data engineering, and cloud platforms."
          />
        </AnimateIn>

        {prominent.length > 0 && (
          <motion.div
            className="cert-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {prominent.map((cert, i) => (
              <motion.div key={`cert-${i}`} variants={staggerItem}>
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-card cert-card-link"
                  >
                    <CertCard cert={cert} />
                  </a>
                ) : (
                  <div className="cert-card">
                    <CertCard cert={cert} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {badges.length > 0 && (
          <AnimateIn className="cert-badges-wrap">
            <p className="cert-badges-label">
              <span className="cert-badges-dot" />
              Google Cloud Hands-on Labs
            </p>
            <div className="cert-badges-row">
              {badges.map((cert, i) => (
                <a
                  key={`badge-${i}`}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-badge-chip"
                >
                  <span className="cert-badge-title">{cert.title}</span>
                  {cert.date && (
                    <span className="cert-badge-date">{cert.date}</span>
                  )}
                </a>
              ))}
            </div>
          </AnimateIn>
        )}
      </div>
    </section>
  );
}
