"use client"

import { useEffect } from "react"
import { app, isFirebaseConfigured } from "@/lib/firebase-config"
import { getAnalytics } from "firebase/analytics"

export default function FirebaseProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Firebase Analytics only in production and client-side
    if (typeof window !== "undefined" && isFirebaseConfigured && app) {
      try {
        if (process.env.NODE_ENV === "production") {
          getAnalytics(app)
          console.log("Firebase Analytics initialized")
        }
      } catch (error) {
        console.error("Firebase Analytics initialization error:", error)
      }
    }
  }, [])

  return <>{children}</>
} 