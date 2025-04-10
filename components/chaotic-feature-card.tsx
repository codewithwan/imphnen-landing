"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ChaoticFeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  rotation?: number
  translateY?: number
  translateX?: number
  color?: string
  delay?: number
  id?: number
}

export default function ChaoticFeatureCard({
  icon,
  title,
  description,
  rotation = 0,
  translateY = 0,
  translateX = 0,
  color = "blue",
  delay = 0,
  id = 0,
}: ChaoticFeatureCardProps) {
  const colorVariants = {
    blue: "from-blue-400 to-blue-600",
    purple: "from-purple-400 to-purple-600",
    green: "from-green-400 to-green-600",
    pink: "from-pink-400 to-pink-600",
    orange: "from-orange-400 to-orange-600",
    teal: "from-teal-400 to-teal-600",
  }

  const colorClass = colorVariants[color as keyof typeof colorVariants] || colorVariants.blue

  return (
    <motion.div
      className={`group relative bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden`}
      style={{
        transform: `rotate(${rotation}deg) translateY(${translateY}px) translateX(${translateX}px)`,
        transformOrigin: "center center",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {/* Decorative elements */}
      <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-30" />
      <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-gradient-to-tr from-blue-100 to-blue-200 rounded-full opacity-20" />

      {/* Glowing accent line */}
      <div
        className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${colorClass} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-lg`}
      />

      {/* Icon with animation */}
      <motion.div
        className={`relative z-10 h-12 w-12 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center mb-4 text-white shadow-md`}
        style={{ transform: `rotate(${rotation * -1}deg)` }}
        whileHover={{ rotate: 5, scale: 1.1 }}
      >
        {icon}
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-2 font-mono">{title}</h3>
        <p className="text-gray-600 font-mono">{description}</p>
      </div>

      {/* Code-like decoration */}
      <div className="absolute bottom-2 right-2 text-gray-200 opacity-30 font-mono text-xs">
        {`{id: ${id}}`}
      </div>
    </motion.div>
  )
}
