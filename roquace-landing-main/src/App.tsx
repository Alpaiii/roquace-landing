import { useState, useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: "Mugen Studio",
    category: "Branding / Web",
    image: "https://framerusercontent.com/images/wn56GiYIGN9okbMTZQ8fV2UQ0.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "KYMA",
    category: "Web Design",
    image: "https://framerusercontent.com/images/tBF8hMQFxONWA4CXtHf3R4.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "Kora",
    category: "Consulting Site",
    image: "https://framerusercontent.com/images/AZe7hFsRlGAWp9spF25RMEwS0gA.jpg",
    link: "#"
  },
  {
    id: 4,
    title: "Axiom",
    category: "Ecommerce Site",
    image: "https://framerusercontent.com/images/q3ruKmoVYmFXP9EeyZlQPnTDuVw.jpg",
    link: "#"
  },
  {
    id: 5,
    title: "Mugen Studio",
    category: "Branding / Web",
    image: "https://framerusercontent.com/images/wn56GiYIGN9okbMTZQ8fV2UQ0.jpg",
    link: "#"
  },
  {
    id: 6,
    title: "KYMA",
    category: "AI Agency",
    image: "https://framerusercontent.com/images/tBF8hMQFxONWA4CXtHf3R4.jpg",
    link: "#"
  },
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Visual Editing",
    description: "Design visually with a powerful canvas. Drag, drop, and see changes instantly without writing code."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Lightning Fast",
    description: "Built on modern web standards. Your sites load instantly with optimized assets and edge deployment."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Component System",
    description: "Build once, reuse everywhere. Create design systems with interactive components and variants."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Real-time Collaboration",
    description: "Work together seamlessly. See cursors, leave comments, and iterate with your team in real-time."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Production Ready",
    description: "Ship with confidence. Built-in SEO, analytics, forms, and CMS integrations out of the box."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Custom Code",
    description: "Add custom React components, API routes, and server-side logic when you need full control."
  },
];

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="font-display font-bold text-xl text-gray-900 dark:text-white flex items-center gap-2">
            <img src="/images/Logo-white-transparant-TM.png" alt="roquace" className="w-6 h-6" />
            roquace
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <a href="#login" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Log in
              </a>
              <a href="#start" className="btn-primary text-sm px-5 py-2">
                Start for free
              </a>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-800 animate-slide-down">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-2"
                   onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                <a href="#login" className="text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-2"
                   onClick={() => setMobileMenuOpen(false)}>
                  Log in
                </a>
                <a href="#start" className="btn-primary text-center px-4 py-2"
                   onClick={() => setMobileMenuOpen(false)}>
                  Start for free
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-framercode-cream-darker/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-framercode-cream-dark/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-framercode-cream-darker/10 to-framercode-cream-dark/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-framercode-cream-darker/20 text-framercode-cream-darker text-sm font-medium mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-framercode-cream-darker opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-framercode-cream-darker"></span>
            </span>
            New: AI Site Generator — Build sites in seconds
          </div>

          <h1 className="section-title animate-slide-up animate-delay-100">
            Design and publish <span className="text-framercode-cream-darker">modern sites</span> visually
          </h1>

          <p className="section-subtitle animate-slide-up animate-delay-200">
            roquace is the web builder for creative pros. Design visually, publish instantly, and scale effortlessly — all without writing code.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-slide-up animate-delay-300">
            <a href="#start" className="btn-primary w-full sm:w-auto">
              Start for free
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#demo" className="btn-secondary w-full sm:w-auto">
              Watch demo
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>

          <div className="mt-16 animate-fade-in animate-delay-400">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-gray-900/50 rounded-2xl"></div>
              <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-2xl bg-white dark:bg-gray-900">
                <div className="flex items-center gap-2 px-4 py-3 bg-framercode-cream-light dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center text-sm text-gray-500 dark:text-gray-400 font-mono">
                    roquace.site
                  </div>
                </div>
                <div className="aspect-video bg-framercode-cream-light dark:bg-gray-950 relative overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/wn56GiYIGN9okbMTZQ8fV2UQ0.jpg"
                    alt="Framer Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <p className="font-display font-bold text-3xl sm:text-4xl mb-2">Mugen Studio</p>
                    <p className="text-gray-300">Branding / Web Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400 animate-fade-in animate-delay-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-framercode-cream-darker" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-framercode-cream-darker" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free forever for personal use
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-framercode-cream-darker" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Cancel anytime
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
  );
}

