"use client"

const testimonials = [
  {
    quote: "Working with ROQUACE made the entire website process incredibly simple. The result was exactly what we needed.",
    name: "Sarah Chen",
    role: "Founder",
    company: "Lumina Creative",
  },
  {
    quote: "The template we bought saved us months of development time. Clean code, great documentation, and easy to customize.",
    name: "Marcus Johnson",
    role: "CTO",
    company: "Velocity Labs",
  },
  {
    quote: "ROQUACE understood our brand vision perfectly. The custom website they built exceeded our expectations in every way.",
    name: "Elena Rodriguez",
    role: "Marketing Director",
    company: "Aura Wellness",
  },
]

const showcaseProjects = [
  {
    name: "NOVA Template",
    description: "Creative agency template with modern animations",
    category: "Showcase Project",
  },
  {
    name: "MERIDIAN Template",
    description: "SaaS landing page with conversion-focused design",
    category: "Showcase Project",
  },
  {
    name: "AURA Template",
    description: "Elegant fashion brand template",
    category: "Showcase Project",
  },
]

export default function Testimonials() {
  const hasRealTestimonials = testimonials.length > 0

  return (
    <section className="py-24 lg:py-32">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            {hasRealTestimonials ? 'Trusted by' : 'Featured'} <span className="text-framercode-navy">{hasRealTestimonials ? 'clients' : 'showcases'}</span>
          </h2>
          <p className="section-subtitle">
            {hasRealTestimonials
              ? "Don't just take our word for it. Here's what our clients say."
              : "Real projects we've designed to demonstrate our capabilities."}
          </p>
        </div>

        {hasRealTestimonials ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.name}
                className="card p-8 group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <svg className="w-10 h-10 text-framercode-navy/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.84v7.391h-5.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-4.01 3.638-4.01 5.84v7.391h-5.983z"/>
                </svg>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {showcaseProjects.map((project, index) => (
              <article
                key={project.name}
                className="card p-8 group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-framercode-navy/10 text-framercode-navy flex items-center justify-center mb-6 group-hover:bg-framercode-navy group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {project.description}
                </p>
                <span className="text-sm font-medium text-framercode-navy dark:text-framercode-navy-light">
                  {project.category}
                </span>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}