"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  rotation?: number
  translateY?: number
}

export default function FeatureCard({ icon, title, description, rotation = 0, translateY = 0 }: FeatureCardProps) {
  return (
    <motion.div
      className={`group relative bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow`}
      style={{ transform: `rotate(${rotation}deg) translateY(${translateY}px)` }}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-lg" />
      <motion.div
        className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600"
        style={{ transform: `rotate(${rotation * -1.5}deg)` }}
        whileHover={{ rotate: 5, scale: 1.1 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}
