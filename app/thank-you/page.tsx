"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, Phone, ArrowRight, Clock, Users } from "lucide-react"

export default function ThankYouPage() {
  useEffect(() => {
    // Track conversion event
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "conversion", {
        event_category: "engagement",
        event_label: "contact_form_completed",
        value: 1,
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Thank You for Your Interest!</h1>
              <p className="text-xl text-slate-600 mb-8">
                We've received your information and are excited to help you book more qualified meetings for your
                business.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What Happens Next?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-cyan-50 p-4 rounded-lg mb-4">
                    <Clock className="h-8 w-8 text-cyan-600 mx-auto" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Within 24 Hours</h3>
                  <p className="text-slate-600 text-sm">
                    I'll personally review your information and reach out to schedule a discovery call
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-cyan-50 p-4 rounded-lg mb-4">
                    <Users className="h-8 w-8 text-cyan-600 mx-auto" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Discovery Call</h3>
                  <p className="text-slate-600 text-sm">
                    We'll discuss your sales challenges and show you our proven process
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-cyan-50 p-4 rounded-lg mb-4">
                    <ArrowRight className="h-8 w-8 text-cyan-600 mx-auto" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Get Started</h3>
                  <p className="text-slate-600 text-sm">
                    If it's a good fit, we can have you booking meetings within days
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-8 rounded-2xl text-white mb-12">
              <h2 className="text-2xl font-bold mb-4">Want to Skip the Wait?</h2>
              <p className="text-cyan-100 mb-6">
                Book a time directly on my calendar and we can discuss your needs right away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-cyan-600 hover:bg-slate-100"
                  onClick={() => window.open("https://calendly.com/aric-weinberg-1/1-hour-meeting", "_blank")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Book a Demo Call Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-cyan-700"
                  onClick={() => window.open("tel:+13104290828")}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call (310) 429-0828
                </Button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-slate-600 mb-4">In the meantime, feel free to explore more about our services:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#pricing">
                  <Button variant="outline" size="sm">
                    View Pricing
                  </Button>
                </Link>
                <Link href="/#about">
                  <Button variant="outline" size="sm">
                    Case Studies
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" size="sm">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Join Other Growing Businesses</h2>
            <p className="text-lg text-slate-600">
              Companies like yours are already booking 3-10+ qualified meetings per month
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-cyan-500 mb-2">15+</div>
              <div className="text-slate-600">Meetings Booked Monthly</div>
              <div className="text-sm text-slate-500 mt-2">B2B SaaS Company</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-cyan-500 mb-2">$80K+</div>
              <div className="text-slate-600">Saved vs Hiring SDR</div>
              <div className="text-sm text-slate-500 mt-2">Average Client</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-cyan-500 mb-2">3-5</div>
              <div className="text-slate-600">Days to Get Started</div>
              <div className="text-sm text-slate-500 mt-2">Setup Time</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
