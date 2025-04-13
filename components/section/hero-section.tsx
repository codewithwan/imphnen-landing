"use client"

import Link from "next/link"
import { ArrowRight, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import LazyWaifu from "@/components/lazy-waifu"
import ScrollReveal from "@/components/scroll-reveal"
import FloatingElements from "@/components/floating-elements"
import HeroQuotes from "@/components/hero-quotes"

export default function HeroSection() {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden">
            <FloatingElements />
            <div className="absolute inset-0 bg-[url('/pattern-kawaii.svg')] opacity-[0.03] pointer-events-none"></div>
            <div className="absolute top-20 -left-20 w-80 h-80 bg-blue-50 rounded-full opacity-30 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 -right-10 w-60 h-60 bg-blue-100 rounded-full opacity-20 blur-3xl animate-pulse animate-duration-8000ms"></div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 -rotate-[1.5deg] transform hover:rotate-[-0.5deg] transition-transform duration-500">
                        <ScrollReveal>
                            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rotate-[2deg] font-mono shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default relative before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-blue-100/50 before:via-transparent before:to-blue-100/50 before:rounded-full before:blur-md">
                                <Code className="mr-2 h-4 w-4 animate-pulse" />
                                <span className="group relative">
                                    console.log("malas ngoding");
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                                </span>
                            </div>
                        </ScrollReveal>
                        <div className="relative z-10">
                            <ScrollReveal delay={0.1}>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-mono transform hover:translate-x-1 transition-transform text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 pb-1">Ingin Menjadi</h1>
                            </ScrollReveal>
                            <ScrollReveal delay={0.2}>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r pb-1 from-blue-600 to-blue-400 rotate-[2deg] ml-2 font-mono hover:text-blue-500 transition-colors transform hover:scale-105 transition-transform origin-left">
                                    Programmer Handal
                                </h1>
                            </ScrollReveal>
                            <ScrollReveal delay={0.3}>
                                <span className="block text-gray-500 text-2xl md:text-3xl mt-2 -rotate-[2deg] ml-4 font-mono relative transform hover:rotate-0 transition-transform">
                                    {"{ rajin: "}
                                    <span className="line-through text-red-400">true</span>
                                    <span className="text-red-500 pl-1">false</span>
                                    {", ngoding: "}
                                    <span className="line-through text-red-400">true</span>
                                    <span className="text-red-500 pl-1">false</span>
                                    {", fesnuk: "}
                                    <span className="text-green-500">true</span>
                                    {" }"}
                                    <div className="absolute -bottom-1 right-4 w-16 h-0.5 bg-blue-300 rotate-[5deg]"></div>
                                </span>
                            </ScrollReveal>
                            <div className="absolute -top-6 -left-4 w-20 h-20 bg-gradient-to-br from-blue-200 to-transparent rounded-full blur-xl opacity-70 -z-10"></div>
                        </div>
                        <ScrollReveal delay={0.4}>
                            <div className="relative">
                                <div className="absolute -left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200"></div>
                                <p className="text-gray-600 text-lg max-w-md ml-6 font-mono rotate-[1deg] transform hover:-rotate-[0.5deg] transition-transform border-l-2 border-blue-200 pl-3">
                                    Komunitas para programmer yang punya niat setinggi langit tapi eksekusinya setipis kertas, lebih suka scroll fesnuk daripada ngetik kode.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.5}>
                            <div className="flex flex-col sm:flex-row gap-4 rotate-[1.5deg] transform hover:rotate-[0.5deg] transition-transform">
                                <Link href="https://codewithwan.tech/" target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" className="group overflow-hidden relative border-none shadow-lg hover:shadow-xl">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700"></div>
                                        <span className="relative z-10 text-white font-mono group-hover:translate-x-2 transition-transform inline-block">meetTheLazyDev()</span>
                                        <ArrowRight className="relative z-10 ml-2 h-4 w-4 text-white group-hover:translate-x-1 transition-transform" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                    </Button>
                                </Link>
                                <Link href="https://www.facebook.com/groups/programmerhandal" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="border-blue-300 text-blue-600 hover:bg-blue-50 -rotate-[2deg] hover:rotate-0 transition-all font-mono group relative shadow-sm hover:shadow-md"
                                    >
                                        <span className="group-hover:-translate-y-0.5 transition-transform inline-block">scrollFesnuk()</span>
                                        <div className="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-blue-200 scale-0 group-hover:scale-100 transition-transform origin-center"></div>
                                        <div className="absolute inset-0 -z-10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-50 to-transparent"></div>
                                    </Button>
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                    <ScrollReveal delay={0.2}>
                        <div className="relative h-[400px] w-full rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-[1.02] transition-all duration-500 group">
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 overflow-hidden rotate-[2deg] hover:rotate-[1deg] transition-transform"></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                <Code className="h-64 w-64 text-blue-500" strokeWidth={0.5} />
                            </div>
                            <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-500 rounded-lg opacity-30 group-hover:opacity-0"></div>
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-100/50 to-blue-50/30 overflow-hidden"></div>
                            <LazyWaifu />
                            <HeroQuotes />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tl from-blue-100 to-transparent rounded-full blur-xl opacity-70"></div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
} 