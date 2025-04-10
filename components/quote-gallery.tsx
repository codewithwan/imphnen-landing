"use client"

import { useEffect, useState } from "react"
import { getQuotes, MOCK_QUOTES } from "@/lib/firebase-service"
import { Quote as FirebaseQuote } from "@/lib/firebase-config"
import { Sparkles } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

type Quote = FirebaseQuote;

export default function QuoteGallery() {
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Define watermark quote to filter
  const watermarkQuote = {
    author: "codewithwan",
    text: "Ngapain ngoding masih h-10, mending follow @codewithwan"
  };

  useEffect(() => {
    const fetchQuotes = async () => {
      setIsLoading(true)
      setError(null)
      try {
        // Get 10 most recent quotes only
        const data = await getQuotes(10)

        // Filter out ONLY the exact watermark quote, not all quotes from the author
        const filteredQuotes = (data as Quote[]).filter(
          quote => !(quote.text === watermarkQuote.text && quote.author === watermarkQuote.author)
        );

        // Check if we have any quotes after filtering
        if (filteredQuotes.length === 0) {
          // Also filter the mock quotes to remove only the exact watermark
          const filteredMocks = MOCK_QUOTES.filter(
            quote => !(quote.text === watermarkQuote.text && quote.author === watermarkQuote.author)
          );
          // Only take 10 mock quotes
          setQuotes(filteredMocks.slice(0, 10) as Quote[]);
        } else {
          setQuotes(filteredQuotes);
        }
      } catch (error) {
        console.error("Error fetching quotes:", error)
        // Use mock quotes as fallback, but filter out only exact watermark
        const filteredMocks = MOCK_QUOTES.filter(
          quote => !(quote.text === watermarkQuote.text && quote.author === watermarkQuote.author)
        );
        // Only take 10 mock quotes
        setQuotes(filteredMocks.slice(0, 10) as Quote[]);
        setError("Menggunakan quotes contoh karena terjadi error koneksi.");
      } finally {
        setIsLoading(false)
      }
    }

    fetchQuotes()
  }, [])

  return (
    <div className="py-8 px-4 md:px-6">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center rounded-full border border-blue-200 px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 mb-4 rotate-[1deg] font-mono shadow-sm">
              <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
              <span className="group relative">
                quotes.collection()
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 font-mono">
              {"<KoleksiQuoteProgrammerMalas />"}
            </h2>
            <p className="text-gray-600 font-mono">
              10 Quote terbaru dari programmer-programmer malas<br />
              <span className="rotate-[0.5deg] inline-block">yang berhasil lolos moderasi.</span>
            </p>
          </div>

          {isLoading ? (
            <div className="flex flex-col justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
              <p className="text-gray-600 font-mono">Sedang memuat quotes...</p>
            </div>
          ) : error ? (
            <div className="text-center py-10 bg-red-50 rounded-lg border border-dashed border-red-200">
              <p className="text-red-600 font-mono">{error}</p>
              <p className="text-gray-600 font-mono mt-2">Coba refresh halaman atau coba lagi nanti.</p>
            </div>
          ) : quotes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quotes.map((quote) => (
                <div
                  key={quote.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full"></div>
                  <blockquote className="relative z-10">
                    <p className="text-gray-800 mb-4 font-mono">"{quote.text}"</p>
                    <footer className="text-sm text-gray-600 font-semibold font-mono">
                      — {quote.author}
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-gray-50 rounded-lg border border-dashed border-gray-200">
              <p className="text-gray-600 font-mono">Belum ada quote yang disubmit.</p>
              <p className="text-gray-600 font-mono mt-2">Jadilah yang pertama dengan mengisi form di bawah!</p>
            </div>
          )}
        </div>
      </ScrollReveal>
    </div>
  )
} 