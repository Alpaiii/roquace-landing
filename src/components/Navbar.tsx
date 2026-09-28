"use client"

import { useState, useEffect } from 'react'

const navLinks = [
  { href: "#templates", label: "Templates" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-framercode-cream/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center" aria-label="ROQUACE Home">
            <img src="/images/Logo-white-transparant-TM.png" alt="ROQUACE" className="w-10 h-10" />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <button
                className="btn-secondary text-sm px-5 py-2 hidden sm:inline-flex"
                onClick={() => scrollToSection("#templates")}
              >
                Explore Templates
              </button>
              <a
                href="https://wa.me/628123456789?text=Hi%20ROQUACE,%20I%27d%20like%20to%20discuss%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-5 py-2"
              >
                Start a Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
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
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-2"
                  onClick={() => scrollToSection(link.href)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                <button
                  className="btn-secondary text-center px-4 py-2"
                  onClick={() => scrollToSection("#templates")}
                >
                  Explore Templates
                </button>
                <a
                  href="https://wa.me/628123456789?text=Hi%20ROQUACE,%20I%27d%20like%20to%20discuss%20a%20website%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center px-4 py-2"
                >
                  Start a Project
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}