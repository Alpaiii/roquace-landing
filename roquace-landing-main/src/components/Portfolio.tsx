"use client"

import { portfolio } from '@/data/portfolio'

export default function Portfolio() {
  return (
    <section id="work" className="py-24 lg:py-32 bg-framercode-cream-light dark:bg-gray-900/50">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="section-title">
              Selected <span className="text-framercode-navy">work</span>
            </h2>
            <p className="section-subtitle">
              A selection of websites we've designed and developed.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((project, index) => (
            <article
              key={project.name}
              className="card group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className="w-full h-full bg-framercode-cream-dark flex items-center justify-center">
                  <span className="text-gray-400 dark:text-gray-500">Project Preview</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <a
                    href={project.url}
                    className="btn-primary text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-framercode-navy dark:text-framercode-navy-light">
                  {project.category}
                </span>
                <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mt-2 mb-2 group-hover:text-framercode-navy transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technology.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium bg-framercode-navy/10 text-framercode-navy rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}