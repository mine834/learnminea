"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { usePathname } from "@/i18n/navigation";
import { pageFade } from "@/lib/motion";
import { useLenis } from "@/hooks/useLenis";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ExperienceProvider({ children }: { children: ReactNode }) {
  useLenis();
  const pathname = usePathname();
  const reduced = useReducedMotion();

  return (
    <motion.div
      key={pathname}
      initial={reduced ? false : "initial"}
      animate="animate"
      variants={pageFade}
      className="flex min-h-screen flex-col"
    >
      {children}
    </motion.div>
  );
}
