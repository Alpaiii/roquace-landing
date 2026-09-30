const whyUs = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Built for Performance",
    description: "Lightweight websites optimized for speed and smooth browsing. Every millisecond counts.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Responsive by Default",
    description: "Designed to look great across desktop, tablet, and mobile. No extra work needed.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Easy to Customize",
    description: "Clean and reusable components make customization simple. Build on solid foundations.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Business Focused",
    description: "Every website is built around a clear business goal. Design that converts.",
  },
]

export default function WhyUs() {
  return (
    <section className="py-24 lg:py-32 bg-framercode-cream-light dark:bg-gray-900/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            Why choose <span className="text-framercode-navy">ROQUACE</span>?
          </h2>
          <p className="section-subtitle">
            We don't just build websites. We build digital experiences that drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {whyUs.map((item, index) => (
            <article
              key={item.title}
              className="card p-6 lg:p-8 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-framercode-navy/10 text-framercode-navy flex items-center justify-center mb-6 group-hover:bg-framercode-navy group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}