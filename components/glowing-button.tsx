"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"

interface GlowingButtonProps extends ButtonProps {
  children: React.ReactNode
  fullWidth?: boolean
}

export default function GlowingButton({ children, fullWidth, ...props }: GlowingButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={`relative ${fullWidth ? "w-full" : ""}`}>
      <motion.div
        className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 opacity-75 blur"
        animate={{
          opacity: isHovered ? 0.85 : 0.5,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      <Button
        size="lg"
        className={`relative bg-black text-white hover:text-white z-10 ${fullWidth ? "w-full" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {children}
      </Button>
    </div>
  )
}
