"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

interface MemeCardProps {
  title: string
  description: string
  imageUrl: string
}

export default function MemeCard({ title, description, imageUrl }: MemeCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100))
  const [hasLiked, setHasLiked] = useState(false)

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setHasLiked(!hasLiked)
  }

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[3/2]">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm" onClick={handleLike}>
          <Heart className={`mr-2 h-4 w-4 ${hasLiked ? "fill-red-500 text-red-500" : ""}`} />
          <span>{likes} likes</span>
        </Button>
        <Button variant="outline" size="sm">
          Lihat Detail
        </Button>
      </CardFooter>
    </Card>
  )
}
