import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const FadeIn = ({ children, delay = 0.25, width }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Animate Children
      mainControl.start("show");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      {/* Animation for Reveal in View */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          show: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.5, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
