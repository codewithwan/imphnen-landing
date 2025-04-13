"use client"

import QuoteGallery from "@/components/quote-gallery"
import QuoteSubmissionForm from "@/components/quote-submission-form"
import ScrollReveal from "@/components/scroll-reveal"

export default function QuoteSection() {
  return (
    <section id="quotes" className="py-4 relative">
      <ScrollReveal>
        <QuoteGallery />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <QuoteSubmissionForm />
      </ScrollReveal>
    </section>
  )
} 