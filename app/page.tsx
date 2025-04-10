import Link from "next/link"
import {
  Sparkles,
  Users,
  MessageSquare,
  Github,
  ArrowRight,
  Code,
  Zap,
  Laugh,
  Lightbulb,
  Palette,
  Heart,
  Coffee,
  Bed,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import LazyWaifu from "@/components/lazy-waifu"
import AnimatedCounter from "@/components/animated-counter"
import ScrollReveal from "@/components/scroll-reveal"
import FloatingElements from "@/components/floating-elements"
import Navbar from "@/components/navbar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductCard from "@/components/product-card"
import ChaoticFeatureCard from "@/components/chaotic-feature-card"
import QuoteSubmissionForm from "@/components/quote-submission-form"
import QuoteGallery from "@/components/quote-gallery"
import HeroQuotes from "@/components/hero-quotes"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section with "enggan" styling */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <FloatingElements />
          <div className="absolute inset-0 bg-[url('/pattern-kawaii.svg')] opacity-[0.03] pointer-events-none"></div>

          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 -rotate-[1.5deg] transform hover:rotate-[-0.5deg] transition-transform duration-500">
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rotate-[2deg] font-mono shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default">
                  <Code className="mr-2 h-4 w-4 animate-pulse" />
                  <span className="group relative">
                    console.log("<span className="text-red-500">m</span><span className="text-orange-500">a</span><span className="text-yellow-500">l</span><span className="text-green-500">a</span><span className="text-blue-500">s</span> <span className="text-blue-500">s</span><span className="text-blue-600">e</span><span className="text-blue-700">n</span><span className="text-blue-800">p</span><span className="text-blue-900">a</span><span className="text-blue-500">i</span>~");
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-mono transform hover:translate-x-1 transition-transform">Ingin Menjadi</h1>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-blue-600 rotate-[2deg] ml-2 font-mono hover:text-blue-500 transition-colors transform hover:scale-105 transition-transform origin-left">
                    Programmer Handal
                  </h1>
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
                </div>
                <ScrollReveal>
                  <p className="text-gray-600 text-lg max-w-md ml-6 font-mono rotate-[1deg] transform hover:-rotate-[0.5deg] transition-transform border-l-2 border-blue-200 pl-3">
                    Komunitas para programmer yang punya niat setinggi langit tapi eksekusinya setipis kertas, lebih suka scroll fesnuk daripada ngetik kode.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <div className="flex flex-col sm:flex-row gap-4 rotate-[1.5deg] transform hover:rotate-[0.5deg] transition-transform">
                    <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-mono group overflow-hidden relative border-none">
                      <span className="group-hover:translate-x-2 transition-transform inline-block">procrastinate()</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-blue-300 text-blue-600 hover:bg-blue-50 -rotate-[2deg] hover:rotate-0 transition-all font-mono group"
                    >
                      <span className="group-hover:-translate-y-0.5 transition-transform inline-block">scrollFesnuk()</span>
                      <div className="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-blue-200 scale-0 group-hover:scale-100 transition-transform origin-center"></div>
                    </Button>
                  </div>
                </ScrollReveal>
              </div>
              <div className="relative h-[400px] w-full rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 overflow-hidden rotate-[2deg] hover:rotate-[1deg] transition-transform shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-500">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <Code className="h-64 w-64 text-blue-500" strokeWidth={0.5} />
                </div>
                <LazyWaifu />
                <HeroQuotes />
              </div>
            </div>
          </div>
        </section>

        {/* About Section with "enggan" styling */}
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
                    <Coffee className="absolute -bottom-2 -right-2 h-5 w-5 text-gray-300 opacity-50 rotate-[10deg]" />
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

        {/* Product Showcase Section */}
        <section id="products" className="py-20 md:py-28 relative">
          <div className="absolute inset-0 bg-dot-pattern opacity-[0.04] pointer-events-none"></div>
          <div className="container relative z-10">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <ScrollReveal>
                <div className="inline-flex items-center rounded-full border border-blue-200 px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 mb-4 -rotate-[2deg] hover:rotate-0 transition-transform font-mono shadow-sm">
                  <Code className="mr-2 h-4 w-4 animate-bounce animate-duration-[3000ms]" />
                  <span className="group relative">
                    merch.showcase()
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 font-mono relative">
                  <span className="text-blue-600 rotate-[2deg] inline-block transform hover:rotate-[-1deg] transition-transform">{`<Merch />`}</span>
                  <span className="relative"> for !Programmers
                    <div className="absolute -bottom-1 left-1/4 w-1/2 h-0.5 bg-blue-200"></div>
                  </span>
                  <div className="absolute -top-6 left-10 text-xs text-gray-400 rotate-[-4deg] font-mono opacity-70">sudo apt-get install style</div>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-gray-600 mr-4 font-mono relative bg-white/50 p-2 rounded-md inline-block -rotate-[1deg] shadow-sm hover:rotate-[0.5deg] transition-all">
                  {`{ productivity: 0, quality: 'premium', vibes: 'immaculate' }`}
                </p>
              </ScrollReveal>
            </div>

            <Tabs defaultValue="tshirts" className="w-full">
              <div className="flex justify-center mb-8 rotate-[1deg] hover:rotate-0 transition-transform">
                <TabsList className="bg-white border border-gray-200 font-mono shadow-sm">
                  <TabsTrigger
                    value="tshirts"
                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white relative group"
                  >
                    T-Shirts
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300"></span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="stickers"
                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white relative group"
                  >
                    Stickers
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300"></span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="accessories"
                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white relative group"
                  >
                    Accessories
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300"></span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="tshirts">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ProductCard
                    title="'I'll Code Tomorrow' Tee"
                    description="Kaos yang menunjukkan niat besar untuk ngoding besok (yang tidak pernah datang)"
                    imageUrl="/placeholder.svg?height=300&width=400&text=Tomorrow+Tee"
                    rating={4.9}
                    price={150}
                    rotation={1.2}
                  />
                  <ProductCard
                    title="'Ctrl+C Ctrl+V Engineer' Tee"
                    description="Kaos untuk programmer sejati yang menguasai seni copy-paste"
                    imageUrl="/placeholder.svg?height=300&width=400&text=Copy+Paste+Tee"
                    rating={4.8}
                    price={175}
                    rotation={-1.5}
                  />
                  <ProductCard
                    title="'It Works on My Machine' Tee"
                    description="Kaos dengan alasan klasik programmer ketika kode tidak berjalan di komputer lain"
                    imageUrl="/placeholder.svg?height=300&width=400&text=Works+On+My+Machine"
                    rating={4.7}
                    price={160}
                    rotation={1.8}
                  />
                  <ProductCard
                    title="'Mercury Retrograde' Tee"
                    description="Kaos dengan alasan astronomi kenapa kamu tidak bisa ngoding hari ini"
                    imageUrl="/placeholder.svg?height=300&width=400&text=Mercury+Retrograde"
                    rating={4.6}
                    price={165}
                    rotation={-2.2}
                  />
                  <ProductCard
                    title="'Zodiak Tidak Mendukung' Tee"
                    description="Kaos dengan alasan astrologi kenapa kamu tidak bisa ngoding minggu ini"
                    imageUrl="/placeholder.svg?height=300&width=400&text=Zodiak+Tee"
                    rating={4.5}
                    price={155}
                    rotation={1.4}
                  />
                  <ProductCard
                    title="'Programmer Without Code' Tee"
                    description="Kaos untuk programmer yang tidak pernah menulis kode tapi tetap merasa seperti programmer"
                    imageUrl="/placeholder.svg?height=300&width=400&text=No+Code+Tee"
                    rating={4.7}
                    price={170}
                    rotation={-1.7}
                  />
                </div>
              </TabsContent>

              <TabsContent value="stickers">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ProductCard
                    title="'Debugging = Print Statements' Sticker"
                    description="Stiker yang menunjukkan teknik debugging terbaik: console.log everywhere"
                    imageUrl="/placeholder.svg?height=300&width=400&text=Debug+Sticker"
                    rating={4.9}
                    rotation={1.5}
                  />
                  <ProductCard
                    title="'Stack Overflow Certified' Sticker"
                    description="Stiker untuk laptop yang menunjukkan sumber pengetahuan coding utamamu"
                    imageUrl="/placeholder.svg?height=300&width=400&text=StackOverflow+Sticker"
                    rating={4.8}
                    rotation={-1.8}
                  />
                  <ProductCard
                    title="'Semicolon Survivor' Sticker"
                    description="Stiker untuk mereka yang pernah menghabiskan 3 jam mencari semicolon yang hilang"
                    imageUrl="/placeholder.svg?height=300&width=400&text=Semicolon+Sticker"
                    rating={4.7}
                    rotation={2.1}
                  />
                  <ProductCard
                    title="'CSS Is My Passion' Sticker"
                    description="Stiker untuk mereka yang menghabiskan 5 jam untuk menggeser elemen 3 pixel ke kanan"
                    imageUrl="/placeholder.svg?height=300&width=400&text=CSS+Sticker"
                    rating={4.6}
                    rotation={-2.3}
                  />
                </div>
              </TabsContent>

              <TabsContent value="accessories">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ProductCard
                    title="'Fake Programmer' ID Card Lanyard"
                    description="Lanyard dengan ID card palsu untuk terlihat seperti programmer profesional di cafe"
                    imageUrl="/placeholder.svg?height=300&width=400&text=Lanyard"
                    rating={4.8}
                    rotation={1.7}
                  />
                  <ProductCard
                    title="'Mechanical Keyboard' Keychain"
                    description="Keychain dengan suara keyboard mechanical untuk terdengar seperti sedang ngoding"
                    imageUrl="/placeholder.svg?height=300&width=400&text=Keychain"
                    rating={4.7}
                    rotation={-1.9}
                  />
                  <ProductCard
                    title="'Error 404: Motivation Not Found' Mug"
                    description="Mug kopi untuk menampung kafein yang tidak membantu motivasi ngoding"
                    imageUrl="/placeholder.svg?height=300&width=400&text=Mug"
                    rating={4.9}
                    rotation={2.2}
                  />
                  <ProductCard
                    title="'Busy Coding' Noise-Cancelling Headphone"
                    description="Headphone untuk mendengarkan musik sambil pura-pura ngoding di coworking space"
                    imageUrl="/placeholder.svg?height=300&width=400&text=Headphone"
                    rating={4.8}
                    rotation={-2.1}
                  />
                  <ProductCard
                    title="'Programmer Starter Pack' Notebook"
                    description="Notebook untuk menulis ide-ide aplikasi yang tidak akan pernah dibuat"
                    imageUrl="/placeholder.svg?height=300&width=400&text=Notebook"
                    rating={4.7}
                    rotation={1.6}
                  />
                  <ProductCard
                    title="'Coding Vibe' LED Light"
                    description="Lampu LED untuk setup yang terlihat seperti programmer profesional di Instagram"
                    imageUrl="/placeholder.svg?height=300&width=400&text=LED+Light"
                    rating={4.6}
                    rotation={-1.5}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Features Section with "enggan" styling */}
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
                <p className="text-gray-600 ml-3 font-mono relative bg-white/70 p-2 rounded-md inline-block rotate-[1deg] shadow-sm transform hover:rotate-0 transition-transform">
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

        {/* Join Section with "enggan" styling */}
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
                      Join Nakama
                      <span className="text-blue-600 rotate-[2deg] inline-block transform hover:rotate-0 transition-transform">.then(scrollFesnuk)</span>
                    </h2>
                    <p className="text-gray-600 mb-6 ml-2 font-mono border-l-2 border-blue-200 pl-3">
                      Bergabunglah dengan ratusan ribu programmer yang enggan ngoding. Berbagi meme, alasan tidak
                      ngoding karena scroll fesnuk, dan saling mendukung untuk tetap merasa profesional.
                    </p>
                    <div className="space-y-4 rotate-[1.5deg] hover:rotate-[0.5deg] transition-transform">
                      <Button size="lg" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-mono group relative overflow-hidden">
                        <span className="group-hover:translate-x-1 transition-transform inline-block">joinDiscord().then(sayHalo)</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full border-blue-300 text-blue-600 hover:bg-blue-50 -rotate-[1.5deg] hover:rotate-[-0.5deg] transition-transform font-mono group"
                      >
                        <span className="group-hover:-translate-y-0.5 transition-transform inline-block">joinGithub().then(neverCommit)</span>
                        <div className="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-blue-200 scale-0 group-hover:scale-100 transition-transform origin-center"></div>
                      </Button>
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

        {/* Quote Section */}
        <section id="quotes" className="py-4 relative">
          <QuoteGallery />
          <QuoteSubmissionForm />
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-white relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
        <div className="container py-8 md:py-12">
          {/* Footer content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 group">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs transition-transform duration-300 group-hover:scale-110 rotate-[2deg] font-mono shadow-sm">
                {`</>`}
              </div>
              <span className="font-bold -rotate-[2deg] font-mono group-hover:text-blue-600 transition-colors">IMPHNEN</span>
            </div>
            <p className="text-sm text-gray-500 text-center md:text-left font-mono rotate-[0.5deg] opacity-90">
              &copy; {new Date().getFullYear()} IMPHNEN - Ingin Menjadi Programmer Handal Namun Enggan Ngoding
            </p>
            <div className="flex gap-4 font-mono">
              <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors relative group">
                Discord()
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors relative group">
                GitHub()
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors relative group">
                Twitter()
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
