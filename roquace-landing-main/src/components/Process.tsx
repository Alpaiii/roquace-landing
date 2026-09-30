"use client"

const processSteps = [
  {
    number: "01",
    title: "Tell Us About Your Project",
    description: "Share your business, goals, requirements, and ideas. We listen first, then plan.",
  },
  {
    number: "02",
    title: "We Plan",
    description: "We define the structure, content, features, and technical approach. You approve the roadmap.",
  },
  {
    number: "03",
    title: "We Build",
    description: "Your website is designed and developed according to the agreed requirements. Regular updates included.",
  },
  {
    number: "04",
    title: "Launch",
    description: "After testing and approval, your website goes live. We handle deployment and provide training.",
  },
]

export default function Process() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            Our <span className="text-framercode-navy">process</span>
          </h2>
          <p className="section-subtitle">
            A clear, collaborative journey from idea to launched website.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-framercode-navy/30 -translate-x-1/2" />
          
          <div className="space-y-12 lg:space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col lg:flex-row items-start gap-8 animate-slide-up ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative z-10 flex-shrink-0 w-20 lg:w-24">
                  <div className="relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-framercode-navy/30 -translate-x-1/2 hidden lg:block" />
                    <div className="relative w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-framercode-navy flex items-center justify-center text-white font-bold text-xl lg:text-2xl mx-auto lg:mx-0">
                      {step.number}
                    </div>
                  </div>
                </div>
                <div className="flex-1 lg:w-1/2 px-4">
                  <h3 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="https://wa.me/628123456789?text=Hi%20ROQUACE,%20I%27d%20like%20to%20discuss%20a%20website%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Start Your Project
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}