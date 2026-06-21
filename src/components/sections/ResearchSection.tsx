"use client";

import { motion } from "framer-motion";
import type { ResearchItem } from "@/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface ResearchSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  research: ResearchItem[];
}

export function ResearchSection({
  eyebrow,
  title = "Selected Research",
  description,
  research,
}: ResearchSectionProps) {
  return (
    <section className="section section-soft" id="research">
      <div className="container">
        <AnimateIn>
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </AnimateIn>

        <motion.div
          className="stack-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {research.map((item) => (
            <motion.div key={item.title} variants={staggerItem}>
              <Card as="article" className="research-card">
                <h3>{item.title}</h3>
                {item.publishedIn ? (
                  <p>
                    <strong>Published in:</strong> {item.publishedIn}
                  </p>
                ) : null}
                {item.date ? (
                  <p>
                    <strong>Date:</strong> {item.date}
                  </p>
                ) : null}
                {item.summary ? <p>{item.summary}</p> : null}
                {item.paperUrl ? (
                  <div className="card-actions">
                    <Button href={item.paperUrl} variant="secondary" external>
                      Read Paper
                    </Button>
                  </div>
                ) : null}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
