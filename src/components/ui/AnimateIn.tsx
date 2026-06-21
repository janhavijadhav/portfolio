"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { defaultViewport, fadeInUp } from "@/lib/animations";

type AnimateInProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function AnimateIn({ children, delay = 0, ...props }: AnimateInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeInUp}
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
