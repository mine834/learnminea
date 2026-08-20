"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { ReactNode } from "react";
import { fadeUp, transitions } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Reveal({
  children,
  className,
  delay = 0,
  ariaHidden,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  ariaHidden?: boolean;
}) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : "hidden"}
      animate={reduced || inView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ ...transitions.default, delay: reduced ? 0 : delay }}
      className={className}
      aria-hidden={ariaHidden}
    >
      {children}
    </motion.div>
  );
}
