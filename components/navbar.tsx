"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, PhoneCall } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-white">Opitmeet</span>
            <span className="ml-2 text-sm text-cyan-400">Sales Engine</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-sm text-slate-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#about" className="text-sm text-slate-300 hover:text-white transition-colors">
            About
          </Link>
          <Link href="#pricing" className="text-sm text-slate-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#contact" className="text-sm text-slate-300 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
            <PhoneCall className="mr-2 h-4 w-4" />
            (310) 429-0828
          </Button>
          <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-slate-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="#features"
              className="block py-2 text-slate-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#about"
              className="block py-2 text-slate-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#pricing"
              className="block py-2 text-slate-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="block py-2 text-slate-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-slate-800 flex flex-col space-y-3">
              <Button variant="outline" size="sm" className="justify-center border-slate-700">
                <PhoneCall className="mr-2 h-4 w-4" />
                (310) 429-0828
              </Button>
              <Button size="sm" className="justify-center bg-cyan-500 hover:bg-cyan-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
