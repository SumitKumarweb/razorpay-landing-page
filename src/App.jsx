import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import CompaniesCarousel from "@/components/companies-carousel"
import StickyScrollFeatures from "@/components/sticky-scroll-features"
import GlobalScale from "@/components/global-scale"
import Features from "@/components/features"
import Stats from "@/components/stats"
import Integration from "@/components/integration"
import Testimonials from "@/components/testimonials"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

function App() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <CompaniesCarousel />
        <StickyScrollFeatures />
        <GlobalScale />
        <Features />
        <Stats />
        <Integration />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
