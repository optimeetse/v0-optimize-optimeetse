import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Opitmeet Sales Engine - Revolutionizing Sales with AI Solutions",
  description:
    "Leverage cutting-edge artificial intelligence to optimize your sales process, increase conversions, and drive revenue growth with data-driven insights.",
  openGraph: {
    title: "Opitmeet Sales Engine - Revolutionizing Sales with AI Solutions",
    description:
      "Leverage cutting-edge artificial intelligence to optimize your sales process, increase conversions, and drive revenue growth with data-driven insights.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Opitmeet Sales Engine",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
