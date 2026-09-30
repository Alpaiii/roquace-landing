"use client"

import { services } from '@/data/services'
import Link from 'next/link'

export default function Services() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-24 lg:py-32 bg-framercode-cream-light dark:bg-gray-900/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            Two ways to <span className="text-framercode-navy">get your website</span>
          </h2>
          <p className="section-subtitle">
            Choose the path that fits your timeline, budget, and vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="card p-8 lg:p-12 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-framercode-navy/10 text-framercode-navy flex items-center justify-center mb-6 group-hover:bg-framercode-navy group-hover:text-white transition-colors duration-300">
                {service.id === "templates" ? (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )}
              </div>
              <h3 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 text-framercode-navy flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              {service.id === "templates" ? (
                <button
                  onClick={() => scrollToSection(service.href)}
                  className="btn-secondary w-full"
                >
                  {service.cta}
                </button>
              ) : (
                <a
                  href="https://wa.me/628123456789?text=Hi%20ROQUACE,%20I%27d%20like%20to%20discuss%20a%20website%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  {service.cta}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              )}
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                Starting from <span className="font-semibold text-gray-900 dark:text-white">{service.startingPrice}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}