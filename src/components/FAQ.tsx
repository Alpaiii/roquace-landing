"use client"

import { useState } from 'react'
import { faq } from '@/data/faq'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const toggleFAQ = (category: string, index: number) => {
    const key = `${category}-${index}`
    setOpenIndex(openIndex === key ? null : key)
  }

  const renderFAQCategory = (category: string, title: string, items: typeof faq.templates) => (
    <div className="card p-6 lg:p-8 animate-slide-up">
      <h3 className="font-display font-semibold text-2xl text-gray-900 dark:text-white mb-6">
        {title}
      </h3>
      <div className="space-y-2">
        {items.map((item, index) => (
          <details
            key={`${category}-${index}`}
            className="group border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden"
            open={openIndex === `${category}-${index}`}
            onToggle={() => toggleFAQ(category, index)}
          >
            <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
              <span className="font-medium text-gray-900 dark:text-white pr-8">
                {item.question}
              </span>
              <svg
                className="w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-5 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  )

  return (
    <section id="faq" className="py-24 lg:py-32 bg-framercode-cream-light dark:bg-gray-900/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            Frequently asked <span className="text-framercode-navy">questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about templates and custom websites.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {renderFAQCategory("templates", "Website Templates", faq.templates)}
          {renderFAQCategory("services", "Custom Website Service", faq.services)}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Didn't find your answer?
          </p>
          <a
            href="https://wa.me/628123456789?text=Hi%20ROQUACE,%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Ask on WhatsApp
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}