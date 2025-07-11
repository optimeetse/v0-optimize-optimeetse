"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneCall, ArrowRight, Users, Target, Zap, Settings, Rocket } from "lucide-react"
import FAQSection from "@/components/faq-section"
import PaymentModal from "@/components/payment-modal"
import ContactForm from "@/components/contact-form"

export default function Home() {
  const [paymentModal, setPaymentModal] = useState<{ isOpen: boolean; packageType: "diy" | "core" | "growth" }>({
    isOpen: false,
    packageType: "core",
  })

  const openPaymentModal = (packageType: "diy" | "core" | "growth") => {
    setPaymentModal({ isOpen: true, packageType })
  }

  const closePaymentModal = () => {
    setPaymentModal({ isOpen: false, packageType: "core" })
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            We Book <span className="text-cyan-400">High-Value Meetings</span> So You Can Focus on Closing Deals
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mb-10">
            Stop chasing leads. We identify and book meetings with qualified prospects through targeted LinkedIn and
            email campaigns, delivering 3-10+ meetings per month directly to your calendar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white"
              onClick={() => window.open("https://calendly.com/aric-weinberg-1/1-hour-meeting", "_blank")}
            >
              GET STARTED TODAY - BOOK A DEMO
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-950/50"
              onClick={() => window.open("tel:+13104290828")}
            >
              <PhoneCall className="mr-2 h-4 w-4" />
              (310) 429-0828
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
              <div className="text-slate-300">Hours Saved Per Week</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
              <div className="text-3xl font-bold text-cyan-400 mb-2">3-10+</div>
              <div className="text-slate-300">Qualified Meetings/Month</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
              <div className="text-3xl font-bold text-cyan-400 mb-2">$80K+</div>
              <div className="text-slate-300">Saved vs Hiring SDR</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="features" className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How OptiMeet Works</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose your level of involvement - from full DIY control to completely managed campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Choose Your Path</h3>
              <p className="text-slate-600">
                DIY platform access or fully managed campaigns - we support both approaches
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Launch Campaigns</h3>
              <p className="text-slate-600">
                Run your own sequences or let our team handle everything from targeting to follow-up
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Book Meetings</h3>
              <p className="text-slate-600">
                Qualified prospects book directly on your calendar while you focus on closing deals
              </p>
            </div>
          </div>

          {/* Who We Help */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Who We Help</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-cyan-50 p-4 rounded-lg mb-4">
                  <Users className="h-8 w-8 text-cyan-600 mx-auto" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">$1M-$10M Businesses</h4>
                <p className="text-slate-600 text-sm">Where CEOs or executives handle sales directly</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-50 p-4 rounded-lg mb-4">
                  <Target className="h-8 w-8 text-cyan-600 mx-auto" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Sales Teams & Agencies</h4>
                <p className="text-slate-600 text-sm">Teams that want platform access without managed services</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-50 p-4 rounded-lg mb-4">
                  <Zap className="h-8 w-8 text-cyan-600 mx-auto" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Growing Companies</h4>
                <p className="text-slate-600 text-sm">Businesses ready to scale their outbound efforts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Real Results</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how we've helped businesses like yours book more meetings and close more deals
            </p>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 md:p-12 rounded-2xl text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium w-fit mb-6">
                  Case Study
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">B2B SaaS Company</h3>
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">The Challenge:</h4>
                    <p className="text-slate-300">
                      $5M revenue company relying solely on inbound leads, struggling to book consistent outbound
                      meetings
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Our Solution:</h4>
                    <p className="text-slate-300">
                      Targeted campaigns identifying key decision-makers in their ideal customer profile
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-xl">
                <h4 className="text-xl font-bold mb-6 text-center">Results Achieved</h4>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Monthly Meetings:</span>
                    <span className="text-2xl font-bold text-cyan-400">15+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Q1 Closed Deals:</span>
                    <span className="text-2xl font-bold text-cyan-400">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Time Saved:</span>
                    <span className="text-2xl font-bold text-cyan-400">40+ hrs/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Choose Your Approach</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From DIY platform access to fully managed campaigns. No contracts, no hidden fees.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* DIY Package */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                New!
              </div>
              <div className="text-center mb-8">
                <div className="bg-orange-50 p-3 rounded-lg mb-4 mx-auto w-fit">
                  <Settings className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">DIY Engine</h3>
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  $149<span className="text-lg text-slate-600">/user/month</span>
                </div>
                <p className="text-slate-600">Full platform access - you run it</p>
                <p className="text-sm text-orange-600 font-medium mt-2">No onboarding, no managed services</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-orange-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Complete platform access</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Unlimited email sequences</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">LinkedIn automation tools</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">CRM integrations</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Analytics & reporting</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Email support</span>
                </li>
              </ul>
              <Button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white mb-4"
                onClick={() => openPaymentModal("diy")}
              >
                Start DIY Engine
              </Button>
              <p className="text-xs text-slate-500 text-center">
                Volume pricing: 3+ users get 10% off, 6+ users get 20% off
              </p>
            </div>

            {/* Core Package */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="text-center mb-8">
                <div className="bg-cyan-50 p-3 rounded-lg mb-4 mx-auto w-fit">
                  <Rocket className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Core</h3>
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  $5,000<span className="text-lg text-slate-600">/month</span>
                </div>
                <p className="text-slate-600">Perfect for getting started</p>
                <p className="text-sm text-cyan-600 font-medium mt-2">Fully managed campaigns</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-cyan-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">1 email + LinkedIn inbox</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-cyan-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">50-200 emails/day</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-cyan-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">3-5 qualified meetings/month</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-cyan-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Weekly performance reports</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-cyan-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Full onboarding & setup</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-cyan-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Dedicated account manager</span>
                </li>
              </ul>
              <Button
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                onClick={() => openPaymentModal("core")}
              >
                Get Started
              </Button>
            </div>

            {/* Growth Package */}
            <div className="bg-cyan-500 p-8 rounded-2xl shadow-lg text-white relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-cyan-900 px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="text-center mb-8">
                <div className="bg-white/20 p-3 rounded-lg mb-4 mx-auto w-fit">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Growth</h3>
                <div className="text-4xl font-bold mb-2">
                  $8,500<span className="text-lg opacity-80">/month</span>
                </div>
                <p className="opacity-90">For scaling businesses</p>
                <p className="text-sm font-medium mt-2 text-cyan-100">Premium managed service</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-white rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Everything in Core, plus:</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>2 mailboxes (CEO + AE/BDR)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>400-800 emails/day</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>6-10 qualified meetings/month</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Quarterly strategy review</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Priority support & optimization</span>
                </li>
              </ul>
              <Button
                className="w-full bg-white text-cyan-500 hover:bg-slate-100"
                onClick={() => openPaymentModal("growth")}
              >
                Get Started
              </Button>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Which Option Is Right for You?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="text-center">
                  <div className="bg-orange-50 p-3 rounded-lg mb-3">
                    <Settings className="h-6 w-6 text-orange-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Choose DIY Engine if:</h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>• You have outbound experience</li>
                    <li>• You want full control</li>
                    <li>• You have a team to manage campaigns</li>
                    <li>• You need multiple user access</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-cyan-50 p-3 rounded-lg mb-3">
                    <Rocket className="h-6 w-6 text-cyan-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Choose Core if:</h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>• You want us to handle everything</li>
                    <li>• You're new to outbound</li>
                    <li>• You prefer guaranteed results</li>
                    <li>• You want strategic guidance</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-cyan-50 p-3 rounded-lg mb-3">
                    <Users className="h-6 w-6 text-cyan-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Choose Growth if:</h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>• You need higher volume</li>
                    <li>• You have multiple team members</li>
                    <li>• You want premium support</li>
                    <li>• You're scaling rapidly</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">DIY vs Managed vs Hiring In-House</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Compare all your options for scaling outbound sales
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left p-6 font-semibold text-slate-900">Feature</th>
                  <th className="text-center p-6 font-semibold text-orange-600">DIY Engine</th>
                  <th className="text-center p-6 font-semibold text-cyan-600">Managed Service</th>
                  <th className="text-center p-6 font-semibold text-slate-600">In-House Sales Rep</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="p-6 font-medium text-slate-900">Monthly Cost</td>
                  <td className="p-6 text-center text-orange-600">$149/user</td>
                  <td className="p-6 text-center text-cyan-600">$5,000-$8,500</td>
                  <td className="p-6 text-center text-slate-600">$6,000+ salary + benefits</td>
                </tr>
                <tr className="border-t border-slate-100 bg-slate-50/50">
                  <td className="p-6 font-medium text-slate-900">Setup Time</td>
                  <td className="p-6 text-center text-orange-600">Immediate access</td>
                  <td className="p-6 text-center text-cyan-600">3-5 days</td>
                  <td className="p-6 text-center text-slate-600">3-6 months</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-6 font-medium text-slate-900">Control Level</td>
                  <td className="p-6 text-center text-orange-600">Full control</td>
                  <td className="p-6 text-center text-cyan-600">Strategic input</td>
                  <td className="p-6 text-center text-slate-600">Full control</td>
                </tr>
                <tr className="border-t border-slate-100 bg-slate-50/50">
                  <td className="p-6 font-medium text-slate-900">Expertise Required</td>
                  <td className="p-6 text-center text-orange-600">High</td>
                  <td className="p-6 text-center text-cyan-600">None</td>
                  <td className="p-6 text-center text-slate-600">Training required</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-6 font-medium text-slate-900">Scalability</td>
                  <td className="p-6 text-center text-orange-600">High (add users)</td>
                  <td className="p-6 text-center text-cyan-600">Medium (add packages)</td>
                  <td className="p-6 text-center text-slate-600">Low (hire more people)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-500 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Book More Meetings?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Whether you want full control or complete management, we have the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-cyan-600 hover:bg-slate-100"
              onClick={() => window.open("https://calendly.com/aric-weinberg-1/1-hour-meeting", "_blank")}
            >
              BOOK A FREE DEMO TODAY
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-cyan-700"
              onClick={() => window.open("tel:+13104290828")}
            >
              <PhoneCall className="mr-2 h-4 w-4" />
              (310) 429-0828
            </Button>
          </div>
          <p className="text-white/80 mt-4 text-sm">No contracts • Setup in days • Results guaranteed</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Fill out the form below and we'll be in touch within 24 hours to discuss your needs
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Opitmeet</h3>
              <p className="mb-4">Revolutionizing sales with AI solutions that drive results.</p>
              <div className="flex space-x-4">{/* Social icons would go here */}</div>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    DIY Platform Access
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Managed Campaigns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Sales Analytics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Team Collaboration
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">Los Angeles, CA</p>
              <p className="mb-2">(310) 429-0828</p>
              <p className="mb-4">info@covermygenetics.com</p>
              <Button variant="outline" size="sm" className="border-slate-700 hover:border-slate-600">
                Contact Sales
              </Button>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Opitmeet Sales Engine. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Payment Modal */}
      <PaymentModal isOpen={paymentModal.isOpen} onClose={closePaymentModal} packageType={paymentModal.packageType} />
    </div>
  )
}
