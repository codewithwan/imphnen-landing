"use client"

import { Calendar, Code, Users, ExternalLink } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function EventSection() {
  return (
    <section id="events" className="py-20 md:py-28 relative bg-gradient-to-b from-white to-blue-50">
      <div className="absolute inset-0 bg-[url('/pattern-kawaii.svg')] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-10 -left-10 w-60 h-60 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center rounded-full border border-blue-200 px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 mb-4 rotate-[2deg] hover:rotate-0 transition-transform font-mono shadow-sm">
              <Calendar className="mr-2 h-4 w-4 animate-pulse" />
              <span className="group relative">
                events.getMeetups()
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 font-mono relative">
              <span className="text-blue-600 -rotate-[2deg] inline-block transform hover:rotate-0 transition-transform">{`<Events />`}</span>
              <span className="relative"> Yang Selalu Ditunda
                <div className="absolute -bottom-1 left-1/4 w-1/2 h-0.5 bg-blue-200"></div>
              </span>
              <div className="absolute -top-6 right-10 text-xs text-gray-400 rotate-[4deg] font-mono opacity-70">
                npm run procrastinate
              </div>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-gray-600 font-mono relative -rotate-[1deg] transform hover:rotate-[0.5deg] transition-transform">
              Event komunitas yang kemungkinan akan dibatalkan karena <span className="line-through text-red-400">coding</span> <span className="text-red-500">scrolling</span> marathon.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ScrollReveal delay={0.3}>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all rotate-[1.5deg] hover:rotate-[0.5deg] hover:-translate-y-1 group">
              <div className="mb-4 flex justify-between items-start">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center -rotate-[4deg] group-hover:rotate-[0deg] transition-transform">
                  <Code className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-xs py-1 px-2 bg-gradient-to-r from-green-50 to-green-100 text-green-600 rounded-full font-mono shadow-sm">
                  #virtual
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-1 font-mono flex items-center">
                Webinar: "Gimana Cara Mulai Ngoding"
              </h3>
              
              <div className="flex items-center space-x-2 mb-3">
                <Calendar className="h-4 w-4 text-blue-500" />
                <span className="text-sm text-gray-500 font-mono">Selasa, 32 Nevermber 2024</span>
              </div>
              
              <div className="flex items-center space-x-2 mb-4">
                <Users className="h-4 w-4 text-blue-500" />
                <span className="text-sm text-gray-500 font-mono">4.2k tertarik, 12 akan datang</span>
              </div>
              
              <p className="text-gray-600 font-mono text-sm mb-6 relative border-l-2 border-blue-100 pl-3">
                Webinar untuk memotivasi programmer malas memulai ngoding. Atau minimal download IDE-nya dulu.
                <span className="block mt-2 italic text-gray-400">*Ada kemungkinan ditunda atau dibatalkan.</span>
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="text-xs py-1 px-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 rounded-full font-mono shadow-sm">
                    #motivation
                  </div>
                  <div className="text-xs py-1 px-2 bg-gradient-to-r from-yellow-50 to-yellow-100 text-yellow-600 rounded-full font-mono shadow-sm">
                    #someday
                  </div>
                </div>
                <Link href="#" className="block">
                  <div className="text-xs py-1 px-2 bg-gray-100 text-gray-600 rounded-full font-mono group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors shadow-sm group-hover:shadow-md">
                    Register →
                  </div>
                </Link>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all -rotate-[2deg] translate-y-2 hover:rotate-[-0.5deg] hover:-translate-y-1 group">
              <div className="mb-4 flex justify-between items-start">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center rotate-[6deg] group-hover:rotate-[0deg] transition-transform">
                  <Users className="h-6 w-6 text-purple-600 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-xs py-1 px-2 bg-gradient-to-r from-red-50 to-red-100 text-red-600 rounded-full font-mono shadow-sm">
                  #cancelled
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-1 font-mono flex items-center">
                Meetup: "Tutorial Hell Survivors"
              </h3>
              
              <div className="flex items-center space-x-2 mb-3">
                <Calendar className="h-4 w-4 text-purple-500" />
                <span className="text-sm text-gray-500 font-mono">Kemarin</span>
              </div>
              
              <div className="flex items-center space-x-2 mb-4">
                <Users className="h-4 w-4 text-purple-500" />
                <span className="text-sm text-gray-500 font-mono">520 tertarik, 0 datang</span>
              </div>
              
              <p className="text-gray-600 font-mono text-sm mb-6 relative border-l-2 border-purple-100 pl-3">
                Meetup untuk berbagi pengalaman terperangkap dalam tutorial hell tanpa pernah membuat proyek sendiri.
                <span className="block mt-2 italic text-gray-400">*Dibatalkan karena semua panitia sedang menonton tutorial.</span>
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="text-xs py-1 px-2 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-600 rounded-full font-mono shadow-sm">
                    #tutorial
                  </div>
                  <div className="text-xs py-1 px-2 bg-gradient-to-r from-red-50 to-red-100 text-red-600 rounded-full font-mono shadow-sm">
                    #procrastination
                  </div>
                </div>
                <Link href="#" className="block">
                  <div className="text-xs py-1 px-2 bg-gray-100 text-gray-600 rounded-full font-mono group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors shadow-sm group-hover:shadow-md">
                    Reschedule →
                  </div>
                </Link>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.5}>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all rotate-[3deg] translate-y-1 hover:rotate-[1deg] hover:-translate-y-1 group">
              <div className="mb-4 flex justify-between items-start">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center -rotate-[8deg] group-hover:rotate-[0deg] transition-transform">
                  <Calendar className="h-6 w-6 text-green-600 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-xs py-1 px-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 rounded-full font-mono shadow-sm">
                  #upcoming
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-1 font-mono flex items-center">
                Hackathon: "Coding Under Pressure"
              </h3>
              
              <div className="flex items-center space-x-2 mb-3">
                <Calendar className="h-4 w-4 text-green-500" />
                <span className="text-sm text-gray-500 font-mono">31 Februari 2025</span>
              </div>
              
              <div className="flex items-center space-x-2 mb-4">
                <Users className="h-4 w-4 text-green-500" />
                <span className="text-sm text-gray-500 font-mono">7.8k tertarik, ? akan datang</span>
              </div>
              
              <p className="text-gray-600 font-mono text-sm mb-6 relative border-l-2 border-green-100 pl-3">
                Hackathon 1 jam yang akan menghasilkan 0 baris kode tetapi banyak screenshot untuk media sosial.
                <span className="block mt-2 italic text-gray-400">*Pembukaan akan ditunda 3-5 jam untuk setup environment.</span>
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="text-xs py-1 px-2 bg-gradient-to-r from-green-50 to-green-100 text-green-600 rounded-full font-mono shadow-sm">
                    #hackathon
                  </div>
                  <div className="text-xs py-1 px-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 rounded-full font-mono shadow-sm">
                    #photoOp
                  </div>
                </div>
                <Link href="#" className="block">
                  <div className="text-xs py-1 px-2 bg-gray-100 text-gray-600 rounded-full font-mono group-hover:bg-green-100 group-hover:text-green-600 transition-colors shadow-sm group-hover:shadow-md">
                    Pre-register →
                  </div>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        <ScrollReveal delay={0.6}>
          <div className="mt-16 text-center">
            <Link href="https://www.facebook.com/groups/programmerhandal" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                className="border-blue-300 text-blue-600 hover:bg-blue-50 group font-mono relative shadow-sm hover:shadow-md"
              >
                <span className="group-hover:-translate-y-0.5 transition-transform inline-block">
                  semua.upcoming.events()
                </span>
                <ExternalLink className="ml-2 h-4 w-4 text-blue-500" />
                <div className="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-blue-200 scale-0 group-hover:scale-100 transition-transform origin-center"></div>
              </Button>
            </Link>
            <p className="text-xs text-gray-500 mt-2 font-mono italic">*Semua events mungkin akan ditunda atau dibatalkan tergantung mood dan scroll fesnuk.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
} 