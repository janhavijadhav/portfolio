"use client";

import { motion } from "framer-motion";
import type { Candidate } from "@/types";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { RESUME_URL } from "@/lib/data";
import { fadeInUp } from "@/lib/animations";

interface ContactSectionProps {
  candidate: Candidate;
}

export function ContactSection({ candidate }: ContactSectionProps) {
  const contact = candidate.contact;
  const resumeUrl = RESUME_URL;

  return (
    <section className="section section-contact" id="contact">
      <div className="container narrow-section">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Card className="contact-card">
            <div className="section-header">
              <h2>{contact?.title ?? "Let's Connect"}</h2>
              {contact?.description ? (
                <p className="section-description">{contact.description}</p>
              ) : null}
            </div>
            <div className="contact-actions">
              {contact?.email ? (
                <Button href={`mailto:${contact.email}`} variant="primary">
                  Email Me
                </Button>
              ) : null}
              {contact?.linkedinUrl ? (
                <Button href={contact.linkedinUrl} variant="secondary" external>
                  LinkedIn
                </Button>
              ) : null}
              {resumeUrl ? (
                <Button href={resumeUrl} variant="secondary" external>
                  Download Resume
                </Button>
              ) : null}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
