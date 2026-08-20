"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { ReactNode } from "react";
import { fadeUp, slideLeft, slideRight, transitions } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Direction = "up" | "left" | "right";

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  const variants = direction === "left" ? slideRight : direction === "right" ? slideLeft : fadeUp;

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : "hidden"}
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ ...transitions.default, delay: reduced ? 0 : delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