function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-framercode-cream dark:bg-gray-950/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            Everything you need to <span className="text-framercode-cream-darker">build better</span>
          </h2>
          <p className="section-subtitle">
            Powerful features that help you design, build, and ship stunning websites faster than ever before.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <article
              key={index}
              className="card p-6 lg:p-8 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-framercode-cream-darker/20 text-framercode-cream-darker flex items-center justify-center mb-6 group-hover:bg-framercode-cream-darker group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="section-title">
              Featured <span className="text-framercode-cream-darker">projects</span>
            </h2>
            <p className="section-subtitle">
              Explore sites built by our community of designers and developers.
            </p>
          </div>
          <a href="#all-projects" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-framercode-cream-darker transition-colors">
            View all projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="card group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <a href={project.link} className="block relative overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900 dark:text-white">
                      View project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
              <div className="p-6">
                <span className="text-sm font-medium text-framercode-cream-darker dark:text-framercode-cream-dark">
                  {project.category}
                </span>
                <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mt-2 group-hover:text-framercode-cream-darker transition-colors">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-gray-900 dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-framercode-navy/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-framercode-navy-light/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-6">
            Ready to build your <span className="text-framercode-navy">next project</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of designers and developers creating stunning websites with roquace. Start free, scale when you're ready.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#start" className="btn-primary w-full sm:w-auto text-lg px-8 py-4">
              Start building free
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#contact" className="btn-secondary w-full sm:w-auto text-lg px-8 py-4 border-gray-600 text-gray-200 hover:bg-gray-800 hover:border-gray-500">
              Contact sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Templates", href: "#templates" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#changelog" },
      { label: "Roadmap", href: "#roadmap" },
    ],
    Company: [
      { label: "About", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#careers" },
      { label: "Press", href: "#press" },
      { label: "Contact", href: "#contact" },
    ],
    Resources: [
      { label: "Documentation", href: "#docs" },
      { label: "Community", href: "#community" },
      { label: "Experts", href: "#experts" },
      { label: "Affiliates", href: "#affiliates" },
      { label: "Status", href: "#status" },
    ],
    Legal: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
      { label: "Security", href: "#security" },
    ],
  };

  return (
    <footer className="bg-framercode-cream dark:bg-gray-950 border-t border-framercode-cream-dark dark:border-gray-800">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="font-display font-bold text-xl text-gray-900 dark:text-white flex items-center gap-2 mb-4">
              <img src="/images/Logo-white-transparant-TM.png" alt="roquace" className="w-6 h-6" />
              roquace
            </a>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
              The web builder for creative pros. Design visually, publish instantly.
            </p>
            <div className="flex gap-4">
              <a href="#twitter" className="text-gray-400 hover:text-framercode-navy transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
              </a>
              <a href="#github" className="text-gray-400 hover:text-framercode-navy transition-colors" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="#linkedin" className="text-gray-400 hover:text-framercode-navy transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/></svg>
              </a>
              <a href="#youtube" className="text-gray-400 hover:text-framercode-navy transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 4.5a2.5 2.5 0 00-5 0v15a2.5 2.5 0 005 0v-15zM14 9l6 4.5-6 4.5v-9z"/></svg>
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-gray-500 dark:text-gray-400 hover:text-framercode-navy transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} roquace. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span>Made with roquace</span>
              <a href="#privacy" className="hover:text-framercode-navy transition-colors">Privacy</a>
              <a href="#terms" className="hover:text-framercode-navy transition-colors">Terms</a>
              <a href="#cookies" className="hover:text-framercode-navy transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-framercode-navy focus-visible:ring-offset-2"
      aria-label="Scroll to top"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Projects />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}