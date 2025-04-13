"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"

export default function JoinSection() {
  return (
    <section id="join" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-noise-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full opacity-20 blur-3xl translate-y-1/3 -translate-x-1/3"></div>
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto bg-white rounded-lg border shadow-sm overflow-hidden rotate-[0.8deg] hover:rotate-[0.3deg] transition-transform hover:shadow-md group">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center -rotate-[1.5deg] group-hover:rotate-[-0.5deg] transition-transform">
                <h2 className="text-3xl font-bold tracking-tight mb-4 font-mono">
                  Join IMPHNEN
                  <span className="text-blue-600 rotate-[2deg] inline-block transform hover:rotate-0 transition-transform">.then(scrollFesnuk)</span>
                </h2>
                <p className="text-gray-600 mb-6 ml-2 font-mono border-l-2 border-blue-200 pl-3">
                  Bergabunglah dengan ratusan ribu programmer yang enggan ngoding. Berbagi meme, alasan tidak
                  ngoding karena scroll fesnuk, dan saling mendukung untuk tetap merasa profesional.
                </p>
                <div className="space-y-4 rotate-[1.5deg] hover:rotate-[0.5deg] transition-transform">
                  <Link href="https://discord.gg/W4XyRAmPSD" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-mono group relative overflow-hidden">
                      <span className="group-hover:translate-x-1 transition-transform inline-block">joinDiscord().then(sayHalo)</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </Button>
                  </Link>
                  <div className="h-2"></div>
                  <Link href="https://www.facebook.com/groups/programmerhandal" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-blue-300 text-blue-600 hover:bg-blue-50 -rotate-[1.5deg] hover:rotate-[-0.5deg] transition-transform font-mono group"
                    >
                      <span className="group-hover:-translate-y-0.5 transition-transform inline-block">joinFacebook().then(fesnuk)</span>
                      <div className="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-blue-200 scale-0 group-hover:scale-100 transition-transform origin-center"></div>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 md:p-12 flex items-center justify-center rotate-[0.5deg] group-hover:rotate-[0.2deg] transition-transform relative overflow-hidden">
                <div className="absolute inset-0 bg-circuit-pattern opacity-10 pointer-events-none"></div>
                <div className="text-white space-y-4 -rotate-[1deg] font-mono relative">
                  <h3 className="text-2xl font-bold">const benefits = {`{`}</h3>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-center group/item hover:-translate-y-0.5 transition-transform">
                      <div className="mr-2 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center text-white">
                        ✓
                      </div>
                      <span className="group-hover/item:text-blue-200 transition-colors">excuses: ['fesnuk scrolling', 'reels marathon'],</span>
                    </li>
                    <li className="flex items-center group/item hover:-translate-y-0.5 transition-transform">
                      <div className="mr-2 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center text-white">
                        ✓
                      </div>
                      <span className="group-hover/item:text-blue-200 transition-colors">productivity: null,</span>
                    </li>
                    <li className="flex items-center group/item hover:-translate-y-0.5 transition-transform">
                      <div className="mr-2 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center text-white">
                        ✓
                      </div>
                      <span className="group-hover/item:text-blue-200 transition-colors">friends: ['too many to count'],</span>
                    </li>
                    <li className="flex items-center group/item hover:-translate-y-0.5 transition-transform">
                      <div className="mr-2 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center text-white">
                        ✓
                      </div>
                      <span className="group-hover/item:text-blue-200 transition-colors">debugTime: new Date('never'),</span>
                    </li>
                    <li className="flex items-center group/item hover:-translate-y-0.5 transition-transform">
                      <div className="mr-2 h-5 w-5 rounded-full bg-white/20 flex items-center justify-center text-white">
                        ✓
                      </div>
                      <span className="group-hover/item:text-blue-200 transition-colors">fesnukTime: 'longer than git log'</span>
                    </li>
                  </ul>
                  <div>{`}`};</div>
                  <div className="mt-2 text-xs text-right opacity-70">// scroll terus...</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
} 