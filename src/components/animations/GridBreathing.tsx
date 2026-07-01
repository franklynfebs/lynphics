import { motion } from "framer-motion";
import type { ReactNode } from "react";

import useReducedMotion from "../../hooks/useReducedMotion";
import { GRID_BREATH_DURATION } from "../../lib/motion";

interface GridBreathingProps {
  children: ReactNode;
}

export default function GridBreathing({
  children,
}: GridBreathingProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      animate={{
        opacity: [0.04, 0.05, 0.04],
      }}
      transition={{
        duration: GRID_BREATH_DURATION,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}