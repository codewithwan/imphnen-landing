"use client"

import { motion } from "framer-motion"
import type { ElementType } from "react"

interface AnimatedTextProps {
  text: string
  element?: ElementType
  className?: string
  delay?: number
}

export default function AnimatedText({
  text,
  element: Element = "span",
  className = "",
  delay = 0,
}: AnimatedTextProps) {
  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <Element className={className}>
      <motion.div
        style={{ display: "inline-block", whiteSpace: "nowrap" }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <motion.span key={index} variants={child} style={{ display: "inline-block", marginRight: "0.25em" }}>
            {word}
          </motion.span>
        ))}
      </motion.div>
    </Element>
  )
}
