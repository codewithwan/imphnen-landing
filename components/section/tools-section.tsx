import ScrollReveal from "@/components/scroll-reveal"
import { Cpu, Clock, Pencil, Github, Zap, Timer, BookOpen } from "lucide-react"

export default function ToolsSection() {
    return (
        <section id="tools" className="py-20 md:py-28 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-white"></div>
            <div className="absolute inset-0 bg-[url('/pattern-kawaii.svg')] opacity-[0.02] pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-r from-transparent via-blue-100 to-transparent opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-full h-12 bg-gradient-to-r from-transparent via-blue-100 to-transparent opacity-30"></div>
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>

            <div className="container relative z-10">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <ScrollReveal>
                        <div className="inline-flex items-center rounded-full border border-blue-200 px-3 py-1 text-sm font-medium text-blue-600 bg-gradient-to-r from-blue-50 via-white to-blue-50 mb-4 rotate-[1deg] hover:rotate-[-1deg] transition-transform font-mono shadow-sm">
                            <Cpu className="mr-2 h-4 w-4 animate-pulse" />
                            <span className="group relative">
                                tools.that.never.used()
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
                            </span>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 font-mono relative">
                            Tools Produktivitas
                            <span className="text-red-500 rotate-[2deg] line-through inline-block transform hover:rotate-[-1deg] transition-transform ml-2 relative">
                                {`<BerdebuDiFolder />`}
                                <span className="absolute inset-0 bg-red-100/30 blur-sm -z-10 rounded-lg"></span>
                            </span>
                            <div className="absolute -top-6 right-14 text-xs text-gray-400 rotate-[-4deg] font-mono opacity-70">const used = false;</div>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <p className="text-gray-600 mr-4 font-mono relative bg-white/50 p-2 rounded-md inline-block rotate-[1deg] shadow-sm hover:rotate-0 transition-transform">
                            Koleksi aplikasi yang diinstal dengan antusias lalu tidak pernah dibuka lagi.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-transparent -z-10 rounded-3xl blur-3xl opacity-60"></div>

                    <ScrollReveal delay={0.1}>
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 group hover:-translate-y-2 transition-all duration-300 relative hover:shadow-xl transform hover:scale-[1.02]" style={{ perspective: "1000px" }}>
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="p-6 relative">
                                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 text-xs font-mono py-1 px-2 rounded-bl-lg shadow-sm">
                                    used: 0 days ago
                                </div>
                                <div className="h-12 w-12 mb-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center text-blue-600 shadow-md group-hover:shadow-lg transition-all transform group-hover:scale-110 group-hover:rotate-3">
                                    <Clock className="h-6 w-6 group-hover:scale-110 transition-transform" />
                                </div>
                                <h3 className="text-xl font-bold mb-1 font-mono group-hover:text-blue-600 transition-colors">Pomodoro Timer</h3>
                                <p className="text-sm text-gray-400 mb-3 font-mono">Version 2.5.1 (Updated 247 days ago)</p>
                                <p className="text-gray-600 font-mono">Timer yang belum pernah selesai 1 pomodoro penuh karena selalu pause di menit ke-10 untuk "istirahat" sebentar.</p>

                                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                                    <div className="flex space-x-2">
                                        <div className="text-xs py-1 px-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 rounded-full font-mono shadow-sm">
                                            #productivity
                                        </div>
                                        <div className="text-xs py-1 px-2 bg-gradient-to-r from-red-50 to-red-100 text-red-600 rounded-full font-mono shadow-sm">
                                            #abandoned
                                        </div>
                                    </div>
                                    <div className="text-xs py-1 px-2 bg-gray-100 text-gray-600 rounded-full font-mono group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors shadow-sm group-hover:shadow-md">
                                        Open →
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 group hover:-translate-y-2 transition-all duration-300 relative hover:shadow-xl transform hover:scale-[1.02]" style={{ perspective: "1000px" }}>
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="p-6 relative">
                                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-800 text-xs font-mono py-1 px-2 rounded-bl-lg shadow-sm">
                                    used: 2 hours only
                                </div>
                                <div className="h-12 w-12 mb-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center text-purple-600 shadow-md group-hover:shadow-lg transition-all transform group-hover:scale-110 group-hover:rotate-3">
                                    <Pencil className="h-6 w-6 group-hover:scale-110 transition-transform" />
                                </div>
                                <h3 className="text-xl font-bold mb-1 font-mono group-hover:text-purple-600 transition-colors">Notion Templates</h3>
                                <p className="text-sm text-gray-400 mb-3 font-mono">Version 3.1.0 (Setup incomplete)</p>
                                <p className="text-gray-600 font-mono">Koleksi 27 template Notion yang didownload dengan semangat tapi tidak pernah digunakan lebih dari satu hari.</p>

                                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                                    <div className="flex space-x-2">
                                        <div className="text-xs py-1 px-2 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-600 rounded-full font-mono shadow-sm">
                                            #organization
                                        </div>
                                        <div className="text-xs py-1 px-2 bg-gradient-to-r from-yellow-50 to-yellow-100 text-yellow-600 rounded-full font-mono shadow-sm">
                                            #tooComplex
                                        </div>
                                    </div>
                                    <div className="text-xs py-1 px-2 bg-gray-100 text-gray-600 rounded-full font-mono group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors shadow-sm group-hover:shadow-md">
                                        Configure →
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 group hover:-translate-y-2 transition-all duration-300 relative hover:shadow-xl transform hover:scale-[1.02]" style={{ perspective: "1000px" }}>
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="p-6 relative">
                                <div className="absolute top-0 right-0 bg-gradient-to-r from-green-50 to-green-100 text-green-800 text-xs font-mono py-1 px-2 rounded-bl-lg shadow-sm">
                                    paid: $49.99/year
                                </div>
                                <div className="h-12 w-12 mb-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center text-green-600 shadow-md group-hover:shadow-lg transition-all transform group-hover:scale-110 group-hover:rotate-3">
                                    <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                                </div>
                                <h3 className="text-xl font-bold mb-1 font-mono group-hover:text-green-600 transition-colors">GitHub Copilot</h3>
                                <p className="text-sm text-gray-400 mb-3 font-mono">Subscribing for 8 months</p>
                                <p className="text-gray-600 font-mono">AI coding assistant yang dibayar mahal tapi jarang terpakai karena jarang ngoding. Dipakai hanya untuk impress teman di café.</p>

                                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                                    <div className="flex space-x-2">
                                        <div className="text-xs py-1 px-2 bg-gradient-to-r from-green-50 to-green-100 text-green-600 rounded-full font-mono shadow-sm">
                                            #ai
                                        </div>
                                        <div className="text-xs py-1 px-2 bg-gradient-to-r from-red-50 to-red-100 text-red-600 rounded-full font-mono shadow-sm">
                                            #expensive
                                        </div>
                                    </div>
                                    <div className="text-xs py-1 px-2 bg-gray-100 text-gray-600 rounded-full font-mono group-hover:bg-green-100 group-hover:text-green-600 transition-colors shadow-sm group-hover:shadow-md">
                                        Renew →
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 group hover:-translate-y-2 transition-all duration-300 relative hover:shadow-xl transform hover:scale-[1.02]" style={{ perspective: "1000px" }}>
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-orange-50/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="p-6 relative">
                                <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-50 to-orange-100 text-orange-800 text-xs font-mono py-1 px-2 rounded-bl-lg shadow-sm">
                                    installed: 341 days ago
                                </div>
                                <div className="h-12 w-12 mb-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center text-orange-600 shadow-md group-hover:shadow-lg transition-all transform group-hover:scale-110 group-hover:rotate-3">
                                    <BookOpen className="h-6 w-6 group-hover:scale-110 transition-transform" />
                                </div>
                                <h3 className="text-xl font-bold mb-1 font-mono group-hover:text-orange-600 transition-colors">Documentation Generator</h3>
                                <p className="text-sm text-gray-400 mb-3 font-mono">Version 4.2.0 (Never configured)</p>
                                <p className="text-gray-600 font-mono">Tool untuk generate dokumentasi otomatis yang tidak pernah terpakai karena tidak ada kode yang perlu didokumentasikan.</p>

                                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                                    <div className="flex space-x-2">
                                        <div className="text-xs py-1 px-2 bg-gradient-to-r from-orange-50 to-orange-100 text-orange-600 rounded-full font-mono shadow-sm">
                                            #documentation
                                        </div>
                                        <div className="text-xs py-1 px-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 rounded-full font-mono shadow-sm">
                                            #someday
                                        </div>
                                    </div>
                                    <div className="text-xs py-1 px-2 bg-gray-100 text-gray-600 rounded-full font-mono group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors shadow-sm group-hover:shadow-md">
                                        Setup →
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.5}>
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 group hover:-translate-y-2 transition-all duration-300 relative hover:shadow-xl transform hover:scale-[1.02]" style={{ perspective: "1000px" }}>
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-teal-600"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-teal-50/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="p-6 relative">
                                <div className="absolute top-0 right-0 bg-gradient-to-r from-teal-50 to-teal-100 text-teal-800 text-xs font-mono py-1 px-2 rounded-bl-lg shadow-sm">
                                    screenshots: 0
                                </div>
                                <div className="h-12 w-12 mb-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl flex items-center justify-center text-teal-600 shadow-md group-hover:shadow-lg transition-all transform group-hover:scale-110 group-hover:rotate-3">
                                    <Timer className="h-6 w-6 group-hover:scale-110 transition-transform" />
                                </div>
                                <h3 className="text-xl font-bold mb-1 font-mono group-hover:text-teal-600 transition-colors">Time Tracker</h3>
                                <p className="text-sm text-gray-400 mb-3 font-mono">Trial expired (Never purchased)</p>
                                <p className="text-gray-600 font-mono">Aplikasi tracking waktu kerja dengan screenshot otomatis yang dihapus karena hanya membuktikan betapa tidak produktifnya kamu.</p>

                                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                                    <div className="flex space-x-2">
                                        <div className="text-xs py-1 px-2 bg-gradient-to-r from-teal-50 to-teal-100 text-teal-600 rounded-full font-mono shadow-sm">
                                            #tracking
                                        </div>
                                        <div className="text-xs py-1 px-2 bg-gradient-to-r from-red-50 to-red-100 text-red-600 rounded-full font-mono shadow-sm">
                                            #anxiety
                                        </div>
                                    </div>
                                    <div className="text-xs py-1 px-2 bg-gray-100 text-gray-600 rounded-full font-mono group-hover:bg-teal-100 group-hover:text-teal-600 transition-colors shadow-sm group-hover:shadow-md">
                                        Reinstall →
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.6}>
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100 group hover:-translate-y-2 transition-all duration-300 relative hover:shadow-xl transform hover:scale-[1.02]" style={{ perspective: "1000px" }}>
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="p-6 relative">
                                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 text-xs font-mono py-1 px-2 rounded-bl-lg shadow-sm">
                                    tasks completed: 0/97
                                </div>
                                <div className="h-12 w-12 mb-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center text-blue-600 shadow-md group-hover:shadow-lg transition-all transform group-hover:scale-110 group-hover:rotate-3">
                                    <Zap className="h-6 w-6 group-hover:scale-110 transition-transform" />
                                </div>
                                <h3 className="text-xl font-bold mb-1 font-mono group-hover:text-blue-600 transition-colors">Task Management</h3>
                                <p className="text-sm text-gray-400 mb-3 font-mono">97 overdue tasks</p>
                                <p className="text-gray-600 font-mono">App to-do list dengan 97 task "Mulai Coding Project X" yang berpindah deadline setiap minggu selama 2 tahun terakhir.</p>

                                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                                    <div className="flex space-x-2">
                                        <div className="text-xs py-1 px-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 rounded-full font-mono shadow-sm">
                                            #todoList
                                        </div>
                                        <div className="text-xs py-1 px-2 bg-gradient-to-r from-yellow-50 to-yellow-100 text-yellow-600 rounded-full font-mono shadow-sm">
                                            #overdue
                                        </div>
                                    </div>
                                    <div className="text-xs py-1 px-2 bg-gray-100 text-gray-600 rounded-full font-mono group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors shadow-sm group-hover:shadow-md">
                                        Postpone All →
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
