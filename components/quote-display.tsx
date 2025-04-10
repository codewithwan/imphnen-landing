"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type Quote = {
  id: number
  author: string
  text: string
  title?: string
}

// Sample quotes data
const quotes: Quote[] = [
  {
    id: 1,
    author: "Sarah Chen",
    title: "Frontend Developer",
    text: "This platform completely transformed how I approach coding projects. The tools are intuitive and the community is incredibly supportive."
  },
  {
    id: 2,
    author: "Marcus Johnson",
    title: "Senior Engineer",
    text: "After trying countless development environments, I finally found one that matches my workflow perfectly. It's become my daily driver."
  },
  {
    id: 3,
    author: "Priya Sharma",
    title: "Full Stack Developer",
    text: "The performance is unmatched. My productivity has doubled since I started using this platform for all my projects."
  },
  {
    id: 4,
    author: "Alex Rodriguez",
    title: "Tech Lead",
    text: "My team adopted this tool last quarter and we've seen significant improvements in our development speed and code quality."
  }
]

export default function QuoteDisplay() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Auto rotate through quotes
  useEffect(() => {
    if (!autoplay) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [autoplay])

  const nextQuote = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length)
  }

  const prevQuote = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">What Our Community Says</h2>
      
      <div className="relative overflow-hidden p-1">
        {/* Quote Carousel */}
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-10"
            >
              <div className="mb-6">
                <div className="text-4xl text-blue-400 font-serif">"</div>
                <p className="text-lg text-gray-800 italic">
                  {quotes[currentIndex].text}
                </p>
                <div className="text-4xl text-blue-400 font-serif text-right">"</div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-lg">
                  {quotes[currentIndex].author.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{quotes[currentIndex].author}</p>
                  {quotes[currentIndex].title && (
                    <p className="text-gray-600 text-sm">{quotes[currentIndex].title}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setCurrentIndex(index)
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-blue-200'
                }`}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation buttons */}
          <button
            onClick={prevQuote}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-blue-700 hover:bg-white transition-colors duration-300"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextQuote}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-blue-700 hover:bg-white transition-colors duration-300"
            aria-label="Next quote"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
} 