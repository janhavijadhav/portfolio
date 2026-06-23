"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Metric {
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const METRICS: Metric[] = [
  { value: 500,  suffix: "K+",  label: "customer reviews classified", color: "var(--accent)" },
  { value: 35,   suffix: "%",   label: "ML latency reduction",         color: "var(--accent-2)" },
  { value: 5,    suffix: "M+",  label: "records processed daily",      color: "var(--accent-3)" },
  { value: 90,   suffix: "%+",  label: "automated test coverage",      color: "var(--accent-4)" },
];

function Counter({ metric, index }: { metric: Metric; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    let startTime: number | null = null;
    let rafId: number;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * metric.value));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setCount(metric.value);
      }
    };

    const timeout = setTimeout(() => { rafId = requestAnimationFrame(tick); }, index * 120);
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafId);
    };
  }, [inView, metric.value, index]);

  return (
    <motion.div
      ref={ref}
      className="metric-item"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
    >
      <div className="metric-value" style={{ color: metric.color }}>
        {count}{metric.suffix}
      </div>
      <div className="metric-label">{metric.label}</div>
    </motion.div>
  );
}

export function MetricsSection() {
  return (
    <div className="metrics-strip">
      <div className="container">
        <div className="metrics-row">
          {METRICS.map((m, i) => (
            <Counter key={m.label} metric={m} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
