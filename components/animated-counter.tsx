"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  duration?: number
  delay?: number
}

export default function AnimatedCounter({ value, duration = 2, delay = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => {
        let start = 0
        const step = Math.ceil(value / (duration * 60))
        const counter = setInterval(() => {
          start += step
          if (start > value) {
            setCount(value)
            clearInterval(counter)
          } else {
            setCount(start)
          }
        }, 1000 / 60) // 60fps

        setHasAnimated(true)

        return () => clearInterval(counter)
      }, delay * 1000)

      return () => clearTimeout(timer)
    }
  }, [isInView, value, duration, delay, hasAnimated])

  return <span ref={ref}>{count}</span>
}
