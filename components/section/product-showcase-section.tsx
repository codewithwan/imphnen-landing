"use client"

import { Code } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductCard from "@/components/product-card"

export default function ProductShowcaseSection() {
  return (
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

        <ScrollReveal delay={0.3}>
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
                <ScrollReveal delay={0.4}>
                  <ProductCard
                    title="'I'll Code Tomorrow' Tee"
                    description="Kaos yang menunjukkan niat besar untuk ngoding besok (yang tidak pernah datang)"
                    imageUrl="/placeholder.svg?height=300&width=400&text=Tomorrow+Tee"
                    rating={4.9}
                    price={150}
                    rotation={1.2}
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.5}>
                  <ProductCard
                    title="'Ctrl+C Ctrl+V Engineer' Tee"
                    description="Kaos untuk programmer sejati yang menguasai seni copy-paste"
                    imageUrl="/placeholder.svg?height=300&width=400&text=Copy+Paste+Tee"
                    rating={4.8}
                    price={175}
                    rotation={-1.5}
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.6}>
                  <ProductCard
                    title="'It Works on My Machine' Tee"
                    description="Kaos dengan alasan klasik programmer ketika kode tidak berjalan di komputer lain"
                    imageUrl="/placeholder.svg?height=300&width=400&text=Works+On+My+Machine"
                    rating={4.7}
                    price={160}
                    rotation={1.8}
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.7}>
                  <ProductCard
                    title="'Mercury Retrograde' Tee"
                    description="Kaos dengan alasan astronomi kenapa kamu tidak bisa ngoding hari ini"
                    imageUrl="/placeholder.svg?height=300&width=400&text=Mercury+Retrograde"
                    rating={4.6}
                    price={165}
                    rotation={-2.2}
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.8}>
                  <ProductCard
                    title="'Zodiak Tidak Mendukung' Tee"
                    description="Kaos dengan alasan astrologi kenapa kamu tidak bisa ngoding minggu ini"
                    imageUrl="/placeholder.svg?height=300&width=400&text=Zodiak+Tee"
                    rating={4.5}
                    price={155}
                    rotation={1.4}
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.9}>
                  <ProductCard
                    title="'Programmer Without Code' Tee"
                    description="Kaos untuk programmer yang tidak pernah menulis kode tapi tetap merasa seperti programmer"
                    imageUrl="/placeholder.svg?height=300&width=400&text=No+Code+Tee"
                    rating={4.7}
                    price={170}
                    rotation={-1.7}
                  />
                </ScrollReveal>
              </div>
            </TabsContent>

            <TabsContent value="stickers">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ScrollReveal delay={0.4}>
                  <ProductCard
                    title="'Debugging = Print Statements' Sticker"
                    description="Stiker yang menunjukkan teknik debugging terbaik: console.log everywhere"
                    imageUrl="/placeholder.svg?height=300&width=400&text=Debug+Sticker"
                    rating={4.9}
                    rotation={1.5}
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.5}>
                  <ProductCard
                    title="'Stack Overflow Certified' Sticker"
                    description="Stiker untuk laptop yang menunjukkan sumber pengetahuan coding utamamu"
                    imageUrl="/placeholder.svg?height=300&width=400&text=StackOverflow+Sticker"
                    rating={4.8}
                    rotation={-1.8}
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.6}>
                  <ProductCard
                    title="'Semicolon Survivor' Sticker"
                    description="Stiker untuk mereka yang pernah menghabiskan 3 jam mencari semicolon yang hilang"
                    imageUrl="/placeholder.svg?height=300&width=400&text=Semicolon+Sticker"
                    rating={4.7}
                    rotation={2.1}
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.7}>
                  <ProductCard
                    title="'CSS Is My Passion' Sticker"
                    description="Stiker untuk mereka yang menghabiskan 5 jam untuk menggeser elemen 3 pixel ke kanan"
                    imageUrl="/placeholder.svg?height=300&width=400&text=CSS+Sticker"
                    rating={4.6}
                    rotation={-2.3}
                  />
                </ScrollReveal>
              </div>
            </TabsContent>

            <TabsContent value="accessories">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ScrollReveal delay={0.4}>
                  <ProductCard
                    title="'Fake Programmer' ID Card Lanyard"
                    description="Lanyard dengan ID card palsu untuk terlihat seperti programmer profesional di cafe"
                    imageUrl="/placeholder.svg?height=300&width=400&text=Lanyard"
                    rating={4.8}
                    rotation={1.7}
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.5}>
                  <ProductCard
                    title="'Mechanical Keyboard' Keychain"
                    description="Keychain dengan suara keyboard mechanical untuk terdengar seperti sedang ngoding"
                    imageUrl="/placeholder.svg?height=300&width=400&text=Keychain"
                    rating={4.7}
                    rotation={-1.9}
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.6}>
                  <ProductCard
                    title="'Error 404: Motivation Not Found' Mug"
                    description="Mug kopi untuk menampung kafein yang tidak membantu motivasi ngoding"
                    imageUrl="/placeholder.svg?height=300&width=400&text=Mug"
                    rating={4.9}
                    rotation={2.2}
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.7}>
                  <ProductCard
                    title="'Busy Coding' Noise-Cancelling Headphone"
                    description="Headphone untuk mendengarkan musik sambil pura-pura ngoding di coworking space"
                    imageUrl="/placeholder.svg?height=300&width=400&text=Headphone"
                    rating={4.8}
                    rotation={-2.1}
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.8}>
                  <ProductCard
                    title="'Programmer Starter Pack' Notebook"
                    description="Notebook untuk menulis ide-ide aplikasi yang tidak akan pernah dibuat"
                    imageUrl="/placeholder.svg?height=300&width=400&text=Notebook"
                    rating={4.7}
                    rotation={1.6}
                  />
                </ScrollReveal>
                <ScrollReveal delay={0.9}>
                  <ProductCard
                    title="'Coding Vibe' LED Light"
                    description="Lampu LED untuk setup yang terlihat seperti programmer profesional di Instagram"
                    imageUrl="/placeholder.svg?height=300&width=400&text=LED+Light"
                    rating={4.6}
                    rotation={-1.5}
                  />
                </ScrollReveal>
              </div>
            </TabsContent>
          </Tabs>
        </ScrollReveal>
      </div>
    </section>
  )
} 