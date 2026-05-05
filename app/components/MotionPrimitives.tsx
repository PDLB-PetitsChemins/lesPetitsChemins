"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import type { AnchorHTMLAttributes } from "react";

type AnimatedLinkProps = {
  href: string;
  className: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

type MotionBoxProps = {
  className?: string;
  children: ReactNode;
};

type HeroImageMotionProps = MotionBoxProps & {
  revealMode?: "inView" | "onLoad";
  delay?: number;
};

type StaggerRevealCardProps = MotionBoxProps & {
  index: number;
};

export function AnimatedLink({
  href,
  className,
  children,
  ...rest
}: AnimatedLinkProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <motion.div
      whileHover={{ rotate: 1, x: 3, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 380, damping: 20 }}
    >
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    </motion.div>
  );
}

export function HeroImageMotion({
  className = "",
  children,
  revealMode = "inView",
  delay = 0,
}: HeroImageMotionProps) {
  const shouldReduceMotion = useReducedMotion();
  const motionTarget = shouldReduceMotion
    ? undefined
    : { opacity: 1, y: 0, scale: 1 };
  const useOnLoadReveal = revealMode === "onLoad";

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18, scale: 0.98 }}
      animate={useOnLoadReveal ? motionTarget : undefined}
      whileInView={useOnLoadReveal ? undefined : motionTarget}
      viewport={useOnLoadReveal ? undefined : { once: true, amount: 0.45 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
        delay: shouldReduceMotion ? 0 : delay,
      }}
      whileHover={shouldReduceMotion ? undefined : { rotate: -0.8, y: -3 }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerRevealCard({
  className = "",
  children,
  index,
}: StaggerRevealCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 14 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.32,
        ease: "easeOut",
        delay: shouldReduceMotion ? 0 : index * 0.08,
      }}
    >
      {children}
    </motion.div>
  );
}
