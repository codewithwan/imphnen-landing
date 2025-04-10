"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export default function GridPattern() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -200])
  const opacity = useTransform(scrollY, [0, 500], [0.05, 0.02])

  return (
    <motion.div className="fixed inset-0 -z-10 overflow-hidden" style={{ y, opacity }}>
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </motion.div>
  )
}
