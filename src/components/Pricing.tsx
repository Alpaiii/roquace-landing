"use client"

const pricingData = [
  {
    title: "Website Templates",
    subtitle: "Ready-to-use templates for faster launch",
    startingPrice: "$29",
    priceNote: "One-time payment",
    features: [
      "Source code included",
      "Fully responsive design",
      "Comprehensive documentation",
      "Commercial use license",
      "Lifetime access & updates",
      "Community support",
    ],
    cta: "Explore Templates",
    ctaVariant: "secondary",
    ctaHref: "#templates",
    popular: false,
  },
  {
    title: "Custom Website",
    subtitle: "Tailored to your brand & goals",
    startingPrice: "Rp 15.000.000",
    priceNote: "Starting from",
    features: [
      "Custom design & strategy",
      "Responsive development",
      "SEO setup & optimization",
      "Performance optimization",
      "Deployment & hosting setup",
      "30 days post-launch support",
      "Content migration assistance",
      "Analytics setup",
    ],
    cta: "Start a Project",
    ctaVariant: "primary",
    ctaHref: "https://wa.me/628123456789?text=Hi%20ROQUACE,%20I%27d%20like%20to%20discuss%20a%20website%20project.",
    popular: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            Simple, transparent <span className="text-framercode-navy">pricing</span>
          </h2>
          <p className="section-subtitle">
            No hidden fees. Choose the option that fits your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {pricingData.map((plan, index) => (
            <article
              key={plan.title}
              className={`card p-8 lg:p-10 relative animate-slide-up ${plan.popular ? 'ring-2 ring-framercode-navy' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-framercode-navy text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-2">
                  {plan.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {plan.subtitle}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-bold text-5xl lg:text-6xl text-gray-900 dark:text-white">
                    {plan.startingPrice}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {plan.priceNote}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 text-framercode-navy flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.ctaVariant === "primary" ? (
                <a
                  href={plan.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  {plan.cta}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              ) : (
                <button
                  className="btn-secondary w-full"
                  onClick={() => {
                    const element = document.querySelector(plan.ctaHref)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  {plan.cta}
                </button>
              )}

              {plan.title === "Custom Website" && (
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Need something custom?
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Tell us what you're building and we'll discuss the requirements.
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}