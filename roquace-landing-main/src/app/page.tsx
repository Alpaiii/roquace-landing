import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import FeaturedTemplates from '@/components/FeaturedTemplates'
import WhyUs from '@/components/WhyUs'
import Process from '@/components/Process'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FeaturedTemplates />
        <WhyUs />
        <Process />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}