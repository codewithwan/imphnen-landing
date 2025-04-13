"use client"

import { Coffee, BarChart3, Github, Clock } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import { Zap } from "lucide-react"

export default function StatsSection() {
  return (
    <section id="stats" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="absolute -top-10 right-0 w-60 h-60 bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-xl opacity-60"></div>
      <div className="absolute -bottom-10 left-0 w-60 h-60 bg-gradient-to-tr from-blue-50 to-transparent rounded-full blur-xl opacity-60"></div>
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center rounded-full border border-blue-200 px-3 py-1 text-sm font-medium text-blue-600 bg-gradient-to-r from-blue-50 via-white to-blue-50 mb-4 rotate-[2deg] hover:rotate-0 transition-transform font-mono shadow-sm">
              <Zap className="mr-2 h-4 w-4 animate-pulse" />
              <span className="group relative">
                procrastination.statistics.analyze()
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 font-mono relative">
              Statistik Programmer
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 rotate-[2deg] inline-block transform hover:rotate-[-1deg] transition-transform ml-2">{`<Enggan />`}</span>
              <div className="absolute -top-6 right-10 text-xs text-gray-400 rotate-[-3deg] font-mono opacity-70">node data-analysis.js</div>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-600 ml-4 font-mono relative bg-white/70 p-2 rounded-md inline-block rotate-[1deg] shadow-sm hover:rotate-0 transition-transform backdrop-blur-sm">
              Data penggunaan waktu yang sangat akurat dari programmer profesional IMPHNEN.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal delay={0.3}>
            <div className="relative w-full aspect-square max-w-md mx-auto transform hover:scale-105 transition-transform">
              {/* Shadow below the circle */}
              <div className="absolute top-[5%] left-[5%] right-[5%] bottom-[5%] bg-blue-200/30 rounded-full blur-xl -z-10"></div>

              {/* Outer Circle with 3D effect */}
              <div className="absolute inset-0 rounded-full border-8 border-blue-100 animate-spin-slow shadow-lg" style={{
                background: "linear-gradient(135deg, #f0f7ff 0%, #e0efff 50%, #c0dfff 100%)",
              }}></div>

              {/* Inner Circle with Stats */}
              <div className="absolute inset-[10%] rounded-full bg-gradient-to-br from-white to-blue-50 border-4 border-blue-200 shadow-md flex items-center justify-center" style={{
                boxShadow: "inset 0 4px 10px rgba(0,0,0,0.05)"
              }}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 font-mono mb-2">Distribusi Waktu</h3>
                  <div className="space-y-2 text-left max-w-[80%] mx-auto">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono">Scrolling Fesnuk:</span>
                      <span className="text-blue-600 font-bold font-mono">68%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono">Setup Environment:</span>
                      <span className="text-blue-600 font-bold font-mono">12%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono">Watch Tutorials:</span>
                      <span className="text-blue-600 font-bold font-mono">11%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono">Googling Error:</span>
                      <span className="text-blue-600 font-bold font-mono">8%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono">Actual Coding:</span>
                      <span className="text-blue-600 font-bold font-mono">1%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative small circles with elevation */}
              <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full border-2 border-white shadow-md"></div>
              <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full border-2 border-white shadow-md"></div>
              <div className="absolute left-[5%] top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full border-2 border-white shadow-md"></div>
              <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full border-2 border-white shadow-md"></div>

              {/* Stat labels around circle with depth */}
              <div className="absolute top-[2%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-100 to-blue-50 px-3 py-1 rounded-full text-blue-600 text-xs font-mono shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
                Fesnuk Time
              </div>
              <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 translate-y-1/2 bg-gradient-to-r from-blue-100 to-blue-50 px-3 py-1 rounded-full text-blue-600 text-xs font-mono shadow-md hover:shadow-lg hover:translate-y-1 transition-all">
                Coding Time
              </div>
              <div className="absolute left-[2%] top-1/2 -translate-y-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-100 to-blue-50 px-3 py-1 rounded-full text-blue-600 text-xs font-mono shadow-md hover:shadow-lg hover:-translate-x-1 transition-all">
                Setup Time
              </div>
              <div className="absolute right-[2%] top-1/2 -translate-y-1/2 translate-x-1/2 bg-gradient-to-r from-blue-100 to-blue-50 px-3 py-1 rounded-full text-blue-600 text-xs font-mono shadow-md hover:shadow-lg hover:translate-x-1 transition-all">
                Tutorial Time
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg shadow-lg border border-blue-100 hover:shadow-xl transition-all rotate-[1deg] hover:rotate-0 transform hover:translate-y-[-4px]">
                <h3 className="text-xl font-bold mb-4 font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 flex items-center">
                  <Coffee className="mr-2 h-5 w-5 text-blue-500" />
                  Detail Konsumsi Kafein vs. Koding
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-mono text-gray-600">Kopi diminum</span>
                      <span className="text-sm font-mono text-blue-600">1,457 cangkir</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden shadow-inner">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full w-[95%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-mono text-gray-600">Lines of code written</span>
                      <span className="text-sm font-mono text-blue-600">143 baris</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden shadow-inner">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full w-[5%]"></div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-blue-50">
                    <div className="text-sm font-mono text-gray-500 italic">
                      Rasio: 10.19 cangkir kopi per baris kode
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg shadow-lg border border-blue-100 hover:shadow-xl transition-all -rotate-[0.8deg] hover:rotate-0 transform hover:translate-y-[-4px]">
                <h3 className="text-xl font-bold mb-4 font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 flex items-center">
                  <Github className="mr-2 h-5 w-5 text-blue-500" />
                  Github Activity Tracker
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-6 h-6 rounded-sm shadow-sm hover:shadow-md transition-all ${i === 7 || i === 21 ? 'bg-gradient-to-br from-blue-400 to-blue-500 transform hover:scale-110' :
                          i === 14 ? 'bg-gradient-to-br from-blue-300 to-blue-400 transform hover:scale-110' :
                            'bg-gray-200 hover:bg-gray-300'
                          } hover:scale-110 transition-transform`}
                        title={i === 7 || i === 21 || i === 14 ? 'Committed once!' : 'No activity'}
                      />
                    ))}
                  </div>
                  <div className="pt-2 border-t border-blue-50">
                    <div className="text-sm font-mono text-gray-500">
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">3</span> commits in the last month
                      <span className="text-xs block mt-1">
                        (All three were "Initial commit" or "Update README.md")
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg shadow-lg border border-blue-100 hover:shadow-xl transition-all rotate-[0.5deg] hover:rotate-0 transform hover:translate-y-[-4px]">
                <h3 className="text-xl font-bold mb-4 font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-blue-500" />
                  Project Completion Rate
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm font-mono">
                    <span>Project Ideas Generated:</span>
                    <span className="font-bold">247</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-mono">
                    <span>Project Repositories Created:</span>
                    <span className="font-bold">43</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-mono">
                    <span>Projects Actually Completed:</span>
                    <span className="font-bold text-red-500">0</span>
                  </div>
                  <div className="pt-2 border-t border-blue-50">
                    <div className="text-sm font-mono text-gray-500 italic">
                      Success Rate: <span className="text-red-500">0.00%</span> (but it's okay, there's always tomorrow!)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
} 