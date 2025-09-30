"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { trackButtonClick } from "./analytics-tracker"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (label: string) => {
    trackButtonClick(label, "navigation")
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2" onClick={() => handleNavClick("Logo")}>
            <div className="w-8 h-8 bg-cyan-500 rounded-lg"></div>
            <span className={`text-xl font-bold ${isScrolled ? "text-slate-900" : "text-white"}`}>Opitmeet</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#features"
              className={`${isScrolled ? "text-slate-700 hover:text-cyan-600" : "text-white hover:text-cyan-300"} transition-colors`}
              onClick={() => handleNavClick("Features")}
            >
              Features
            </Link>
            <Link
              href="/#pricing"
              className={`${isScrolled ? "text-slate-700 hover:text-cyan-600" : "text-white hover:text-cyan-300"} transition-colors`}
              onClick={() => handleNavClick("Pricing")}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className={`${isScrolled ? "text-slate-700 hover:text-cyan-600" : "text-white hover:text-cyan-300"} transition-colors`}
              onClick={() => handleNavClick("Blog")}
            >
              Blog
            </Link>
            <Link
              href="/#contact"
              className={`${isScrolled ? "text-slate-700 hover:text-cyan-600" : "text-white hover:text-cyan-300"} transition-colors`}
              onClick={() => handleNavClick("Contact")}
            >
              Contact
            </Link>
            <Button
              className="bg-cyan-500 hover:bg-cyan-600 text-white"
              onClick={() => {
                trackButtonClick("Call Now - Nav", "navigation")
                window.open("tel:+13104290828")
              }}
            >
              <Phone className="mr-2 h-4 w-4" />
              (310) 429-0828
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-slate-900" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/#features"
              className="block text-slate-700 hover:text-cyan-600"
              onClick={() => handleNavClick("Features - Mobile")}
            >
              Features
            </Link>
            <Link
              href="/#pricing"
              className="block text-slate-700 hover:text-cyan-600"
              onClick={() => handleNavClick("Pricing - Mobile")}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="block text-slate-700 hover:text-cyan-600"
              onClick={() => handleNavClick("Blog - Mobile")}
            >
              Blog
            </Link>
            <Link
              href="/#contact"
              className="block text-slate-700 hover:text-cyan-600"
              onClick={() => handleNavClick("Contact - Mobile")}
            >
              Contact
            </Link>
            <Button
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
              onClick={() => {
                trackButtonClick("Call Now - Mobile Nav", "navigation")
                window.open("tel:+13104290828")
              }}
            >
              <Phone className="mr-2 h-4 w-4" />
              (310) 429-0828
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
