"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  TrendingUp,
  Shield,
  Brain,
  Mail,
  Phone,
  Calendar,
  Clock,
  User,
  BookOpen,
} from "lucide-react"
import ContactForm from "@/components/contact-form"
import PaymentModal from "@/components/payment-modal"
import FAQSection from "@/components/faq-section"
import { trackPageView, trackButtonClick } from "@/components/analytics-tracker"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Targeting",
    description:
      "Advanced algorithms identify the highest-probability pharmaceutical and biotech prospects for your specific solutions.",
  },
  {
    icon: Mail,
    title: "Personalized Outreach",
    description:
      "Every email is crafted with AI to speak directly to each pharma executive's specific interests and challenges.",
  },
  {
    icon: Shield,
    title: "Compliance-First Approach",
    description:
      "All outreach follows FDA, HIPAA, and industry regulations to protect your reputation and ensure deliverability.",
  },
  {
    icon: Target,
    title: "Multi-Channel Campaigns",
    description: "Coordinated email, LinkedIn, and phone campaigns that work together to maximize response rates.",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Real-time dashboards show exactly which pharmaceutical companies are engaging with your outreach.",
  },
  {
    icon: Users,
    title: "Expert Management",
    description:
      "Dedicated life sciences specialists manage your campaigns with deep industry knowledge and relationships.",
  },
]

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "VP Business Development",
    company: "BioInnovate Therapeutics",
    content:
      "Opitmeet helped us secure 3 major pharma partnerships in 6 months. Their understanding of the life sciences industry is unmatched.",
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Michael Chen",
    role: "Chief Commercial Officer",
    company: "Precision Biotech",
    content:
      "The quality of leads from Opitmeet is exceptional. We're now in discussions with Pfizer and J&J thanks to their targeted approach.",
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Dr. Jennifer Walsh",
    role: "CEO",
    company: "NextGen Therapeutics",
    content:
      "Finally, a sales partner that understands pharmaceutical compliance and can navigate complex biotech partnerships.",
    avatar: "/placeholder-user.jpg",
  },
]

const pricingPlans = [
  {
    name: "Biotech Starter",
    price: "$3,500",
    period: "per month",
    description: "Perfect for early-stage biotech companies looking to establish pharma connections",
    features: [
      "500 targeted pharmaceutical contacts/month",
      "AI-powered email campaigns",
      "Basic LinkedIn outreach",
      "Monthly performance reports",
      "Email support",
      "Compliance monitoring",
    ],
    cta: "Start Building Pharma Relationships",
    popular: false,
  },
  {
    name: "Pharma Growth",
    price: "$7,500",
    period: "per month",
    description: "Ideal for growing life sciences companies ready to scale their pharmaceutical partnerships",
    features: [
      "1,500 targeted pharmaceutical contacts/month",
      "Advanced AI personalization",
      "Multi-channel campaigns (Email + LinkedIn + Phone)",
      "Dedicated account manager",
      "Weekly strategy calls",
      "CRM integration",
      "Advanced analytics dashboard",
      "Priority support",
    ],
    cta: "Accelerate Pharma Partnerships",
    popular: true,
  },
  {
    name: "Enterprise Pharma",
    price: "$15,000",
    period: "per month",
    description: "For established life sciences companies seeking maximum pharmaceutical market penetration",
    features: [
      "Unlimited pharmaceutical contacts",
      "Custom AI models for your industry",
      "Full-service campaign management",
      "Dedicated life sciences specialist team",
      "Custom integrations",
      "Real-time reporting",
      "Executive strategy sessions",
      "24/7 priority support",
      "Compliance consulting",
    ],
    cta: "Dominate Pharma Partnerships",
    popular: false,
  },
]

const blogPosts = [
  {
    slug: "ai-pharmaceutical-outreach-2024",
    title: "How AI is Revolutionizing Pharmaceutical Outreach in 2024",
    excerpt:
      "Discover how artificial intelligence is transforming the way life sciences companies connect with pharmaceutical partners.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "/ai-pharmaceutical-outreach.jpg",
  },
  {
    slug: "sdr-strategies-biotech-partnerships",
    title: "SDR Strategies That Actually Work for Biotech Partnership Development",
    excerpt:
      "Learn the proven sales development tactics that top biotech companies use to secure partnerships with Big Pharma.",
    author: "Michael Rodriguez",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "SDR Strategy",
    image: "/biotech-partnership-strategy.jpg",
  },
  {
    slug: "pharmaceutical-compliance-cold-outreach",
    title: "Navigating Pharmaceutical Compliance in Cold Outreach",
    excerpt:
      "Understanding FDA regulations, HIPAA compliance, and industry best practices when conducting outreach to pharmaceutical companies.",
    author: "Dr. Jennifer Walsh",
    date: "2024-01-01",
    readTime: "10 min read",
    category: "Compliance",
    image: "/pharmaceutical-compliance.jpg",
  },
]

