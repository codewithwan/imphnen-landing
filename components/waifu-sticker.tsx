"use client"

import { useState } from "react"
import Image from "next/image"

interface WaifuStickerProps {
  className?: string
}

export default function WaifuSticker({ className }: WaifuStickerProps) {
  const [showMessage, setShowMessage] = useState(false)

  const handleClick = () => {
    setShowMessage(true)

    setTimeout(() => {
      setShowMessage(false)
    }, 3000)
  }

  return (
    <div className={`relative cursor-pointer ${className}`} onClick={handleClick}>
      <Image src="/waifu.png" alt="Waifu Programmer" width={400} height={400} className="object-contain" />

      {showMessage && (
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg text-center min-w-[200px] animate-bounce">
          <p className="font-medium text-blue-500">Udah ngoding belum?</p>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
        </div>
      )}
    </div>
  )
}
