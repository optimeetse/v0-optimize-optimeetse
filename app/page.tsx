"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneCall, ArrowRight, Users, Target, Zap, Rocket, Shield, TrendingUp, CheckCircle } from "lucide-react"
import FAQSection from "@/components/faq-section"
import PaymentModal from "@/components/payment-modal"
import ContactForm from "@/components/contact-form"

export default function Home() {
  const [paymentModal, setPaymentModal] = useState<{
    isOpen: boolean
    packageType: "starter" | "growth" | "scale"
  }>({
    isOpen: false,
    packageType: "growth",
  })

  const openPaymentModal = (packageType: "starter" | "growth" | "scale") => {
    setPaymentModal({ isOpen: true, packageType })
  }

  const closePaymentModal = () => {
    setPaymentModal({ isOpen: false, packageType: "growth" })
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
            We Generate <span className="text-cyan-400">Hot Leads</span> Through Cold Email So You Can Focus on Closing
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mb-10">
            Stop wasting time on manual outreach. We run systematic cold email campaigns that generate interested
            prospects and hot leads for your sales team to follow up on and close.
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
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-950/50 bg-transparent"
              onClick={() => window.open("tel:+13104290828")}
            >
              <PhoneCall className="mr-2 h-4 w-4" />
              (310) 429-0828
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
              <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-slate-300">Hours Saved Per Week</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
              <div className="text-3xl font-bold text-cyan-400 mb-2">1000+</div>
              <div className="text-slate-300">Emails Sent Daily</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99%+</div>
              <div className="text-slate-300">Email Deliverability</div>
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
              From campaign setup to hot leads - we handle the outreach so you can focus on closing deals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Find & Target</h3>
              <p className="text-slate-600">
                We identify your ideal prospects using advanced lead generation and AI-powered targeting
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Email & Nurture</h3>
              <p className="text-slate-600">
                Multi-inbox cold email campaigns with personalized messaging and automated follow-up sequences
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Deliver Hot Leads</h3>
              <p className="text-slate-600">
                Interested prospects are delivered to you as hot leads for your team to call and close
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
                <p className="text-slate-600 text-sm">CEOs and executives who want predictable lead generation</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-50 p-4 rounded-lg mb-4">
                  <Target className="h-8 w-8 text-cyan-600 mx-auto" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Sales Teams & VPs</h4>
                <p className="text-slate-600 text-sm">
                  Teams that need consistent hot leads without the overhead of manual outreach
                </p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-50 p-4 rounded-lg mb-4">
                  <Zap className="h-8 w-8 text-cyan-600 mx-auto" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">High-Growth Companies</h4>
                <p className="text-slate-600 text-sm">
                  Businesses ready to scale their outbound lead generation systematically
                </p>
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
              See how we've helped businesses like yours generate more hot leads and scale their outreach
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
                      $5M revenue company struggling with inconsistent outbound results and poor lead quality
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Our Solution:</h4>
                    <p className="text-slate-300">
                      Multi-inbox cold email campaigns with targeted lead generation and AI-powered personalization
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-xl">
                <h4 className="text-xl font-bold mb-6 text-center">Campaign Performance</h4>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Daily Email Volume:</span>
                    <span className="text-2xl font-bold text-cyan-400">2,500+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Email Deliverability:</span>
                    <span className="text-2xl font-bold text-cyan-400">99.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Response Rate:</span>
                    <span className="text-2xl font-bold text-cyan-400">12%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Hot Leads Generated:</span>
                    <span className="text-2xl font-bold text-cyan-400">150+/mo</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Choose the plan that fits your business size and growth goals. All plans include full campaign management
              and dedicated support.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Package */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative">
              <div className="text-center mb-8">
                <div className="bg-orange-50 p-4 rounded-lg mb-6 mx-auto w-fit">
                  <Rocket className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  $2,500<span className="text-lg text-slate-600">/month</span>
                </div>
                <p className="text-slate-600">Perfect for getting started with cold email</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">3-5 warmed email inboxes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">500-1,000 emails/day capacity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Campaign setup & management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Weekly performance reports</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Hot lead delivery system</span>
                </li>
                <li className="flex items-start text-slate-400">
                  <div className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 flex items-center justify-center">
                    <div className="h-3 w-3 border-2 border-slate-300 rounded-full"></div>
                  </div>
                  <span>Lead generation services</span>
                </li>
              </ul>
              <Button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => openPaymentModal("starter")}
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
                <div className="bg-white/20 p-4 rounded-lg mb-6 mx-auto w-fit">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Growth</h3>
                <div className="text-4xl font-bold mb-2">
                  $5,000<span className="text-lg opacity-80">/month</span>
                </div>
                <p className="opacity-90">Best value for scaling businesses</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span>8-12 warmed email inboxes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span>1,500-2,500 emails/day capacity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span>Advanced campaign optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span>Bi-weekly strategy calls</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span>Hot lead delivery system</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span className="font-semibold">Lead generation included</span>
                </li>
              </ul>
              <Button
                className="w-full bg-white text-cyan-500 hover:bg-slate-100"
                onClick={() => openPaymentModal("growth")}
              >
                Get Started
              </Button>
            </div>

            {/* Scale Package */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-800 p-8 rounded-2xl shadow-lg text-white relative border-2 border-yellow-400">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                Maximum Scale
              </div>
              <div className="text-center mb-8">
                <div className="bg-yellow-400/20 p-4 rounded-lg mb-6 mx-auto w-fit">
                  <Shield className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Scale</h3>
                <div className="text-4xl font-bold mb-2">
                  $10,000<span className="text-lg opacity-80">/month</span>
                </div>
                <p className="opacity-90">Enterprise-grade outbound machine</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>20+ warmed email inboxes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>3,000+ emails/day capacity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>White-glove campaign management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Weekly strategy & optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Dedicated success manager</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Hot lead delivery system</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="font-semibold">Premium lead generation</span>
                </li>
              </ul>
              <Button
                className="w-full bg-yellow-400 text-slate-900 hover:bg-yellow-300 font-semibold"
                onClick={() => openPaymentModal("scale")}
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="text-center mt-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What's Included in Every Plan</h3>
              <div className="grid md:grid-cols-3 gap-8 text-sm">
                <div className="text-center">
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <Shield className="h-8 w-8 text-green-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Enterprise Deliverability</h4>
                  <p className="text-slate-600">
                    99%+ inbox delivery with advanced warming, domain rotation, and spam protection
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <Target className="h-8 w-8 text-blue-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">AI-Powered Personalization</h4>
                  <p className="text-slate-600">
                    Smart messaging that adapts to each prospect's industry, role, and company for higher response rates
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-50 p-4 rounded-lg mb-4">
                    <Users className="h-8 w-8 text-purple-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Dedicated Support</h4>
                  <p className="text-slate-600">
                    Your own account manager who knows your business and optimizes campaigns for maximum results
                  </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Compare Your Options</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how OptiMeet compares to building an in-house team or using other solutions
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left p-4 font-semibold text-slate-900">Feature</th>
                  <th className="text-center p-4 font-semibold text-orange-600">Starter</th>
                  <th className="text-center p-4 font-semibold text-cyan-600">Growth</th>
                  <th className="text-center p-4 font-semibold text-yellow-600">Scale</th>
                  <th className="text-center p-4 font-semibold text-slate-600">In-House</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-medium text-slate-900">Monthly Cost</td>
                  <td className="p-4 text-center text-orange-600">$2,500</td>
                  <td className="p-4 text-center text-cyan-600">$5,000</td>
                  <td className="p-4 text-center text-yellow-600">$10,000</td>
                  <td className="p-4 text-center text-slate-600">$15,000+</td>
                </tr>
                <tr className="border-t border-slate-100 bg-slate-50/50">
                  <td className="p-4 font-medium text-slate-900">Email Inboxes</td>
                  <td className="p-4 text-center text-orange-600">3-5</td>
                  <td className="p-4 text-center text-cyan-600">8-12</td>
                  <td className="p-4 text-center text-yellow-600">20+</td>
                  <td className="p-4 text-center text-slate-600">1-3</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-medium text-slate-900">Daily Email Volume</td>
                  <td className="p-4 text-center text-orange-600">500-1,000</td>
                  <td className="p-4 text-center text-cyan-600">1,500-2,500</td>
                  <td className="p-4 text-center text-yellow-600">3,000+</td>
                  <td className="p-4 text-center text-slate-600">100-500</td>
                </tr>
                <tr className="border-t border-slate-100 bg-slate-50/50">
                  <td className="p-4 font-medium text-slate-900">Lead Generation</td>
                  <td className="p-4 text-center text-orange-600">❌</td>
                  <td className="p-4 text-center text-cyan-600">✅</td>
                  <td className="p-4 text-center text-yellow-600">✅ Premium</td>
                  <td className="p-4 text-center text-slate-600">Manual</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-medium text-slate-900">Setup Time</td>
                  <td className="p-4 text-center text-orange-600">3-5 days</td>
                  <td className="p-4 text-center text-cyan-600">3-5 days</td>
                  <td className="p-4 text-center text-yellow-600">5-7 days</td>
                  <td className="p-4 text-center text-slate-600">3-6 months</td>
                </tr>
                <tr className="border-t border-slate-100 bg-slate-50/50">
                  <td className="p-4 font-medium text-slate-900">Management</td>
                  <td className="p-4 text-center text-orange-600">Full Service</td>
                  <td className="p-4 text-center text-cyan-600">Full Service</td>
                  <td className="p-4 text-center text-yellow-600">White Glove</td>
                  <td className="p-4 text-center text-slate-600">DIY</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-500 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Scale Your Lead Generation?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Stop wasting time on manual outreach. Let us generate hot leads while you focus on closing deals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-cyan-600 hover:bg-slate-100"
              onClick={() => window.open("https://calendly.com/aric-weinberg-1/1-hour-meeting", "_blank")}
            >
              BOOK A FREE STRATEGY CALL
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-cyan-700 bg-transparent"
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
              <p className="mb-4">AI-powered cold email campaigns that generate hot leads on autopilot.</p>
              <div className="flex space-x-4">{/* Social icons would go here */}</div>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cold Email Campaigns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Lead Generation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Hot Lead Delivery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Campaign Management
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
              <Button variant="outline" size="sm" className="border-slate-700 hover:border-slate-600 bg-transparent">
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
