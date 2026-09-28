"use client"

import { templates, categories } from '@/data/templates'
import { useState } from 'react'

export default function FeaturedTemplates() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredTemplates = activeCategory === "All"
    ? templates
    : templates.filter(t => t.category === activeCategory)

  return (
    <section id="templates" className="py-24 lg:py-32">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="section-title">
              Templates built to <span className="text-framercode-navy">launch</span>
            </h2>
            <p className="section-subtitle">
              Start with a professional foundation and customize it to fit your brand.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-framercode-navy text-white'
                  : 'bg-framercode-cream-dark text-gray-700 dark:text-gray-200 hover:bg-framercode-cream-darker'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template, index) => (
            <article
              key={template.name}
              className="card group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-framercode-cream-dark">
                <img
                  src={template.image}
                  alt={template.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col gap-3">
                  <a
                    href={template.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm text-center"
                  >
                    Live Preview
                  </a>
                  <a
                    href={template.purchaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm text-center"
                  >
                    Get Template
                  </a>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-framercode-navy dark:text-framercode-navy-light">
                  {template.category}
                </span>
                <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mt-2 mb-2">
                  {template.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {template.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {template.technology}
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {template.price}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}