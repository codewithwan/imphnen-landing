"use client"

import { useState, useEffect } from "react"
import { getQuotes, addQuote } from "@/lib/firebase-service"
import { isFirebaseConfigured } from "@/lib/firebase-config"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function DebugPage() {
  const [status, setStatus] = useState<string>("Checking Firebase...")
  const [quotes, setQuotes] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)
  const [envVars, setEnvVars] = useState<Record<string, string | undefined>>({})
  const [formData, setFormData] = useState({
    author: 'Test User',
    text: 'This is a test quote from the debug page.',
  })

  useEffect(() => {
    // Collect environment variables
    setEnvVars({
      NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    })
    
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
    fetchQuotes()
  }, [])

  const fetchQuotes = async () => {
    try {
      const data = await getQuotes(10)
      setQuotes(data)
      setStatus(`SUCCESS: Found ${data.length} quotes`)
    } catch (error: any) {
      console.error("Debug error:", error)
      setStatus("ERROR: Failed to fetch quotes")
      setError(error.message || "Unknown error")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      setStatus("Adding test quote...")
      const result = await addQuote(formData.author, formData.text)
      setStatus(`SUCCESS: Added quote with ID: ${result}`)
      await fetchQuotes() // Refresh quotes
    } catch (error: any) {
      console.error("Error adding quote:", error)
      setStatus("ERROR: Failed to add quote")
      setError(error.message || "Unknown error")
    }
  }

  return (
    <div className="container mx-auto p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Firebase Debug Page</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Firebase Status</h2>
          <div className={`mb-4 p-3 rounded ${status.includes("ERROR") ? "bg-red-100 text-red-800" : status.includes("SUCCESS") ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
            {status}
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-800 rounded">
              Error: {error}
            </div>
          )}
          
          <h3 className="font-bold mb-2">Environment Variables</h3>
          <div className="bg-gray-100 p-3 rounded mb-4 font-mono text-sm overflow-auto max-h-48">
            {Object.entries(envVars).map(([key, value]) => (
              <div key={key} className="mb-1">
                <span className="font-bold">{key}:</span> {value ? `✓ Set (${value.substring(0, 5)}...)` : '✗ Missing'}
              </div>
            ))}
          </div>
          
          <Button onClick={fetchQuotes} className="w-full">
            Refresh Quotes
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Add Test Quote</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Author</label>
              <Input
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Quote Text</label>
              <Textarea
                name="text"
                value={formData.text}
                onChange={handleChange}
                rows={3}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Add Test Quote
            </Button>
          </form>
        </div>
      </div>
      
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Retrieved Quotes ({quotes.length})</h2>
        {quotes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quotes.map((quote, index) => (
              <div key={index} className="border rounded p-4">
                <div className="font-bold">{quote.author}</div>
                <div className="italic">"{quote.text}"</div>
                <div className="text-xs text-gray-500 mt-2">
                  ID: {quote.id}
                  <br />
                  Created: {quote.createdAt?.toDate?.() ? quote.createdAt.toDate().toLocaleString() : 'Unknown date'}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No quotes found. Add a test quote to get started.
          </div>
        )}
      </div>
    </div>
  )
} 