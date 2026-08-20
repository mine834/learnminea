import type { Transition, Variants } from "framer-motion";
import { motionTokens } from "./tokens";

type MotionVariantName = keyof typeof motionTokens.variants;

function seconds(value: string) {
  return Number.parseFloat(value) / 1000;
}

function easing(value: number[]): [number, number, number, number] {
  return [value[0] ?? 0, value[1] ?? 0, value[2] ?? 1, value[3] ?? 1];
}

function tokenVariant(name: MotionVariantName): Variants {
  return motionTokens.variants[name] as Variants;
}

export const transitions = {
  default: {
    duration: seconds(motionTokens.duration.normal),
    ease: easing(motionTokens.easing.default),
  } satisfies Transition,
  fast: {
    duration: seconds(motionTokens.duration.fast),
    ease: easing(motionTokens.easing.default),
  } satisfies Transition,
  page: {
    duration: seconds(motionTokens.duration.page),
    ease: easing(motionTokens.easing.decelerate),
  } satisfies Transition,
} as const;

export const fadeUp = tokenVariant("fadeUp");
export const fadeIn = tokenVariant("fadeIn");
export const fadeDown = tokenVariant("fadeDown");
export const slideRight = tokenVariant("slideRight");
export const slideLeft = tokenVariant("slideLeft");
export const scaleIn = tokenVariant("scaleIn");
export const textReveal = tokenVariant("textReveal");
export const liquid = tokenVariant("liquid");
export const shimmer = tokenVariant("shimmer");

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: seconds(motionTokens.duration.stagger) },
  },
};

export const pageFade: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: transitions.page },
  exit: { opacity: 0, transition: transitions.fast },
};
