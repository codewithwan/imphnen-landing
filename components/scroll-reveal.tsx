"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export default function ScrollReveal({ children, delay = 0, direction = "up" }: ScrollRevealProps) {
  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration: 0.6,
          delay: delay,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  )
}
