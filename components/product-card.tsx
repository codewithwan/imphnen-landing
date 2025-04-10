"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"

interface ProductCardProps {
  title: string
  description: string
  imageUrl: string
  rating: number
  price?: number
  rotation?: number
}

export default function ProductCard({ 
  title, 
  description, 
  imageUrl, 
  rating,
  price = 150,
  rotation = 0 
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
      style={{ transform: `rotate(${rotation}deg)` }}
      whileHover={{ y: -5, scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div animate={{ scale: isHovered ? 1.05 : 1 }} transition={{ duration: 0.3 }} className="h-full w-full">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </motion.div>

        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-blue-600 bg-opacity-0 flex items-center justify-center"
          animate={{
            backgroundColor: isHovered ? "rgba(37, 99, 235, 0.2)" : "rgba(37, 99, 235, 0)",
          }}
          transition={{ duration: 0.3 }}
        >
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-full p-3 shadow-lg"
            >
              <ShoppingCart className="h-6 w-6 text-blue-600" />
            </motion.div>
          )}
        </motion.div>

        {/* Price tag */}
        <div className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold font-mono shadow-md">
          {`Rp${price}k`}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold font-mono">{title}</h3>
        <p className="text-sm text-gray-600 mb-2 font-mono">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-500 text-yellow-500" : "text-gray-400"}`} />
            ))}
            <span className="text-xs text-gray-500 ml-2 font-mono">{rating.toFixed(1)}</span>
          </div>
          <span className="text-xs text-blue-500 font-mono">Limited Edition</span>
        </div>
      </div>

      {/* Fake discount tag */}
      <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-xs font-bold transform -rotate-45 translate-x-[-30%] translate-y-[40%] font-mono">
        SALE
      </div>
    </motion.div>
  )
}
