"use client"

import { Sparkles } from "lucide-react"
import Link from "next/link"
import ScrollReveal from "@/components/scroll-reveal"

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="absolute -top-10 right-0 w-60 h-60 bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-xl opacity-60"></div>
      <div className="absolute -bottom-10 left-0 w-60 h-60 bg-gradient-to-tr from-blue-50 to-transparent rounded-full blur-xl opacity-60"></div>
      
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center rounded-full border border-blue-200 px-3 py-1 text-sm font-medium text-blue-600 bg-gradient-to-r from-blue-50 via-white to-blue-50 mb-4 rotate-[2deg] hover:rotate-0 transition-transform font-mono shadow-sm">
              <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
              <span className="group relative">
                gallery.meetups.filter(noCode)
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 font-mono relative">
              Galeri Meet Up Programmer
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 rotate-[2deg] inline-block transform hover:rotate-[-1deg] transition-transform ml-2">{`<Enggan />`}</span>
              <div className="absolute -top-6 right-10 text-xs text-gray-400 rotate-[-3deg] font-mono opacity-70">npm run scroll-fesnuk</div>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-600 ml-4 font-mono relative bg-white/70 p-2 rounded-md inline-block rotate-[1deg] shadow-sm hover:rotate-0 transition-transform backdrop-blur-sm">
              Dokumentasi pertemuan komunitas yang membuktikan programmer malas juga bisa keluar rumah
              <span className="block mt-1 text-xs text-gray-400">(untuk nongkrong, bukan coding)</span>
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ScrollReveal delay={0.1}>
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 rotate-[1deg] hover:rotate-0">
              <div className="relative aspect-[4/3] bg-gradient-to-b from-blue-50 to-white">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=300&width=400&text=Coffee+%26+No+Code')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-bold text-lg mb-1 font-mono">Coffee & No Code Meetup</h3>
                  <p className="text-sm opacity-90 font-mono">Jakarta, Feb 2025</p>
                </div>
                <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-mono shadow-md rotate-[2deg]">
                  0 lines of code written
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 -rotate-[1.5deg] hover:rotate-0">
              <div className="relative aspect-[4/3] bg-gradient-to-b from-blue-50 to-white">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=300&width=400&text=Hackathon+Dropout')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-bold text-lg mb-1 font-mono">Hackathon Dropout Party</h3>
                  <p className="text-sm opacity-90 font-mono">Bandung, Mar 2025</p>
                </div>
                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-mono shadow-md rotate-[2deg]">
                  attendance: 2 hours only
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 rotate-[2deg] hover:rotate-0">
              <div className="relative aspect-[4/3] bg-gradient-to-b from-blue-50 to-white">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=300&width=400&text=Debugging+Workshop')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-bold text-lg mb-1 font-mono">Debugging Workshop</h3>
                  <p className="text-sm opacity-90 font-mono">Surabaya, Apr 2025</p>
                </div>
                <div className="absolute top-3 right-3 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-mono shadow-md rotate-[2deg]">
                  mostly just complaining
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 -rotate-[1deg] hover:rotate-0">
              <div className="relative aspect-[4/3] bg-gradient-to-b from-blue-50 to-white">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=300&width=400&text=Laptop+Sticker+Exchange')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-bold text-lg mb-1 font-mono">Laptop Sticker Exchange</h3>
                  <p className="text-sm opacity-90 font-mono">Yogyakarta, May 2025</p>
                </div>
                <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-mono shadow-md rotate-[2deg]">
                  100% attendance
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 rotate-[1.5deg] hover:rotate-0">
              <div className="relative aspect-[4/3] bg-gradient-to-b from-blue-50 to-white">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=300&width=400&text=GitHub+Green+Square+Party')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-bold text-lg mb-1 font-mono">GitHub Green Square Party</h3>
                  <p className="text-sm opacity-90 font-mono">Bali, Jun 2025</p>
                </div>
                <div className="absolute top-3 right-3 bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-mono shadow-md rotate-[2deg]">
                  commit: README.md only
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 -rotate-[2deg] hover:rotate-0">
              <div className="relative aspect-[4/3] bg-gradient-to-b from-blue-50 to-white">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=300&width=400&text=Excuse+Generator+Weekend')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-bold text-lg mb-1 font-mono">Excuse Generator Weekend</h3>
                  <p className="text-sm opacity-90 font-mono">Medan, Jul 2025</p>
                </div>
                <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-mono shadow-md rotate-[2deg]">
                  42 new excuses created
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16 text-center">
          <ScrollReveal delay={0.7}>
            <div className="inline-block bg-white rounded-lg shadow-md border border-blue-100 p-6 rotate-[1deg] hover:rotate-0 transition-transform hover:shadow-lg">
              <p className="text-gray-600 font-mono mb-4">
                Ingin menghadiri meetup IMPHNEN berikutnya?
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="#" className="inline-flex items-center rounded-md bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100 hover:text-blue-800 transform hover:-translate-y-1 transition-all group">
                  <div className="mr-2 h-4 w-4 rounded-full bg-blue-200 group-hover:bg-blue-300 transition-colors"></div>
                  <span className="font-mono">Lihat Jadwal</span>
                </Link>
                <Link href="#" className="inline-flex items-center rounded-md bg-white border border-blue-200 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50 hover:text-blue-800 transform hover:-translate-y-1 transition-all group">
                  <div className="mr-2 h-4 w-4 rounded-full bg-blue-200 group-hover:bg-blue-300 transition-colors"></div>
                  <span className="font-mono">Laporkan Kehadiran</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
} 