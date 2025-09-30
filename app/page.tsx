"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  TrendingUp,
  Shield,
  BookOpen,
  Rocket,
  Microscope,
  Building2,
  FlaskConical,
  PhoneCall,
} from "lucide-react"
import ContactForm from "@/components/contact-form"
import PaymentModal from "@/components/payment-modal"
import FAQSection from "@/components/faq-section"
import { trackPageView, trackButtonClick } from "@/components/analytics-tracker"

export default function HomePage() {
  const [paymentModal, setPaymentModal] = useState<{
    isOpen: boolean
    packageType: "starter" | "growth" | "scale"
  }>({
    isOpen: false,
    packageType: "growth",
  })

  useEffect(() => {
    trackPageView("/", "Opitmeet - Life Sciences Sales Engine")
  }, [])

  const openPaymentModal = (packageType: "starter" | "growth" | "scale") => {
    setPaymentModal({ isOpen: true, packageType })
    trackButtonClick(`Open Payment Modal: ${packageType}`, "pricing_section")
  }

  const closePaymentModal = () => {
    setPaymentModal({ isOpen: false, packageType: "growth" })
  }

  const handleGetStartedClick = () => {
    trackButtonClick("Get Started CTA", "hero_section")
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleBlogPostClick = (postTitle: string) => {
    trackButtonClick(`Blog Post: ${postTitle}`, "blog_preview")
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
          <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium w-fit mb-6">
            Life Sciences Specialists
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Get Meetings with <span className="text-cyan-400">Pharma & Biotech</span> Decision Makers
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mb-10">
            We specialize in helping life sciences companies book qualified meetings with pharmaceutical and biotech
            executives. Our industry-focused cold email campaigns generate warm introductions to the decision makers you
            need to reach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white"
              onClick={() => {
                trackButtonClick("Book Strategy Call - Hero", "hero_section")
                window.open("https://calendly.com/aric-weinberg-1/1-hour-meeting", "_blank")
              }}
            >
              BOOK A PHARMA OUTREACH STRATEGY CALL
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-950/50 bg-transparent"
              onClick={() => {
                trackButtonClick("Call Now - Hero", "hero_section")
                window.open("tel:+13104290828")
              }}
            >
              <PhoneCall className="mr-2 h-4 w-4" />
              (310) 429-0828
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
              <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
              <div className="text-slate-300">Pharma Meetings/Month</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-slate-300">Life Sciences Contacts</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
              <div className="text-3xl font-bold text-cyan-400 mb-2">15%</div>
              <div className="text-slate-300">Response Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="features" className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How We Connect You with Pharma & Biotech
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our specialized approach to life sciences outreach gets you in front of the right pharmaceutical and
              biotech decision makers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Target Pharma Executives</h3>
              <p className="text-slate-600">
                We identify key decision makers at pharmaceutical and biotech companies using our specialized life
                sciences database and targeting
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Industry-Specific Outreach</h3>
              <p className="text-slate-600">
                Compliance-aware cold email campaigns with messaging tailored to pharmaceutical and biotech industry
                needs and regulations
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Qualified Pharma Meetings</h3>
              <p className="text-slate-600">
                Interested pharmaceutical and biotech prospects are delivered as warm leads ready for your sales team to
                convert into meetings
              </p>
            </div>
          </div>

          {/* Who We Help */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Life Sciences Companies We Serve</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-cyan-50 p-4 rounded-lg mb-4">
                  <Microscope className="h-8 w-8 text-cyan-600 mx-auto" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Biotech Startups</h4>
                <p className="text-slate-600 text-sm">
                  Early-stage biotechnology companies seeking pharma partnerships and licensing deals
                </p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-50 p-4 rounded-lg mb-4">
                  <FlaskConical className="h-8 w-8 text-cyan-600 mx-auto" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Life Sciences Service Providers</h4>
                <p className="text-slate-600 text-sm">
                  CROs, CDMOs, and consulting firms targeting pharmaceutical and biotech clients
                </p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-50 p-4 rounded-lg mb-4">
                  <Building2 className="h-8 w-8 text-cyan-600 mx-auto" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">MedTech Companies</h4>
                <p className="text-slate-600 text-sm">
                  Medical device and diagnostic companies seeking pharma collaborations and market access
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Life Sciences Success Story</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how we helped a biotech company secure meetings with top pharmaceutical partners
            </p>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 md:p-12 rounded-2xl text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium w-fit mb-6">
                  Case Study
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Biotech Startup → Big Pharma Partnerships</h3>
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">The Challenge:</h4>
                    <p className="text-slate-300">
                      Series B biotech company with promising oncology assets needed to connect with pharmaceutical
                      business development teams for potential partnerships
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Our Solution:</h4>
                    <p className="text-slate-300">
                      Targeted outreach to VP+ level executives at top 20 pharmaceutical companies with personalized
                      messaging about their therapeutic focus areas
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-xl">
                <h4 className="text-xl font-bold mb-6 text-center text-white">Campaign Results</h4>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Pharma Companies Reached:</span>
                    <span className="text-2xl font-bold text-cyan-400">150+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Response Rate:</span>
                    <span className="text-2xl font-bold text-cyan-400">18%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Qualified Meetings:</span>
                    <span className="text-2xl font-bold text-cyan-400">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Partnership Discussions:</span>
                    <span className="text-2xl font-bold text-cyan-400">3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">SDR & AI Weekly</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Stay updated with the latest insights on sales development, AI, and life sciences outreach strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Link
              href="/blog/ai-revolutionizing-pharma-outreach-2024"
              onClick={() => handleBlogPostClick("AI Pharma Outreach")}
            >
              <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                <img
                  src="/ai-pharmaceutical-outreach.jpg"
                  alt="AI in Pharma Outreach"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-cyan-600 font-medium mb-2">AI & Technology</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    How AI is Revolutionizing Pharmaceutical Outreach in 2024
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Discover how artificial intelligence is transforming the way life sciences companies connect with
                    pharmaceutical decision makers...
                  </p>
                </div>
              </article>
            </Link>

            <Link
              href="/blog/sdr-strategies-biotech-partnerships"
              onClick={() => handleBlogPostClick("SDR Strategies")}
            >
              <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                <img
                  src="/biotech-partnership-strategy.jpg"
                  alt="Biotech SDR Strategies"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-cyan-600 font-medium mb-2">SDR Strategy</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    SDR Strategies That Actually Work for Biotech Partnership Development
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Learn the proven sales development tactics that help biotech companies secure meetings with Big
                    Pharma business development teams...
                  </p>
                </div>
              </article>
            </Link>

            <Link
              href="/blog/cold-email-compliance-pharma-industry"
              onClick={() => handleBlogPostClick("Pharma Compliance")}
            >
              <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                <img
                  src="/pharmaceutical-compliance.jpg"
                  alt="Pharma Compliance"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-cyan-600 font-medium mb-2">Compliance</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Cold Email Compliance: What Life Sciences Companies Need to Know
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Navigate the complex regulatory landscape of pharmaceutical communications while maintaining
                    effective outreach campaigns...
                  </p>
                </div>
              </article>
            </Link>
          </div>

          <div className="text-center">
            <Link href="/blog">
              <Button
                className="bg-cyan-500 hover:bg-cyan-600 text-white"
                onClick={() => trackButtonClick("View All Blog Posts", "blog_preview")}
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Read All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Life Sciences Outreach Packages</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Specialized pricing for pharmaceutical and biotech outreach. All packages include industry expertise,
              compliance awareness, and dedicated life sciences account management.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Package */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative">
              <div className="text-center mb-8">
                <div className="bg-orange-50 p-4 rounded-lg mb-6 mx-auto w-fit">
                  <Rocket className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Biotech Starter</h3>
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  $3,500<span className="text-lg text-slate-600">/month</span>
                </div>
                <p className="text-slate-600">Perfect for early-stage biotech companies</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">3-5 warmed email inboxes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">500-1,000 emails/day to pharma targets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Life sciences messaging expertise</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Weekly pharma meeting reports</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Dedicated life sciences account manager</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Compliance-aware outreach</span>
                </li>
                <li className="flex items-start text-slate-400">
                  <div className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 flex items-center justify-center">
                    <div className="h-3 w-3 border-2 border-slate-300 rounded-full"></div>
                  </div>
                  <span>Pharma database & lead generation</span>
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
            <div className="bg-white p-8 rounded-2xl shadow-lg text-slate-900 relative border-2 border-cyan-500">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="text-center mb-8">
                <div className="bg-cyan-50 p-4 rounded-lg mb-6 mx-auto w-fit">
                  <TrendingUp className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Pharma Growth</h3>
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  $7,500<span className="text-lg text-slate-600">/month</span>
                </div>
                <p className="text-slate-600">Best for scaling life sciences companies</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">8-12 warmed email inboxes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">1,500-2,500 emails/day to pharma/biotech</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Advanced pharma targeting & personalization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Bi-weekly strategy calls with life sciences expert</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Priority support & optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Regulatory compliance guidance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cyan-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 font-semibold">Pharma database & lead generation included</span>
                </li>
              </ul>
              <Button
                className="w-full bg-cyan-500 text-white hover:bg-cyan-600"
                onClick={() => openPaymentModal("growth")}
              >
                Get Started
              </Button>
            </div>

            {/* Scale Package */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-800 p-8 rounded-2xl shadow-lg text-white relative border-2 border-yellow-400">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                Enterprise Scale
              </div>
              <div className="text-center mb-8">
                <div className="bg-yellow-400/20 p-4 rounded-lg mb-6 mx-auto w-fit">
                  <Shield className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise Pharma</h3>
                <div className="text-4xl font-bold text-white mb-2">
                  $15,000<span className="text-lg text-slate-300">/month</span>
                </div>
                <p className="text-slate-300">Maximum pharma outreach capacity</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white">20+ warmed email inboxes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white">3,000+ emails/day to global pharma</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white">White-glove life sciences campaign management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Weekly strategy & pharma market insights</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Dedicated life sciences success manager</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white">Global pharma compliance expertise</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white font-semibold">Premium pharma database & intelligence</span>
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
            <div className="bg-slate-50 p-8 rounded-xl shadow-sm border border-slate-200 max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Life Sciences Expertise Included</h3>
              <div className="grid md:grid-cols-3 gap-8 text-sm">
                <div className="text-center">
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <Shield className="h-8 w-8 text-green-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Regulatory Compliance</h4>
                  <p className="text-slate-600">
                    All outreach follows pharmaceutical industry guidelines and compliance requirements for professional
                    communications
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <Target className="h-8 w-8 text-blue-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Pharma Database Access</h4>
                  <p className="text-slate-600">
                    Specialized database of pharmaceutical and biotech decision makers with accurate contact information
                    and role details
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-50 p-4 rounded-lg mb-4">
                    <Users className="h-8 w-8 text-purple-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Industry Expertise</h4>
                  <p className="text-slate-600">
                    Your account manager understands life sciences terminology, market dynamics, and
                    relationship-building best practices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Compare Your Pharma Outreach Options</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how our specialized life sciences approach compares to generic outreach or building an in-house team
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left p-4 font-semibold text-slate-900">Feature</th>
                  <th className="text-center p-4 font-semibold text-orange-600">Biotech Starter</th>
                  <th className="text-center p-4 font-semibold text-cyan-600">Pharma Growth</th>
                  <th className="text-center p-4 font-semibold text-yellow-600">Enterprise</th>
                  <th className="text-center p-4 font-semibold text-slate-600">In-House</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-medium text-slate-900">Monthly Investment</td>
                  <td className="p-4 text-center text-orange-600 font-semibold">$3,500</td>
                  <td className="p-4 text-center text-cyan-600 font-semibold">$7,500</td>
                  <td className="p-4 text-center text-yellow-600 font-semibold">$15,000</td>
                  <td className="p-4 text-center text-slate-600 font-semibold">$25,000+</td>
                </tr>
                <tr className="border-t border-slate-100 bg-slate-50/50">
                  <td className="p-4 font-medium text-slate-900">Pharma Contacts Reached/Month</td>
                  <td className="p-4 text-center text-slate-700 font-semibold">2,000+</td>
                  <td className="p-4 text-center text-slate-700 font-semibold">5,000+</td>
                  <td className="p-4 text-center text-slate-700 font-semibold">10,000+</td>
                  <td className="p-4 text-center text-slate-700 font-semibold">500</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-medium text-slate-900">Life Sciences Expertise</td>
                  <td className="p-4 text-center text-green-600 text-xl">✅</td>
                  <td className="p-4 text-center text-green-600 text-xl">✅</td>
                  <td className="p-4 text-center text-green-600 font-semibold">✅ Premium</td>
                  <td className="p-4 text-center text-slate-500">Limited</td>
                </tr>
                <tr className="border-t border-slate-100 bg-slate-50/50">
                  <td className="p-4 font-medium text-slate-900">Pharma Database Access</td>
                  <td className="p-4 text-center text-red-600 text-xl">❌</td>
                  <td className="p-4 text-center text-green-600 text-xl">✅</td>
                  <td className="p-4 text-center text-green-600 font-semibold">✅ Global</td>
                  <td className="p-4 text-center text-slate-500">Manual</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="p-4 font-medium text-slate-900">Time to First Pharma Meeting</td>
                  <td className="p-4 text-center text-slate-700 font-semibold">2-3 weeks</td>
                  <td className="p-4 text-center text-slate-700 font-semibold">1-2 weeks</td>
                  <td className="p-4 text-center text-slate-700 font-semibold">1 week</td>
                  <td className="p-4 text-center text-slate-700 font-semibold">6+ months</td>
                </tr>
                <tr className="border-t border-slate-100 bg-slate-50/50">
                  <td className="p-4 font-medium text-slate-900">Compliance Support</td>
                  <td className="p-4 text-center text-slate-700">Basic</td>
                  <td className="p-4 text-center text-slate-700">Advanced</td>
                  <td className="p-4 text-center text-slate-700 font-semibold">White Glove</td>
                  <td className="p-4 text-center text-slate-500">DIY</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-500 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Connect with Pharma Decision Makers?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Stop struggling to reach pharmaceutical and biotech executives. Let our life sciences specialists generate
            qualified meetings for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-cyan-600 hover:bg-slate-100"
              onClick={() => {
                trackButtonClick("Book Strategy Call - CTA", "cta_section")
                window.open("https://calendly.com/aric-weinberg-1/1-hour-meeting", "_blank")
              }}
            >
              BOOK A PHARMA OUTREACH STRATEGY CALL
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-cyan-700 bg-transparent"
              onClick={() => {
                trackButtonClick("Call Now - CTA", "cta_section")
                window.open("tel:+13104290828")
              }}
            >
              <PhoneCall className="mr-2 h-4 w-4" />
              (310) 429-0828
            </Button>
          </div>
          <p className="text-white/80 mt-4 text-sm">No contracts • Life sciences expertise • Results guaranteed</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Tell us about your life sciences company and pharma outreach goals. We'll create a custom strategy for
              your needs.
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
              <h3 className="text-white text-lg font-semibold mb-4">OptiMeet</h3>
              <p className="mb-4">
                Specialized cold email campaigns connecting life sciences companies with pharmaceutical and biotech
                decision makers.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Life Sciences Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pharma Outreach Campaigns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Biotech Lead Generation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Partnership Meeting Setup
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Compliance-Aware Messaging
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    SDR & AI Weekly Blog
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Life Sciences Expertise
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">Los Angeles, CA</p>
              <p className="mb-2">(310) 429-0828</p>
              <p className="mb-4">info@optimeetse.com</p>
              <Button
                variant="outline"
                size="sm"
                className="border-slate-700 hover:border-slate-600 bg-transparent text-slate-400 hover:text-white"
                onClick={() => {
                  trackButtonClick("Contact Sales - Footer", "footer")
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Contact Sales
              </Button>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} OptiMeet Sales Engine. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Payment Modal */}
      <PaymentModal isOpen={paymentModal.isOpen} onClose={closePaymentModal} packageType={paymentModal.packageType} />
    </div>
  )
}
