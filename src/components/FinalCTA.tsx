"use client"

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-framercode-navy dark:bg-framercode-navy relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-framercode-cream-darker/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-framercode-cream-dark/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-6">
            Have a <span className="text-framercode-cream">website in mind?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Whether you need a ready-to-use template or a completely custom website, let's build something that works for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/628123456789?text=Hi%20ROQUACE,%20I%27d%20like%20to%20discuss%20a%20website%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto text-lg px-8 py-4 bg-framercode-cream text-framercode-navy hover:bg-framercode-cream-light"
            >
              Start a Project
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <button
              className="btn-secondary w-full sm:w-auto text-lg px-8 py-4 border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500"
              onClick={() => {
                const element = document.querySelector("#templates")
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Explore Templates
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}