export default function HomePage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  useEffect(() => {
    trackPageView("/", "Opitmeet - Life Sciences Sales Engine")
  }, [])

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName)
    trackButtonClick(`Select Plan: ${planName}`, "pricing_section")
  }

  const handleGetStartedClick = () => {
    trackButtonClick("Get Started CTA", "hero_section")
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleBlogPostClick = (postTitle: string) => {
    trackButtonClick(`Blog Post: ${postTitle}`, "blog_preview")
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Connect Your Life Sciences Company with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {" "}
                Big Pharma
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              AI-powered outreach that gets your biotech innovations in front of pharmaceutical decision makers. We
              generate qualified leads that turn into partnerships, licensing deals, and service contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg"
                onClick={handleGetStartedClick}
              >
                Get Your Pharma Strategy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg bg-transparent"
                onClick={() => {
                  trackButtonClick("Call Now", "hero_section")
                  window.open("tel:+13104290828")
                }}
              >
                <Phone className="mr-2 h-5 w-5" />
                (310) 429-0828
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">85%</div>
                <div className="text-slate-300">Higher Response Rates</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">3x</div>
                <div className="text-slate-300">More Qualified Meetings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">60%</div>
                <div className="text-slate-300">Faster Partnership Cycles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Life Sciences Companies Choose Opitmeet</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We understand the unique challenges of pharmaceutical outreach and have built specialized solutions for
              biotech companies, medical device manufacturers, and life sciences service providers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-cyan-500 mb-4" />
                  <CardTitle className="text-xl text-slate-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How We Generate Pharmaceutical Partnerships</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our proven 4-step process has helped dozens of life sciences companies secure partnerships with major
              pharmaceutical companies like Pfizer, J&J, Roche, and Novartis.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Pharma Database Analysis",
                description:
                  "We analyze 10,000+ pharmaceutical companies to identify the perfect targets for your specific therapeutic area and business model.",
              },
              {
                step: "02",
                title: "AI-Powered Personalization",
                description:
                  "Our AI creates highly personalized messages that reference specific clinical trials, partnerships, and business initiatives.",
              },
              {
                step: "03",
                title: "Multi-Channel Outreach",
                description:
                  "Coordinated campaigns across email, LinkedIn, and phone to reach pharmaceutical decision makers where they're most responsive.",
              },
              {
                step: "04",
                title: "Qualified Lead Delivery",
                description:
                  "We deliver warm, qualified pharmaceutical contacts who are actively interested in learning about your solutions.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Trusted by Leading Life Sciences Companies</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how biotech and life sciences companies are using Opitmeet to accelerate their pharmaceutical
              partnerships.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-slate-200">
                <CardContent className="p-6">
                  <p className="text-slate-600 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-600">{testimonial.role}</div>
                      <div className="text-sm text-cyan-600">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-cyan-500 mr-3" />
              <h2 className="text-4xl font-bold text-slate-900">SDR & AI Weekly</h2>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stay ahead with the latest insights on sales development, AI innovations, and life sciences industry
              trends.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-slate-800">{post.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg leading-tight hover:text-cyan-600 transition-colors">
                    <Link href={`/blog/${post.slug}`} onClick={() => handleBlogPostClick(post.title)}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link href="/blog">
              <Button
                variant="outline"
                size="lg"
                onClick={() => trackButtonClick("View All Blog Posts", "blog_preview")}
              >
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Choose Your Pharmaceutical Outreach Package</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transparent pricing designed for life sciences companies of all sizes. No setup fees, no long-term
              contracts, cancel anytime.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-2 ${
                  plan.popular ? "border-cyan-500 shadow-lg scale-105" : "border-slate-200"
                } hover:shadow-lg transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-cyan-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-slate-900">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-600 ml-2">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-4 text-slate-600 leading-relaxed">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-8 ${
                      plan.popular
                        ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                    onClick={() => handlePlanSelect(plan.name)}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">Need a custom solution for your life sciences company?</p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                trackButtonClick("Contact for Custom Solution", "pricing_section")
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contact Us for Custom Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Ready to Connect with Pharmaceutical Decision Makers?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Get a custom pharmaceutical outreach strategy designed specifically for your life sciences company.
                Let's discuss how we can help you secure the partnerships you need to grow.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <ContactForm />
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Life Sciences Companies Trust Opitmeet</h3>
                  <div className="space-y-4">
                    {[
                      "Deep understanding of pharmaceutical industry dynamics",
                      "Proven track record with biotech and life sciences companies",
                      "Compliance-first approach to all outreach activities",
                      "Dedicated account management and strategic guidance",
                      "Real-time reporting and transparent communication",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-4">Get in Touch</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-cyan-500 mr-3" />
                      <span className="text-slate-600">(310) 429-0828</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-cyan-500 mr-3" />
                      <span className="text-slate-600">info@optimeetse.com</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-cyan-500 mr-3" />
                      <span className="text-slate-600">Available Mon-Fri, 9AM-6PM PST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-lg"></div>
                <span className="text-xl font-bold">Opitmeet</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                AI-powered sales solutions for life sciences companies seeking pharmaceutical partnerships.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pharmaceutical Outreach
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Biotech Lead Generation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    AI-Powered Campaigns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Partnership Development
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Industry Reports
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Compliance Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>(310) 429-0828</li>
                <li>info@optimeetse.com</li>
                <li>Mon-Fri, 9AM-6PM PST</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Opitmeet. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>

      {/* Payment Modal */}
      {selectedPlan && (
        <PaymentModal isOpen={!!selectedPlan} onClose={() => setSelectedPlan(null)} planName={selectedPlan} />
      )}
    </div>
  )
}
