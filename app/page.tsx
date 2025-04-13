import Navbar from "@/components/navbar"
import HeroSection from "@/components/section/hero-section"
import AboutSection from "@/components/section/about-section"
import ProductShowcaseSection from "@/components/section/product-showcase-section"
import FeaturesSection from "@/components/section/features-section"
import JoinSection from "@/components/section/join-section"
import QuoteSection from "@/components/section/quote-section"
import GallerySection from "@/components/section/gallery-section"
import StatsSection from "@/components/section/stats-section"
import TimelineSection from "@/components/section/timeline-section"
import ToolsSection from "@/components/section/tools-section"
import Footer from "@/components/footer"
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Product Showcase Section */}
        <ProductShowcaseSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Procrastination Timeline Section */}
        <TimelineSection />

        {/* Productivity Tools Section */}
        <ToolsSection />

        {/* Procrastinator Stats Section */}
        <StatsSection />

        {/* Join Section */}
        <JoinSection />

        {/* Gallery Section */}
        <GallerySection />

        {/* Quote Section */}
        <QuoteSection />
      </main>
      
      <Footer />
    </div>
  )
}
