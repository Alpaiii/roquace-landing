"use client"

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-framercode-cream-darker/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-framercode-cream-dark/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-framercode-cream-darker/10 to-framercode-cream-dark/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-framercode-navy/10 text-framercode-navy text-sm font-medium mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-framercode-navy opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-framercode-navy"></span>
            </span>
            New: Premium templates & custom websites
          </div>

          <h1 className="section-title animate-slide-up animate-delay-100 text-balance">
            Websites that make your business look <span className="text-framercode-navy">ready for the next level</span>.
          </h1>

          <p className="section-subtitle animate-slide-up animate-delay-200 max-w-3xl mx-auto">
            Premium website templates and custom websites designed for modern businesses, creators, and ambitious brands.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-slide-up animate-delay-300">
            <button
              onClick={() => scrollToSection("#templates")}
              className="btn-secondary w-full sm:w-auto"
            >
              Explore Templates
            </button>
            <a
              href="https://wa.me/628123456789?text=Hi%20ROQUACE,%20I%27d%20like%20to%20discuss%20a%20website%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              Start a Project
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          <div className="mt-16 animate-fade-in animate-delay-400">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-framercode-navy"></span>
                Fast
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-framercode-navy"></span>
                Modern
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-framercode-navy"></span>
                Responsive
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-framercode-navy"></span>
                Built for Business
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}