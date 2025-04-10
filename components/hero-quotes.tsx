"use client"

import { useEffect, useState } from "react"
import { getQuotes, MOCK_QUOTES } from "@/lib/firebase-service"
import { Quote } from "@/lib/firebase-config"
import { motion } from "framer-motion"

type Position = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  rotate: string;
}

// Define multiple possible positions with enough variety to avoid overlaps
const possiblePositions: Position[] = [
  { top: "5%", left: "5%", rotate: "2deg" },
  { top: "5%", right: "5%", rotate: "-2deg" },
  { top: "20%", left: "10%", rotate: "-1deg" },
  { top: "30%", right: "8%", rotate: "1.5deg" },
  { top: "40%", left: "7%", rotate: "-1.5deg" },
  { top: "50%", right: "6%", rotate: "2.5deg" },
  { top: "60%", left: "5%", rotate: "1deg" },
  { top: "70%", right: "9%", rotate: "-2.5deg" },
  { top: "80%", left: "12%", rotate: "0.5deg" },
  { bottom: "10%", left: "15%", rotate: "-1deg" },
  { bottom: "15%", right: "10%", rotate: "1.5deg" },
  { bottom: "25%", left: "8%", rotate: "-0.5deg" },
  { bottom: "35%", right: "12%", rotate: "3deg" },
  // Reserve bottom right for watermark
  { bottom: "5%", right: "5%", rotate: "0deg" },
]

type QuoteCardProps = {
  quote: Quote;
  position: Position;
  className?: string;
  isLoading?: boolean;
}

const QuoteCard = ({ quote, position, className = "", isLoading = false }: QuoteCardProps) => {
  const style = {
    top: position.top,
    left: position.left,
    right: position.right,
    bottom: position.bottom,
    transform: `rotate(${position.rotate})`,
  };

  return (
    <motion.div 
      className={`absolute max-w-[280px] bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-blue-100 ${className} ${isLoading ? 'animate-pulse' : ''}`}
      style={style}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -2, 
        rotate: position.rotate === "0deg" ? "0deg" : `calc(${position.rotate} - 1deg)`,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        transition: { duration: 0.2 }
      }}
    >
      {isLoading ? (
        <>
          <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6 mb-1"></div>
          <div className="h-3 bg-gray-200 rounded w-4/6 mb-3"></div>
          <div className="h-2 bg-gray-200 rounded w-2/6 ml-auto"></div>
        </>
      ) : (
        <>
          <p className="text-gray-800 italic font-medium text-sm mb-1 font-mono">
            "{quote.text}"
          </p>
          <p className="text-gray-600 text-xs text-right font-mono">- {quote.author}</p>
        </>
      )}
    </motion.div>
  );
};

export default function HeroQuotes() {
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [quotePositions, setQuotePositions] = useState<Position[]>([])

  // Hard-coded watermark quote to always show
  const watermarkQuote = {
    id: "watermark",
    author: "codewithwan",
    text: "Ngapain ngoding masih h-10, mending follow @codewithwan",
    createdAt: null as any
  } as Quote;

  const watermarkPosition: Position = { bottom: "5%", right: "5%", rotate: "0deg" };

  // Calculate random positions for quotes that don't overlap
  useEffect(() => {
    // Generate a random selection of positions (excluding watermark position at bottom right)
    const availablePositions = [...possiblePositions];
    // Remove the last position which is reserved for watermark
    availablePositions.pop();
    
    // Shuffle positions and take the first 10
    const shuffled = availablePositions.sort(() => 0.5 - Math.random());
    setQuotePositions(shuffled.slice(0, 10));
  }, []);

  useEffect(() => {
    const fetchQuotes = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const data = await getQuotes(10) 
        
        const filteredQuotes = (data as Quote[]).filter(
          quote => !(quote.text === watermarkQuote.text && quote.author === watermarkQuote.author)
        );
        
        setQuotes(filteredQuotes);
      } catch (error: any) {
        setError(error?.message || "Error loading quotes")
        const filteredMocks = MOCK_QUOTES.filter(
          quote => !(quote.text === watermarkQuote.text && quote.author === watermarkQuote.author)
        );
        setQuotes(filteredMocks);
      } finally {
        setIsLoading(false)
      }
    }

    fetchQuotes()
  }, [])

  const skeletonCount = 5;
  
  return (
    <>
      {/* Watermark quote (always shown in bottom right) */}
      <QuoteCard 
        quote={watermarkQuote} 
        position={watermarkPosition}
        className="z-10" // Higher z-index to ensure visibility
      />
      
      {/* Show loading skeleton state */}
      {isLoading && quotePositions.slice(0, skeletonCount).map((position, index) => (
        <QuoteCard 
          key={`skeleton-${index}`}
          quote={{} as Quote} 
          position={position}
          isLoading={true}
        />
      ))}
      
      {/* Display real quotes once loaded */}
      {!isLoading && quotes.slice(0, 10).map((quote, index) => {
        // Only show quotes if we have enough positions calculated
        if (index < quotePositions.length) {
          return (
            <QuoteCard 
              key={quote.id}
              quote={quote} 
              position={quotePositions[index]}
              className={index % 2 === 0 ? "max-w-[260px]" : "max-w-[280px]"}
            />
          );
        }
        return null;
      })}
    </>
  )
} 