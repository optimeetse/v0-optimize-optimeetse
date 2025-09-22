"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Logo from "@/components/logo"
import { trackButtonClick } from "@/components/analytics-tracker"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (linkName: string) => {
    trackButtonClick(linkName, "navbar")
    setIsOpen(false)
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/20 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2" onClick={() => handleNavClick("logo")}>
              <Logo />
              <span className="text-xl font-bold text-white">Opitmeet</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onClick={() => handleNavClick(item.label)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              className="bg-cyan-500 hover:bg-cyan-600 text-white"
              onClick={() => {
                trackButtonClick("Get Started CTA", "navbar")
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-slate-900 border-slate-700">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium transition-colors"
                      onClick={() => handleNavClick(item.label)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button
                    className="bg-cyan-500 hover:bg-cyan-600 text-white mt-4"
                    onClick={() => {
                      trackButtonClick("Get Started CTA", "mobile_menu")
                      setIsOpen(false)
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Get Started
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
