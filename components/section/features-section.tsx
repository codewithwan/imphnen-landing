"use client"

import { Zap, Laugh, Lightbulb, Users, Palette, Heart } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import ChaoticFeatureCard from "@/components/chaotic-feature-card"

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 relative bg-blue-50 rotate-[0.5deg] my-12 border-y border-blue-100 overflow-hidden">
      <div className="absolute inset-0 bg-circuit-pattern opacity-[0.04] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="container relative z-10 -rotate-[0.5deg]">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center rounded-full border border-blue-200 px-3 py-1 text-sm font-medium text-blue-600 bg-white mb-4 -rotate-[2deg] hover:rotate-0 transition-transform font-mono shadow-sm">
              <Zap className="mr-2 h-4 w-4 animate-pulse" />
              <span className="group relative">
                activities.filter(noCode).map(fesnuk)
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 font-mono relative">
              Yang Kami Lakukan Selain
              <span className="text-blue-600 rotate-[2deg] inline-block transform hover:rotate-[-1deg] transition-transform ml-2">{`<Ngoding />`}</span>
              <div className="absolute -top-6 right-12 text-xs text-gray-500 rotate-[-3deg] font-mono opacity-70">yarn run hide-from-work-senpai</div>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-600 ml-3 font-mono relative bg-white/70 p-2 rounded-md inline-block rotate-[1deg] shadow-sm transform hover:rotate-0 transition-transform backdrop-blur-sm">
              Berbagai kegiatan keren yang kami lakukan untuk menghindari ngoding sambil tetap merasa seperti
              programmer profesional.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <ScrollReveal delay={0.1}>
            <ChaoticFeatureCard
              icon={<Laugh className="h-5 w-5" />}
              title="Fesnuk Meme of the Week"
              description="Voting meme programming paling kocak tiap minggu. Pemenang mendapat badge 'Meme Lord'."
              rotation={3.5}
              translateY={-8}
              translateX={12}
              color="blue"
              id={1}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <ChaoticFeatureCard
              icon={<Lightbulb className="h-5 w-5" />}
              title="Fesnuk Project Showcase"
              description="Pamer project yang 'akan dibuat' tapi terhalang marathon scrolling fesnuk. Konsep dan wireframe only."
              rotation={-2.8}
              translateY={18}
              translateX={-7}
              color="purple"
              id={2}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <ChaoticFeatureCard
              icon={<Zap className="h-5 w-5" />}
              title="Creative Alasan Generator"
              description="Generator alasan kenapa tidak ngoding hari ini. 'Perlu cek update fesnuk' adalah favorit."
              rotation={2.2}
              translateY={-15}
              translateX={5}
              color="green"
              id={3}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <ChaoticFeatureCard
              icon={<Users className="h-5 w-5" />}
              title="King JS vs King PHP"
              description="Debat sengit antara fans JavaScript dan PHP tanpa ada yang pernah menulis kode. JavaScript selalu menang!"
              rotation={-3.3}
              translateY={12}
              translateX={-14}
              color="orange"
              id={4}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <ChaoticFeatureCard
              icon={<Palette className="h-5 w-5" />}
              title="Scroll-scroll Developer"
              description="Generator nama-nama developer yang suka scroll fesnuk seperti 'Ngoding boleh, scroll fesnuk harus!'"
              rotation={2.7}
              translateY={-10}
              translateX={8}
              color="blue"
              id={5}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <ChaoticFeatureCard
              icon={<Heart className="h-5 w-5" />}
              title="Fesnuk Code Review"
              description="Code review via comments fesnuk yang selalu bilang 'Keren banget code kamu!' meski kodenya hancur."
              rotation={-2.5}
              translateY={14}
              translateX={-5}
              color="teal"
              id={6}
            />
          </ScrollReveal>
        </div>

        <div className="mt-16 max-w-lg mx-auto text-center">
          <ScrollReveal delay={0.7}>
            <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm rotate-[1.5deg] border border-blue-100">
              <blockquote className="text-gray-700 font-mono italic">
                "Menulis kode itu seperti scrolling fesnuk — terlihat menyenangkan di awal, lalu berakhir dengan membuang waktu berjam-jam tanpa hasil."
                <footer className="text-right text-sm text-gray-500 mt-2">— Fesnuk Addict Developer</footer>
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
} 