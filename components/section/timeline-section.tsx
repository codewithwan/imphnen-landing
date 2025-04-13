"use client"

import {
  Clock10, Clock, Coffee, Pizza, Pencil,
  BookOpen, Gamepad2, Popcorn, CupSoda,
  Lightbulb, Palette, Bed, Timer, Cpu
} from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export default function TimelineSection() {
  return (
    <section id="procrastination" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/20 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('/pattern-kawaii.svg')] opacity-[0.02] pointer-events-none"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-blue-50 rounded-full opacity-30 blur-3xl animate-pulse animate-duration-4000ms"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-50 rounded-full opacity-30 blur-3xl animate-pulse animate-duration-8000ms"></div>
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center rounded-full border border-blue-200 px-3 py-1 text-sm font-medium text-blue-600 bg-gradient-to-r from-blue-50 via-white to-blue-50 mb-4 rotate-[1deg] hover:rotate-[-1deg] transition-transform font-mono shadow-sm">
              <Clock10 className="mr-2 h-4 w-4 animate-spin animate-duration-[8000ms]" />
              <span className="group relative">
                procrastination.timeline(today)
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 font-mono relative">
              Jadwal Seharian Programmer
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 rotate-[2deg] inline-block transform hover:rotate-[-1deg] transition-transform ml-2">{`<Asik />`}</span>
              <div className="absolute -top-6 left-10 text-xs text-gray-400 rotate-[-4deg] font-mono opacity-70">{`import { productivity } from "nowhere";`}</div>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-600 ml-3 font-mono relative bg-white/70 p-2 rounded-md inline-block rotate-[1deg] shadow-sm hover:rotate-0 transition-transform backdrop-blur-sm">
              Gaya hidup yang realistis dari programmer profesional yang sedang "mengembangkan" aplikasi.
            </p>
          </ScrollReveal>
        </div>

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-100 rounded-full shadow-md"></div>
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-3 bg-gradient-to-b from-blue-100/50 via-blue-200/50 to-blue-100/50 rounded-full blur-md -z-10"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            <ScrollReveal delay={0.1}>
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white rotate-[4deg] hover:rotate-0 transition-transform z-20">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="ml-auto mr-[52%] bg-gradient-to-br from-white to-blue-50 p-5 rounded-lg shadow-lg border border-blue-100 max-w-md rotate-[-1deg] hover:rotate-[0.5deg] transition-transform hover:shadow-xl group transform hover:translate-y-[-2px] hover:translate-x-[-2px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 to-blue-100 rounded-t-lg opacity-70"></div>
                  <div className="font-mono font-bold text-lg mb-2 flex items-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mr-2">07:00</span> Bangun Pagi
                    <span className="ml-2 text-xs text-gray-400">(kadang 11:00)</span>
                  </div>
                  <p className="text-gray-600 font-mono">
                    Bangun dengan niat kuat untuk coding marathon. Cek notifikasi fesnuk dulu 5 menit (yang berubah jadi 2 jam).
                  </p>
                  <div className="absolute -bottom-2 -right-2 h-6 w-6 bg-blue-50 rounded-full opacity-70 flex items-center justify-center shadow-sm">
                    <CupSoda className="h-3 w-3 text-blue-400" />
                  </div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-blue-200 to-transparent rounded-full blur-md"></div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white -rotate-[4deg] hover:rotate-0 transition-transform z-20">
                  <Coffee className="h-4 w-4" />
                </div>
                <div className="mr-auto ml-[52%] bg-gradient-to-br from-white to-blue-50 p-5 rounded-lg shadow-lg border border-blue-100 max-w-md rotate-[1.5deg] hover:rotate-[0.5deg] transition-transform hover:shadow-xl group transform hover:translate-y-[-2px] hover:translate-x-[2px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 to-blue-100 rounded-t-lg opacity-70"></div>
                  <div className="font-mono font-bold text-lg mb-2 flex items-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mr-2">09:30</span> Persiapan Coding
                    <Timer className="ml-2 h-4 w-4 text-gray-400" />
                  </div>
                  <p className="text-gray-600 font-mono">
                    Buat kopi, nyalakan laptop, atur multiple monitor, atur mood lighting, pilih playlist lo-fi, bersihkan meja, rapikan kabel... (3 jam kemudian).
                  </p>
                  <div className="absolute -bottom-2 -left-2 h-6 w-6 bg-blue-50 rounded-full opacity-70 flex items-center justify-center shadow-sm">
                    <Coffee className="h-3 w-3 text-blue-400" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-blue-200 to-transparent rounded-full blur-md"></div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white rotate-[6deg] hover:rotate-0 transition-transform z-20">
                  <Pizza className="h-4 w-4" />
                </div>
                <div className="ml-auto mr-[52%] bg-gradient-to-br from-white to-blue-50 p-5 rounded-lg shadow-lg border border-blue-100 max-w-md -rotate-[1.2deg] hover:rotate-[0.5deg] transition-transform hover:shadow-xl group transform hover:translate-y-[-2px] hover:translate-x-[-2px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 to-blue-100 rounded-t-lg opacity-70"></div>
                  <div className="font-mono font-bold text-lg mb-2 flex items-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mr-2">12:30</span> "Istirahat" Makan Siang
                  </div>
                  <p className="text-gray-600 font-mono">
                    Makan sambil nonton tutorial coding yang tidak akan pernah diterapkan. Lanjut nonton episode berikutnya... dan berikutnya.
                  </p>
                  <div className="absolute -bottom-2 -right-2 h-6 w-6 bg-blue-50 rounded-full opacity-70 flex items-center justify-center shadow-sm">
                    <Popcorn className="h-3 w-3 text-blue-400" />
                  </div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-blue-200 to-transparent rounded-full blur-md"></div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white -rotate-[4deg] hover:rotate-0 transition-transform z-20">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div className="mr-auto ml-[52%] bg-gradient-to-br from-white to-blue-50 p-5 rounded-lg shadow-lg border border-blue-100 max-w-md rotate-[2deg] hover:rotate-[0.5deg] transition-transform hover:shadow-xl group transform hover:translate-y-[-2px] hover:translate-x-[2px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 to-blue-100 rounded-t-lg opacity-70"></div>
                  <div className="font-mono font-bold text-lg mb-2 flex items-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mr-2">15:00</span> "Research" Coding
                    <Cpu className="ml-2 h-4 w-4 text-gray-400" />
                  </div>
                  <p className="text-gray-600 font-mono">
                    Membaca dokumentasi selama 5 menit lalu lanjut 2 jam scrolling thread fesnuk tentang "framework mana yang terbaik".
                  </p>
                  <div className="absolute -bottom-2 -left-2 h-6 w-6 bg-blue-50 rounded-full opacity-70 flex items-center justify-center shadow-sm">
                    <Lightbulb className="h-3 w-3 text-blue-400" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-blue-200 to-transparent rounded-full blur-md"></div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white rotate-[5deg] hover:rotate-0 transition-transform z-20">
                  <Pencil className="h-4 w-4" />
                </div>
                <div className="ml-auto mr-[52%] bg-gradient-to-br from-white to-blue-50 p-5 rounded-lg shadow-lg border border-blue-100 max-w-md -rotate-[1.5deg] hover:rotate-[0.5deg] transition-transform hover:shadow-xl group transform hover:translate-y-[-2px] hover:translate-x-[-2px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 to-blue-100 rounded-t-lg opacity-70"></div>
                  <div className="font-mono font-bold text-lg mb-2 flex items-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mr-2">19:00</span> "Planning" Project
                  </div>
                  <p className="text-gray-600 font-mono">
                    Membuat wireframe super detail di Figma lalu merasa puas karena "sudah bekerja". Urusan coding besok saja.
                  </p>
                  <div className="absolute -top-2 -right-2 h-6 w-6 bg-blue-50 rounded-full opacity-70 flex items-center justify-center shadow-sm">
                    <Palette className="h-3 w-3 text-blue-400" />
                  </div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-blue-200 to-transparent rounded-full blur-md"></div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white -rotate-[3deg] hover:rotate-0 transition-transform z-20">
                  <Gamepad2 className="h-4 w-4" />
                </div>
                <div className="mr-auto ml-[52%] bg-gradient-to-br from-white to-blue-50 p-5 rounded-lg shadow-lg border border-blue-100 max-w-md rotate-[2.5deg] hover:rotate-[0.5deg] transition-transform hover:shadow-xl group transform hover:translate-y-[-2px] hover:translate-x-[2px]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 to-blue-100 rounded-t-lg opacity-70"></div>
                  <div className="font-mono font-bold text-lg mb-2 flex items-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mr-2">22:00</span> "Break" Malam
                    <span className="ml-2 text-xs text-gray-400">(sampai tidur)</span>
                  </div>
                  <p className="text-gray-600 font-mono">
                    Main game "sebentar" untuk refresh otak. Besok pasti akan mulai ngoding beneran. Trust me bro!
                  </p>
                  <div className="absolute -bottom-2 -left-2 h-6 w-6 bg-blue-50 rounded-full opacity-70 flex items-center justify-center shadow-sm">
                    <Bed className="h-3 w-3 text-blue-400" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-blue-200 to-transparent rounded-full blur-md"></div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex justify-center mt-16">
            <ScrollReveal delay={0.7}>
              <div className="bg-gradient-to-br from-white to-blue-50 p-4 rounded-lg shadow-lg border border-blue-100 inline-block rotate-[1deg] hover:rotate-0 transition-transform hover:shadow-xl transform hover:translate-y-[-2px] relative">
                <p className="text-gray-600 font-mono text-center">
                  <span className="text-blue-600 font-bold">const</span> achievement = <span className="text-green-600">'0 lines of code'</span>;
                </p>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-blue-200 to-transparent rounded-full blur-md"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
} 