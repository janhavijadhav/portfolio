"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageIntro() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("intro-seen")) {
      setVisible(true);
      const t = setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem("intro-seen", "1");
      }, 2000);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="page-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <motion.div
            className="page-intro-inner"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="page-intro-monogram">JJ</div>
            <motion.p
              className="page-intro-name"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              Janhavi Jadhav
            </motion.p>
            <motion.div
              className="page-intro-bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
