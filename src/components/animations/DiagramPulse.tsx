import { motion } from "framer-motion";
import type { ReactNode } from "react";

import useReducedMotion from "../../hooks/useReducedMotion";
import { DIAGRAM_PULSE_DURATION } from "../../lib/motion";

interface DiagramPulseProps {
  children: ReactNode;
}

export default function DiagramPulse({
  children,
}: DiagramPulseProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      animate={{
        scale: [1, 1.03, 1],
      }}
      transition={{
        duration: DIAGRAM_PULSE_DURATION,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}