"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

interface Meme {
  title: string
  description: string
  imageUrl: string
  likes: number
}

interface MemeShowcaseProps {
  memes: Meme[]
}

export default function MemeShowcase({ memes }: MemeShowcaseProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {memes.map((meme, index) => (
        <MemeCard key={index} meme={meme} delay={index * 0.1} rotation={((index % 3) - 1) * 1.5} />
      ))}
    </div>
  )
}

interface MemeCardProps {
  meme: Meme
  delay: number
  rotation: number
}

function MemeCard({ meme, delay, rotation }: MemeCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [hasLiked, setHasLiked] = useState(false)
  const [likes, setLikes] = useState(meme.likes)

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setHasLiked(!hasLiked)
  }

  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
      style={{ transform: `rotate(${rotation}deg)` }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={meme.imageUrl}
          alt={meme.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{meme.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{meme.description}</p>
        <div className="flex justify-between items-center">
          <button
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={handleLike}
          >
            <Heart className={`h-5 w-5 ${hasLiked ? "fill-red-500 text-red-500" : ""}`} />
            <span>{likes}</span>
          </button>
          <span className="text-sm text-gray-400">IMPHNEN</span>
        </div>
      </div>
    </motion.div>
  )
}
