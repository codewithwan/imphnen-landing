"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles } from "lucide-react"
import { Label } from "@/components/ui/label"
import ScrollReveal from "@/components/scroll-reveal"
import { toast } from 'sonner'
import { addQuote } from "@/lib/firebase-service"

export default function QuoteSubmissionForm() {
  const [formData, setFormData] = useState({
    author: '',
    text: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.author || !formData.text) {
      toast.error('Mohon isi semua field yang wajib')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Save quote to Firebase
      await addQuote(formData.author, formData.text)
      
      toast.success('Terima kasih telah berbagi quote! Semoga quote kamu terpilih.')
      setFormData({ author: '', text: '' })
    } catch (error) {
      console.error('Error submitting quote:', error)
      toast.error('Terjadi kesalahan saat menyimpan quote. Silakan coba lagi nanti. Jika masalah berlanjut, mungkin ada masalah dengan koneksi Firebase.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-8 px-0 md:px-6">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center rounded-full border border-blue-200 px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 mb-4 rotate-[1deg] font-mono shadow-sm">
              <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
              <span className="group relative">
                quotes.contribute()
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 font-mono">
              {"<KontribusiQuoteMu />"}
            </h2>
            <p className="text-gray-600 font-mono">
              Punya quote programmer malas yang ingin ditampilkan di halaman utama?<br />
              <span className="rotate-[0.5deg] inline-block">Kirimkan di sini, dan mungkin quote kamu akan muncul!</span>
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8 rotate-[0.2deg] hover:rotate-0 transition-transform">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="author" className="text-sm font-medium font-mono">
                  Nama Kamu <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="author"
                  name="author"
                  placeholder="programmer weeb"
                  className="font-mono"
                  value={formData.author}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="text" className="text-sm font-medium font-mono">
                  Quote Kamu <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="text"
                  name="text"
                  placeholder='"Ngapain debug kode, mending rewrite dari awal"'
                  className="resize-none h-24 font-mono"
                  value={formData.text}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="flex justify-end -rotate-[0.5deg]">
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-mono group overflow-hidden relative"
                  disabled={isSubmitting}
                >
                  <span className="group-hover:translate-x-1 transition-transform inline-block">
                    {isSubmitting ? "Mengirim..." : "Kirim Quote"}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </div>
            </form>
          </div>
          
          <div className="mt-4 text-center text-sm text-gray-500 font-mono rotate-[-0.5deg]">
            <p>Catatan: Quote akan dimoderasi dan mungkin akan sedikit diubah sebelum ditampilkan</p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
} 