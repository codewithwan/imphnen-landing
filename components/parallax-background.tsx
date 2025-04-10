"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ParallaxBackground() {
  const [isMounted, setIsMounted] = useState(false)
  const { scrollY } = useScroll()

  // Transform values based on scroll position
  const y1 = useTransform(scrollY, [0, 500], [0, -50])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-black to-blue-900/40 -z-10" />

      <motion.div className="absolute top-0 left-0 right-0 h-full -z-10 overflow-hidden" style={{ opacity }}>
        <motion.div className="absolute top-0 left-0 w-full h-full" style={{ y: y1 }}>
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMzBoMzB2MzBIMHoiIGZpbGwtb3BhY2l0eT0iLjAyIiBmaWxsPSIjMjA4MGU5Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />
        </motion.div>

        <motion.div
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-blue-500/20 blur-xl"
          style={{ y: y2 }}
        />

        <motion.div
          className="absolute top-40 right-20 w-32 h-32 rounded-full bg-blue-400/20 blur-xl"
          style={{ y: y1 }}
        />
      </motion.div>
    </>
  )
}
