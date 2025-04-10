"use client"

import { useEffect, useState } from "react"
import { getQuotes } from "@/lib/firebase-service"
import { isFirebaseConfigured } from "@/lib/firebase-config"

export default function FirebaseDebug() {
  const [status, setStatus] = useState<string>("Checking Firebase...")
  const [quotes, setQuotes] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check if environment variables are set
    const envVarsSet = !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY && 
                       !!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    
    if (!envVarsSet) {
      setStatus("ERROR: Environment variables not set")
      return
    }
    
    if (!isFirebaseConfigured) {
      setStatus("ERROR: Firebase not configured")
      return
    }
    
    setStatus("Fetching quotes...")
    
    // Try to fetch quotes
    const fetchQuotes = async () => {
      try {
        const data = await getQuotes(3)
        setQuotes(data)
        setStatus(`SUCCESS: Found ${data.length} quotes`)
      } catch (error: any) {
        console.error("Debug error:", error)
        setStatus("ERROR: Failed to fetch quotes")
        setError(error.message || "Unknown error")
      }
    }
    
    fetchQuotes()
  }, [])

  if (!process.env.NODE_ENV || process.env.NODE_ENV === "production") {
    return null // Don't show in production
  }

  return (
    <div className="fixed bottom-0 right-0 bg-slate-800 text-white p-4 m-4 rounded-lg z-50 max-w-md text-xs opacity-75 hover:opacity-100 transition-opacity">
      <h3 className="font-bold mb-2">Firebase Debug</h3>
      <div className={`mb-2 ${status.includes("ERROR") ? "text-red-400" : status.includes("SUCCESS") ? "text-green-400" : "text-yellow-400"}`}>
        Status: {status}
      </div>
      {error && <div className="text-red-400 mb-2">Error: {error}</div>}
      {quotes.length > 0 ? (
        <div>
          <div className="mb-1">Recent quotes:</div>
          <ul className="pl-4 list-disc">
            {quotes.slice(0, 3).map((quote: any, i) => (
              <li key={i}>{quote.author}: "{quote.text && quote.text.substring(0, 30)}..."</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No quotes found</div>
      )}
      <div className="mt-2 text-slate-400">
        API Key: {process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? "✓ Set" : "✗ Missing"}
        <br />
        Project ID: {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ? "✓ Set" : "✗ Missing"}
      </div>
    </div>
  )
} 