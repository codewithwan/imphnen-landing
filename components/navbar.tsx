"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sparkles, Star } from "lucide-react"
import ChangingSlogan from "./changing-slogan"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-white/85 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs transition-transform duration-300 group-hover:scale-110 rotate-[3deg] font-mono relative overflow-hidden">
              {`</>`}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
            </div>
            <span className="font-bold text-xl hidden sm:inline-block relative overflow-hidden font-mono">
              <span className="inline-block group-hover:-translate-y-full transition-transform duration-300">
                IMPHNEN
              </span>
              <span className="absolute top-0 left-0 inline-block translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                IMPHNEN
              </span>
            </span>
          </Link>

          <ChangingSlogan />

          <nav className="hidden md:flex items-center gap-6 font-mono">
            <NavLink href="#about" className="group">
              <Star className="inline-block w-3 h-3 mr-1 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              about()<span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">;</span>
            </NavLink>
            <NavLink href="#products" className="-rotate-[1.5deg] group">
              <Star className="inline-block w-3 h-3 mr-1 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              products()<span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">;</span>
            </NavLink>
            <NavLink href="#features" className="rotate-[1.5deg] group">
              <Star className="inline-block w-3 h-3 mr-1 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              features()<span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">;</span>
            </NavLink>
            <NavLink href="#join" className="-rotate-[1deg] group">
              <Star className="inline-block w-3 h-3 mr-1 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              join()<span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">;</span>
            </NavLink>
            <NavLink href="https://www.facebook.com/groups/programmerhandal" className="rotate-[1deg] group" target="_blank" rel="noopener noreferrer">
              <Star className="inline-block w-3 h-3 mr-1 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              facebook()<span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">;</span>
            </NavLink>
            <NavLink href="https://discord.gg/W4XyRAmPSD" className="-rotate-[1.5deg] group" target="_blank" rel="noopener noreferrer">
              <Star className="inline-block w-3 h-3 mr-1 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              discord()<span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">;</span>
            </NavLink>
          </nav>

          <button
            className="md:hidden text-gray-700 p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col md:hidden">
          <div className="flex justify-between items-center p-4 border-b">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs rotate-[3deg] font-mono">
                {`</>`}
              </div>
              <span className="font-bold text-xl font-mono bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">IMPHNEN</span>
            </Link>
            <button
              className="text-gray-700 p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col p-4 gap-6 font-mono">
            <MobileNavLink href="#about" onClick={() => setIsOpen(false)} className="text-lg">
              <Sparkles className="inline-block w-4 h-4 mr-2 text-blue-500" />
              about()<span className="text-blue-500">;</span>
            </MobileNavLink>
            <MobileNavLink href="#products" onClick={() => setIsOpen(false)} className="text-lg rotate-[1deg]">
              <Sparkles className="inline-block w-4 h-4 mr-2 text-blue-500" />
              products()<span className="text-blue-500">;</span>
            </MobileNavLink>
            <MobileNavLink href="#features" onClick={() => setIsOpen(false)} className="text-lg -rotate-[1deg]">
              <Sparkles className="inline-block w-4 h-4 mr-2 text-blue-500" />
              features()<span className="text-blue-500">;</span>
            </MobileNavLink>
            <MobileNavLink href="#join" onClick={() => setIsOpen(false)} className="text-lg rotate-[0.5deg]">
              <Sparkles className="inline-block w-4 h-4 mr-2 text-blue-500" />
              join()<span className="text-blue-500">;</span>
            </MobileNavLink>
            <MobileNavLink href="https://www.facebook.com/groups/programmerhandal" onClick={() => setIsOpen(false)} className="text-lg -rotate-[0.5deg]" target="_blank" rel="noopener noreferrer">
              <Sparkles className="inline-block w-4 h-4 mr-2 text-blue-500" />
              facebook()<span className="text-blue-500">;</span>
            </MobileNavLink>
            <MobileNavLink href="https://discord.gg/W4XyRAmPSD" onClick={() => setIsOpen(false)} className="text-lg rotate-[1deg]" target="_blank" rel="noopener noreferrer">
              <Sparkles className="inline-block w-4 h-4 mr-2 text-blue-500" />
              discord()<span className="text-blue-500">;</span>
            </MobileNavLink>
          </div>
          <div className="mt-auto p-4 text-center text-sm text-gray-500 font-mono border-t">
            <p className="rotate-[1deg]">"Life is too short to not procrastinate"</p>
            <p className="-rotate-[1deg] mt-2 text-xs">- Lazy Programmer-san</p>
          </div>
        </div>
      )}
    </>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
}

function NavLink({ href, children, className = "", target, rel }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-gray-700 hover:text-blue-600 transition-colors relative group/link ${className}`}
      target={target}
      rel={rel}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover/link:w-full transition-all duration-300"></span>
    </Link>
  )
}

interface MobileNavLinkProps {
  href: string
  children: React.ReactNode
  onClick: () => void
  className?: string
  target?: string
  rel?: string
}

function MobileNavLink({ href, children, onClick, className = "", target, rel }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-gray-700 hover:text-blue-600 transition-colors relative group ${className}`}
      target={target}
      rel={rel}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
    </Link>
  )
}
