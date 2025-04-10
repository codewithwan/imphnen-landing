"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"

export default function LazyWaifu() {
  const [isVisible, setIsVisible] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    // Delay the appearance of the waifu for a more subtle effect
    const timer = setTimeout(() => {
      setIsVisible(true)
      controls.start({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [controls])

  const handleClick = () => {
    setShowMessage(true)

    // Animate the waifu on click
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 0.5 },
    })

    setTimeout(() => {
      setShowMessage(false)
    }, 3000)
  }

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={controls}
      className="absolute bottom-0 right-0 h-[350px] w-[200px] cursor-pointer rotate-2"
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-blue-200 to-transparent opacity-50 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 3,
          ease: "easeInOut",
        }}
      />
      <div className="absolute bottom-0 right-0 w-full h-full flex items-end justify-center">
        <div className="w-40 h-64 bg-blue-100 rounded-t-full relative overflow-hidden border border-blue-200 -rotate-3">
          <div className="absolute inset-0 flex items-center justify-center text-blue-300 font-bold text-lg opacity-30">
            Waifu
          </div>
          <motion.div
            className="absolute top-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-200 rounded-full border border-blue-300"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              ease: "easeInOut",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-blue-200 border-t border-blue-300" />
        </div>
      </div>

      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg text-center min-w-[200px] border border-blue-200 rotate-1"
          >
            <p className="font-medium text-blue-600">Udah ngoding belum?</p>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r border-b border-blue-200 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
