"use client"

import { useState, useEffect } from "react"
import { Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const slogans = [
  "while(coding) { procrastinate(); }",
  "function sleep() { return true; }",
  "git commit -m 'it works but idk why'",
  "const motivation = null;", 
  "npm uninstall productivity",
  "for(let i=0; i<Infinity; i++) { watchAnime(); }",
  "if(sad()) { sad().stop(); watchAnime(); }",
  "try { code(); } catch { sleep(); giveUp(); }",
  "import { success } from 'copy-paste'",
  "// TODO: Code someday",
  "const anime > const coding;",
  "function isSenpaiNoticing() { return false; }",
  "git push --force-with-lease-sama",
  "console.log('Yamete kudasai, bug-chan~');",
  "npm run away-from-responsibilities",
  "waifu.addEventListener('new', () => skipWork());",
  "while(1) { blame_others(); }",
  "typeof motivation === 'undefined'",
  "error: Semicolon-chan is missing again",
  "!important { bed-rest: always; }",
]

export default function ChangingSlogan() {
  const [currentSlogan, setCurrentSlogan] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hidden sm:flex items-center text-sm font-medium text-gray-600 rotate-[0.5deg] hover:rotate-[-0.5deg] transition-transform font-mono group">
      <Sparkles className="mr-2 h-4 w-4 text-blue-500 group-hover:text-blue-600 transition-colors" />
      <div className="h-5 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentSlogan}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute whitespace-nowrap"
          >
            {slogans[currentSlogan]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}
