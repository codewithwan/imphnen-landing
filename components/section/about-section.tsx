"use client"

import { Sparkles, Users, MessageSquare, Github, Bed, Clock } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import AnimatedCounter from "@/components/animated-counter"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 relative bg-white -rotate-[0.8deg] my-12 border-y border-blue-100">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="container relative z-10 rotate-[0.8deg]">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center rounded-full border border-blue-200 px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 mb-4 rotate-[2deg] font-mono shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default">
              <Sparkles className="mr-2 h-4 w-4 animate-ping animate-duration-[4000ms]" />
              <span className="group relative">
                about.us()
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 font-mono relative">
              Komunitas Programmer
              <span className="text-blue-600 -rotate-[2deg] inline-block transform hover:rotate-0 transition-transform ml-2 relative">
                {`<Enggan />`}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-300"></div>
              </span>
              <div className="absolute -top-6 right-4 text-xs text-gray-400 rotate-[5deg] font-mono opacity-70">npm uninstall motivation</div>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-600 ml-4 font-mono relative">
              <span className="relative">
                IMPHNEN adalah tempat berkumpulnya para programmer yang punya mimpi besar tapi malas eksekusi. Kami
                berbagi tips, alasan tidak ngoding, dan saling mendukung untuk tetap merasa seperti programmer tanpa
                perlu ngoding.
                <span className="absolute -bottom-1 left-1/4 w-1/2 h-0.5 bg-blue-100"></span>
              </span>
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all rotate-[1.5deg] hover:rotate-[0.5deg] hover:-translate-y-1 group">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 -rotate-[4deg] group-hover:rotate-[0deg] transition-transform">
                <Users className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold mb-2 flex items-center font-mono">
                <AnimatedCounter value={168} duration={2} />
                <span className="relative">
                  k+ Members
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-500"></span>
                </span>
              </h3>
              <p className="text-gray-600 font-mono relative">
                Bergabunglah dengan ratusan ribu programmer yang enggan ngoding namun tetap ingin disebut
                programmer.
                <Clock className="absolute -bottom-2 -right-2 h-5 w-5 text-gray-300 opacity-50 rotate-[10deg]" />
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all -rotate-[2deg] translate-y-2 hover:rotate-[-0.5deg] hover:-translate-y-1 group">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 rotate-[5deg] group-hover:rotate-[0deg] transition-transform">
                <MessageSquare className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold mb-2 flex items-center font-mono">
                <AnimatedCounter value={42} duration={2} />
                <span className="relative">
                  k+ Excuses
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-500"></span>
                </span>
              </h3>
              <p className="text-gray-600 font-mono relative">
                Koleksi alasan kreatif kenapa tidak bisa ngoding hari ini. "Harus cek notifikasi fesnuk" adalah
                favorit.
                <Clock className="absolute -bottom-2 -right-2 h-5 w-5 text-gray-300 opacity-50 rotate-[-10deg]" />
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all rotate-[3deg] translate-y-1 hover:rotate-[1deg] hover:-translate-y-1 group">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 -rotate-[8deg] group-hover:rotate-[0deg] transition-transform">
                <Github className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold mb-2 flex items-center font-mono">
                <AnimatedCounter value={0} duration={2} />
                <span className="relative">
                  Commits
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-500"></span>
                </span>
                <span className="ml-2 text-xs text-gray-400 italic">(achievement unlocked!)</span>
              </h3>
              <p className="text-gray-600 font-mono relative">
                Karena kami enggan ngoding, repository kami tetap bersih tanpa commit apapun. Prestasi yang
                membanggakan!
                <Bed className="absolute -bottom-2 -right-2 h-5 w-5 text-gray-300 opacity-50 rotate-[8deg]" />
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
} 